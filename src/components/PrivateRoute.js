import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!sessionStorage.getItem("token"); // consistent with your login

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/deptadmin/loginwithjwt" />
        )
      }
    />
  );
};

export default PrivateRoute;
