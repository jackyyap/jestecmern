import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import Register from "./Register";


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  const register = Register;

  return (
    <header class="masthead">

      <div class="container h-100">
        <div class="row h-100">
          <div class="card rounded col-md-6 col-lg-7 mx-auto my-auto text-dark p-5">
            <div class="justify-content-between card bg-danger text-center mb-3">
              <div class="py-5">
                <h3 class="display-4 text-light">Welcome back!</h3>
              </div>
            </div>
            {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            <form className="form" onSubmit={submit}>
              <div class="form-label-group mb-2">
                <label htmlFor="login-email">Email Address</label>
                <input type="email" id="login-email" name="uid" class="form-control" placeholder="Email address" autofocus onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div class="form-label-group mb-2">
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name="pwd" class="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase mb-2" type="submit">Login</button>
              <hr />
              <button class="btn btn-lg btn-secondary btn-block btn-login text-uppercase mb-2" type="button" onClick={register}>Register</button>
              <div class="text-center">
                <a class="small" href="#">Forgot password?</a></div>
            </form>
          </div>
        </div>
      </div>

    </header>
  );
};


