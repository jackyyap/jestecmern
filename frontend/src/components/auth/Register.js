import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Register() {
  const login = () => history.push("/login")

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [affiliation, setAffiliation] = useState();
  const [title, setTitle] = useState();
  const [orcidId, setOrcidId] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, firstName, lastName, affiliation, title, orcidId };
      await Axios.post(
        "http://localhost:5000/users/register",
        newUser
      );
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      })
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    }
    catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <header class="masthead py-5">
      <br />

      <div class="container h-100">
        <div class="row h-100">
          <div class="card rounded col-md-6 col-lg-7 mx-auto my-auto text-dark p-5">
            <div class="justify-content-between card bg-danger text-center mb-3">
              <div class="py-5">
                <h3 class="display-4 text-light">Register</h3>
              </div>
            </div>
            {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            <form onSubmit={submit}>
              <div class="form-label-group mb-2">
                <label for="inputEmail">Email address</label>
                <input
                  type="email"
                  id="register-email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  placeholder="Email address"
                />
              </div>

              <div class="form-row">
                <div class="col-sm-6 form-label-group">
                  <label for="register-password">Password</label>
                  <input
                    type="password"
                    id="register-password"
                    onChange={(e) => setPassword(e.target.value)}
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div class="col-sm-6 form-label-group">
                  <label for="register-password">Confirm Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    class="form-control"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="col-sm-2 form-label-group">
                  <label for="register-title">Title</label>
                  <select 
                    type="text"
                    id="register-title"
                    onChange={(e) => setTitle(e.target.value)}
                    class="form-control"
                    placeholder="Title"
                    required>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                  </select>
                </div>
                <div class="col-sm-5 form-label-group">
                  <label for="register-firstName">First Name</label>
                  <input
                    type="text"
                    id="register-firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col-sm-5 form-label-group">
                  <label for="register-lastName">Last Name</label>
                  <input
                    type="text"
                    id="register-lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>

            <div class="form-row">
              <div class="col-sm-6 form-label-group mb-3">
                <label for="register-affiliation">Affiliation</label>
                <input
                  type="text"
                  id="register-affiliation"
                  onChange={(e) => setAffiliation(e.target.value)}
                  class="form-control"
                  placeholder="Affiliation"

                  autofocus />
              </div>
              <div class="col-sm-6">
                <label for="register-orcid">ORCID ID</label>
                <input
                  type="text"
                  id="register-orcid"
                  onChange={(e) => setOrcidId(e.target.value)}
                  class="form-control"
                  placeholder="0000-0000-0000-0000"
                  
                  autofocus />
                <small class="text-muted">Please provide ORCID ID</small>
              </div>
            </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">Agree to JESTEC Terms and Conditions</label>
              </div>
              <button value="Register" class="btn btn-lg btn-primary btn-block btn-login text-uppercase mb-2" type="submit">Register</button>
              <hr />
              <button class="btn btn-lg btn-secondary btn-block btn-login text-uppercase mb-2" type="button" onClick={login}>Back to Login</button>
            </form>
          </div>
        </div>
      </div>

    </header>
    // <div className="page">
    //     <h2>Register</h2>
    //     <form onSubmit={submit}>
    //         <label htmlFor="register-email">Email</label>
    //         <input
    //             id="register-email"
    //             type="email"
    //             onChange={(e) => setEmail(e.target.value)}
    //         />

    //         <label htmlFor="register-password">Password</label>
    //         <input
    //             id="register-password"
    //             type="password"
    //             onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <input
    //             type="password"
    //             placeholder="verify password"
    //             onChange={(e) => setPasswordCheck(e.target.value)}
    //         />

    //         <label htmlFor="register-firstName">First name</label>
    //         <input
    //             id="register-firstName"
    //             type="text"
    //             onChange={(e) => setFirstName(e.target.value)}
    //         />

    //         <label htmlFor="register-lastName">Last name</label>
    //         <input
    //             id="register-lastName"
    //             type="text"
    //             onChange={(e) => setLastName(e.target.value)}
    //         />

    //         <label htmlFor="register-affiliation">Affiliation</label>
    //         <input
    //             id="register-affiliation"
    //             type="text"
    //             onChange={(e) => setAffiliation(e.target.value)}
    //         />

    //         <label htmlFor="register-title">Title</label>
    //         <select
    //             id="register-title"
    //             type="text"
    //             onChange={(e) => setTitle(e.target.value)}
    //         >
    //             <option value="Mr.">Mr.</option>
    //             <option value="Mrs.">Mrs.</option>
    //             <option value="Dr.">Dr.</option>
    //             <option value="Prof.">Prof.</option>
    //         </select>

    //         <input type="submit" value="Register" />
    //     </form>
    // </div>
  );
}
