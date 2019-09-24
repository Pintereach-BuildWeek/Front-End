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

  import React, {useState} from "react";
  import axios from "axios";
  import { Link } from "react-router-dom";
  
  const Signup = (props) => {
  

  
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
        <div>
        <h1>Pintereach App</h1>
        </div>
  
        <form onSubmit={handleSubmit}>
  
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            value={user.username}
          />
  
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={user.password}
          />
  
          <button type="submit">Sign Up and Log In</button>

          <hr></hr>
  
          <section className="userlogin">
            Already have an account? <Link to="/login">Log in</Link>
          </section>

        </form>
        <br></br>
        <br></br>
        <br></br>

            <footer>
                <p> Add Footer Content !!! </p>
            </footer>

        </div>
      </>
    );
  };
  
  export default Signup;
  