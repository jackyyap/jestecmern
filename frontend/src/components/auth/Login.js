import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function Login() {
    const register = () => history.push("/register");
    const {setUserData} = useContext(UserContext);
    const history = useHistory();

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
              <form>
                <div class="form-label-group mb-2">
                  <label for="inputEmail">Email address</label>
                  <input type="email" id="inputEmail" name="uid" class="form-control" placeholder="Email address" required autofocus />
                </div>

                <div class="form-label-group mb-2">
                  <label for="inputPassword">Password</label>
                  <input type="password" id="inputPassword" name="pwd" class="form-control" placeholder="Password" required />
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
}
