import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Footer from './footer/footer';

const App = ({main, sidebar, children}) => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="content">
      {sidebar}
      {main || children}
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
