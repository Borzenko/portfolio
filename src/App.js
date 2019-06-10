import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/_paper-dashboard.scss';

class App extends React.Component {
  render() {
     return (
      <div className="wrapper">
        <Menu></Menu>
        <div className="main-panel">
          <div className="content">
          </div>
        </div>
      </div>
     );
  }
}

export default App;
