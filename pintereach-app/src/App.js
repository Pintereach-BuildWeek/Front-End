import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="nav">

      </div>
        <div className="body">
          <Route exact path="/" component={Signup} />
        </div>
    </div>
    </Router>
  );
}

export default App;
