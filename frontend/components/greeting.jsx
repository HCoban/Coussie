import React from 'react';

export const Greeting = ({currentUser}) => {
  if (currentUser) {
    return <button>Log Out</button>;
  } else {
    return (
      <div>
        <h1>Webpage under construction!</h1>
      </div>
    );
  }
};
