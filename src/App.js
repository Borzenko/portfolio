import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import WelcomePage from './pages/welcomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={WelcomePage} />
      </div>
    </Router>
  );
}

export default App;
