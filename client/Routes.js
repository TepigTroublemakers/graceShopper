import React, { Component, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store';
import AllPots from './components/AllPots';
import AllUsers from './components/AllUsers';

/**
 * COMPONENT
 */
const Routes = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => {
    return !!state.auth.id;
  });

  useEffect(() => {
    dispatch(me());
  }, []);

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/pots" component={AllPots} />
            <Route path="/users" component={AllUsers} />
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    //auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes));
export default Routes
