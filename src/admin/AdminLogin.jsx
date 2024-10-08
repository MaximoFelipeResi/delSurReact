import React from "react";
import { EventTarget, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { store, setAuth, setLoginTime } from "../redux/store/store";

import "./admin-css/adminlogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const endpoint = store.getState().api;

  if (store.getState().user) {
    location.href = "/";
  }

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const login = async () => {
    await axios
      .post(`${store.getState().api}/login`, {
        
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          return;
        }

          alert("Inicio de sesion correcto");

          store.dispatch(setAuth({
              user: response.data.user,
              authorisation: response.data.authorisation
          }));

          let startTime = Date.now();
          store.dispatch(setLoginTime(startTime));

          location.href = "/";
      });
  };


  return (
    <section className="login-section" id="login">
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2 className="h2-login">Login</h2>

            <div className="inputbox">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
              </span>
              <input
                className="input-login" id="email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="label-login" htmlFor="">
                Email
              </label>
            </div>

            <div className="inputbox">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path>
                </svg>
              </span>
              <input
              id="password"
                className="input-login"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label className="label-login" htmlFor="">
                Password
              </label>
            </div>

            

            <a
              href="javascript:void(0)"
              className="login-btn"
              onClick={() => {
                login();
              }}
            >
              Log in
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
