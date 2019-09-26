/*// IMPORTS

import React from "react";

import { connect } from "react-redux";

import { signup } from "../actions";

// SIGNUP COMPONENT

class Signup extends React.Component {
    state = {
      signupCreds: {
        email: "",
        username: "",
        password: ""
      }
    };
  
    changeHandler = e => {
      this.setState({
        signupCreds: {
          ...this.state.signupCreds,
          [e.target.name]: e.target.value
        }
      });
    }; 
  
    signup = e => {
      // e.preventDefault(); <- IF NEEDED
      this.props
        .signup(this.state.signupCreds)
        .then(() => this.props.history.push("/home"));  //  <- ADD PATH
    };
  
    render() {
      return (
        <>
          <div className="sign-up">

            <section className="sign-up-form">

              <h1>
                Sign Up for Pintereach
              </h1>

              <form onSubmit={this.signup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.signupCreds.email}
                  onChange={this.changeHandler}
                  required
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.signupCreds.username}
                  onChange={this.changeHandler}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.signupCreds.password}
                  onChange={this.changeHandler}
                  required
                />
                <button type="submit">Sign Up</button>
              </form>
            </section>

          </div>

          <footer>
            <p> Add Footer Content !!! </p>
          </footer>

        </>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    //email: state.email,
    //username: state.username,
    //password: state.password
  });
  
  export default connect(
    mapStateToProps,
    { signup }
  )(Signup);

*/

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Layout, Form, Icon, Input } from 'antd';


const Signup = (props) => {

  const { Content } = Layout;


  // STATE

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  // CHANGE

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // SUBMIT

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://bw-pintereach.herokuapp.com/createnewuser", user)
      .then(res => {
        console.log("test:", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");                         //  <- CHANGE PATH
      })
      .catch(err => console.error(err.response));
  };

  return (
    <>
      <div>
        <Layout>
          <Content
            style={{
              width: 480,
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '2rem',
              marginBottom: '2rem'
            }}
            className="sign-up-form"
          >

            <div>
              <h1>Pintereach App</h1>
            </div>

            <Form onSubmit={handleSubmit}>

              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{ marginBottom: '1rem' }}
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
                value={user.username}
              />

              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{ marginBottom: '1rem' }}
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={user.password}
              />

              <Button type="submit">Sign Up and Log In</Button>

              <hr></hr>

              <section className="userlogin">
                Already have an account? <Link to="/login">Log in</Link>
              </section>

            </Form>
            <br></br>
            <br></br>
            <br></br>
          </Content>
        </Layout>



      </div>
    </>
  );
};

export default Signup;
