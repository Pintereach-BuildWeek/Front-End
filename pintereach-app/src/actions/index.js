// IMPORTS

import axios from "axios";

// EXPORTS

export const LOGIN_START = "LOGIN_START";
export const SIGNUP_START = "SIGNUP_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// LOGIN ACTION '.POST'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://bw-pintereach.herokuapp.com/login", creds)  //  <- ADD PATH
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    });
};

// SIGNUP ACTION '.POST' 

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://bw-pintereach.herokuapp.com/createnewuser", creds)  //  <- ADD PATH
    .then(res => {

      return axios
        .post("https://bw-pintereach.herokuapp.com/login", creds)  //  <- ADD PATH
        .then(res => {
          localStorage.setItem("token", res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        });
    });
};

// .ADD & .DELETE TO BE ADDED 

