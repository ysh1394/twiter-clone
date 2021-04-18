import React, { useState } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Navigation from './Navigation';
import Profile from '../routes/Profile';

const AppRouter = ({ isLoggedIn, userObj }) => (
  <>
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={Home} userObj={userObj} />
            <Route exact path="/profile" component={Profile} />
          </>
        ) : (
          <>
            <Route exact path="/" component={Auth} />
            <Redirect from="*" to="/" />
          </>
        )}

      </Switch>
    </Router>
  </>
);

export default AppRouter;

// export default () => (
//   <Router>
//     <Switch></Switch>
//   </Router>
// )
