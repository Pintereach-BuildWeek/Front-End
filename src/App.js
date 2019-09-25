import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
// import Signup from "./components/Signup";
// import NavBar from './components/NavBar';
// import PrivateRoute from "./components/PrivateRoute";
// import ArticleList from './components/ArticleList';
// import Menu from "./components/Menu";
// import Modal from "./components/Modal";
// import ArticleCard from "./components/ArticleCard";
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <div className="nav">
        <NavBar/>
      </div>
      <div className="body">
        <Route exact path="/" component={Signup} />
        <PrivateRoute exact path="/protected" component={Modal} />
      </div> */}
      <Home />
    </div>
    </Router>
  );
}

export default App;
