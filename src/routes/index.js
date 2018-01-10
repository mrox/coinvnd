import CoreLayout from "../layouts/CoreLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import { HomeLayout } from "../layouts/HomeLayout/HomeLayout";
import Home from "./Home";
import LoginRoute from "./Login";
import SignupRoute from "./Signup";
import ProjectsRoute from "./Projects";
import AccountRoute from "./Account";
import NotFoundRoute from "./NotFound";
import Dashboard from './Dashboard';
// import name from './';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = store => ({
  path: "/",
  component: CoreLayout,
  // indexRoute: Home,
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    {
      path: "/dashboard",
      component: DashboardLayout,
      indexRoute: Dashboard,
      childRoutes: [
        AccountRoute(store),
        ProjectsRoute(store)
        // LoginRoute(store),
        // SignupRoute(store),
        // ProjectsRoute(store),
        // AsyncRoute(store) // async routes setup by passing store
        // SyncRoute, // sync routes just need route object by itself
        /* Place all Routes above here so NotFoundRoute can act as a 404 page */
        // NotFoundRoute(store)
      ]
    },
    {
      path: '/home',
      component: HomeLayout,
      indexRoute: Home,
      childRoutes : [
        LoginRoute(store),
        SignupRoute(store)
      ]
    },
    // LoginRoute(store),
    // SignupRoute(store),
    
    // AsyncRoute(store) // async routes setup by passing store
    // SyncRoute, // sync routes just need route object by itself
    /* Place all Routes above here so NotFoundRoute can act as a 404 page */

    NotFoundRoute(store)
  ]
});

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
