import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CircularProgress, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "black",
    backgroundColor: "white",
  },
}));

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Suspense
        fallback={
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <Switch>
          <Route exact path="/" component={Login} />
          {/* start - dashboard */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/account" component={Dashboard} />
          <Route path="/facebook-bot" component={Dashboard} />
          {/* end - dashboard */}

          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
