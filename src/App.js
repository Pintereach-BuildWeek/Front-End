import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup";
import NavBar from './components/NavBar';
import PrivateRoute from "./components/PrivateRoute";
// import Modal from "./components/Modal";
import Home from './components/Home';


const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Router>
      <div className="App">
        <Header style={{ display: 'flex', justifyContent: 'space-evenly', background: 'white' }} >
          <h1>Pintereach</h1>
          <h3>Organize Your Studies</h3>
          <NavBar style={{ justifyContent: 'space-evenly', width: '50%' }} />

        </Header>
        <Content>
          <div className="body">
            <Route exact path="/" component={Signup} />
            {/* <PrivateRoute exact path="/protected" component={Modal} /> */}
          </div>

          <Route path='/home' component={Home} />
        </Content>
      </div>
      <Footer style={{ textAlign: 'center' }}>
        Copyright Pintereach 2019
      </Footer>
    </Router >
  );
}

export default App;
