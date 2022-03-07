import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { me } from './store';
import AllPots from './components/AllPots';
import AllUsers from './components/AllUsers';
import SinglePot from './components/SinglePot';
import Cart from './components/Cart';
import EditAccount from './components/EditAccount';

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
          <Route exact path="/pots" component={AllPots} />
          <Route path="/pots/:potId" component={SinglePot} />
          <Route path="/users" component={AllUsers} />
          <Route path="/cart" component={Cart} />
          <Route path="/home" component={Home} />
          <Route path="/edit" component={EditAccount} />
          <Redirect to="/home" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/pots" component={AllPots} />
          <Route path="/pots/:potId" component={SinglePot} />
          <Route path="/cart" component={Cart} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      )}
    </div>
  );
};

export default Routes;
