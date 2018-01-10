import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, withStateHandlers } from "recompose";

import Navbar from "containers/Navbar";

import classes from "./DashboardLayout.scss";
import { Notifications } from "modules/notification";
import "styles/core.scss";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import { withStyles } from "material-ui/styles";

import classNames from "classnames";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Divider from "material-ui/Divider";
import List from "material-ui/List";
import { mailFolderListItems, otherMailFolderListItems } from "./tileData";

import purple from "material-ui/colors/purple";
import green from "material-ui/colors/green";
import indigo from "material-ui/colors/indigo";

const drawerWidth = 100;

const enhance = compose(
  withStateHandlers(
    ({ initialMenuOpen = false }) => ({
      newMenuOpen: initialMenuOpen
    }),
    // Add state handlers as props
    {
      toggleMenu: ({ newMenuOpen }) => () => ({
        newMenuOpen: !newMenuOpen
      })
    }
  ),
  withHandlers({
    addTodo: props => () => {
      console.log(props.leftMenuOpen);
    }
    // props.firestore.add('todos', { text: props.inputVal || 'sample', done: false })
  })
);

export const DashboardLayout = ({
  children,
  addTodo,
  newMenuOpen,
  toggleMenu
}) => {
  // console.log(leftMenuOpen);
  // console.log(leftMenuOpen);
  return (
    <div>

      <Drawer
        type="permanent"
        className={newMenuOpen ? classes.drawerPaperClose : classes.drawerPaperOpen}
      >
        <button onClick={toggleMenu}>sdf</button>
        <div className={newMenuOpen ? classes.drawerPaperClose : classes.drawerPaperOpen}>
          <List className={classes.list}>{mailFolderListItems}</List>
          <Divider />
          <List className={classes.list}>{otherMailFolderListItems}</List>
        </div>
      </Drawer>
      <div className={newMenuOpen ? classes.childrenClose : classes.childrenOpen}>{children}</div>
      <Notifications />
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default enhance(DashboardLayout);
