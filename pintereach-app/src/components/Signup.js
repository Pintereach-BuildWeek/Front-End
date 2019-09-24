// IMPORTS

import React from "react";

import { connect } from "react-redux";

import { Button, Layout, Form, Icon, Input } from 'antd';


import { signup } from "../actions";

// SIGNUP COMPONENT


const { Content } = Layout;

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
      .then(() => this.props.history.push(""));  //  <- ADD PATH
  };

  render() {
    return (
      <>
        <div className="sign-up">
          <Layout>
            <Content
              style={{
                width: 480,
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '2rem',
                marginBottom: '2rem'
              }}
              className="sign-up-form">

              <h1>
                Sign Up for Pintereach
              </h1>

              <Form
                layout='horizontal'
                onSubmit={this.signup}>
                <Input
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  style={{ marginBottom: '1rem' }}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.signupCreds.email}
                  onChange={this.changeHandler}
                  required
                />
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  style={{ marginBottom: '1rem' }}

                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.signupCreds.username}
                  onChange={this.changeHandler}
                  required
                />
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  style={{ marginBottom: '1rem' }}

                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.signupCreds.password}
                  onChange={this.changeHandler}
                  required
                />
                <Button

                >Sign Up</Button>
              </Form>
            </Content>
          </Layout>
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