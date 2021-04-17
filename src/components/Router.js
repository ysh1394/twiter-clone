import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = ({ isLoggedIn }) => (
  <>
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/" component={Home} />
        ) : (
          <Route>
            <Auth />
          </Route>
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
