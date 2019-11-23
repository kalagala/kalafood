import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

// const ProtectedRoute = props => {
//   console.log(props);
//   let { children, isAuthenticated, path, ...rest } = props;
//   console.log(isAuthenticated);
//   let toRender = () => {
//     if (isAuthenticated) {
//       console.log("we are rendering child since we are authenticated");
//       return children;
//     } else {
//       console.log("we are redirecting to login");
//       return (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: path }
//           }}
//         />
//       );
//     }
//   };
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         console.log(props);
//         if (isAuthenticated) {
//           console.log("we are rendering child since we are authenticated");
//           return children;
//         } else {
//           console.log("we are redirecting to login");
//           return (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: path }
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
  console.log(
    `about to render a protected route and the auth is ${isAuthenticated}`
  );
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
export default withRouter(ProtectedRoute);
