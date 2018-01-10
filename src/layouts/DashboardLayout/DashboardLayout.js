import React from "react";
import PropTypes from "prop-types";
import Navbar from "containers/Navbar";

import classes from "./DashboardLayout.scss";
import { Notifications } from "modules/notification";
import "styles/core.scss";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import purple from "material-ui/colors/purple";
import green from "material-ui/colors/green";
import indigo from "material-ui/colors/indigo";

const font = '"Open Sans", sans-serif';
const theme = createMuiTheme({
  palette: {
    primary: indigo // Purple and green play nicely together.
    //   secondary: {
    //     ...green,
    //     A400: "#00e677"
    //   },
    //   error: red
  },
  typography: {
    fontFamily: font,
    button: {
      // height: 48,
    }
  },
  shadows: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  overrides: {
    MuiButton: {
      root: {
        // borderColor:'#BCCCEB',
        fontWeight: "400",
        // color: '#BCCCEB !important',
        // fontSize: '16px !important',
        // letterSpacing: '0 !important',
        // fontStyle: 'normal!important',
        textTransform: "unset!important"
        // border: '1px solid rgba(0,0,0,.15)',
        // margin: '4px',
        // padding:"0 16px"
        // fontStyle: 'italic',
        // borderRadius: 100,
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: "0 0px 1px rgba(0,0,0,.09)"
      }
    },
    MuiPaper: {
      root: {
        boxShadow: "0 3px 5px 2px rgba(231, 231, 231, 0.3)"
      }
    }
  }
});

export const DashboardLayout = ({ children }) => (
    <div>
      <Navbar />
      <div className={classes.children}>{children}</div>
      <Notifications />
    </div>
);

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default DashboardLayout;
