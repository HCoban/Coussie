import React from 'react';

export const Greeting = ({currentUser}) => {
  if (currentUser) {
    return <button>Log Out</button>;
  } else {
    return <button>Log In</button>;
  }
};
