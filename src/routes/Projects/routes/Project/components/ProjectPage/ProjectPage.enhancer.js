import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, getVal } from "react-redux-firebase";
import { spinnerWhileLoading } from "utils/components";
import { withHandlers, withStateHandlers, pure } from "recompose";

export default compose(
  // Create listener for project
  firebaseConnect(({ params }) => [
    {
      path: `projects/${params.projectname}`
    }
  ]),
  // Map project from redux state to props
  connect(({ firebase: { data } }, { params }) => ({
    projeca: getVal(data, `projects/${params.projectname}`)
  })),
  
  spinnerWhileLoading(["projeca"]),

  withHandlers({
    viewProject: props => newInstance => {
      console.log(newInstance);
    }
  }),
  // Show loading spinner while project is loading
  pure
);
