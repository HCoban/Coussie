import React from 'react';
import { Link } from 'react-router';

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="api/users/show">My page</Link>
        <h2>Logout</h2>
      </div>
    );
  }
}

export default Options;
