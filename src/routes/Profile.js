import { authService } from 'fBase';
import React from 'react';

export default () => {
  const onSignOutClick = () => {
    authService.signOut();
  };

  return (
    <>
      <button onClick={onSignOutClick} type="button">Sign Out</button>
      <div> ads</div>
    </>
  );
};
