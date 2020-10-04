import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";

import {useUserState} from './context/UserContext.js'

export default function App() {

  var {isAuthenticated}  = useUserState()

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/admin" />} />
        <PrivateRoute path="/admin" component={AdminLayout} />
        <PublicRoute path="/auth" component={AuthLayout} />

      </Switch>
    </BrowserRouter>
  );


  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <AuthLayout {...props} />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }

}

