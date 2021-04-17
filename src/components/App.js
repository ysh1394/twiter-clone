import React, { useEffect, useState } from 'react';
import { authService } from 'fBase';
import AppRouter from './Router';

function App() {
  const userState = authService.currentUser;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  });

  // console.log('authService.currentUser >>>', authService.currentUser);
  // setInterval(() => {
  //   console.log('authService.currentUser >>>', authService.currentUser);
  // }, 2000);

  return (
    <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing....'}</>
  );
}

export default App;
