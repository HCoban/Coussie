import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Footer from './footer/footer';

const App = ({children}) => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="content">
      {children}
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
