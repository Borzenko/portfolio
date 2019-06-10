import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import WelcomePage from './pages/welcomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/_paper-dashboard.scss';

class App extends React.Component {
  render() {
     return (
      <Router>
        <div className="wrapper">
          <Menu></Menu>
          <div className="main-panel">
            <div className="content">
              <Route path="/" exact component={WelcomePage} />
            </div>
          </div>
        </div>
      </Router>
     );
  }
}

export default App;
