import React from 'react';
import NavbarContainer from './navbar/navbar_container';

const App = ({children}) => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="content">
      {children}
    </div>
  </div>
);

export default App;
