// IMPORTS

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
        .then(() => this.props.history.push(""));  //  <- ADD PATH
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
                <button>Sign Up</button>
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