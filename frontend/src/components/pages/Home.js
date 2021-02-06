import React, { useContext, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
  const {userData} = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  })

  return (
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="font-weight-light text-info">Journal of Engineering, Science and Technology</h1>
            <p class="lead text-light">by Taylor's University School of Engineering</p>
            <button class="btn btn-danger text-light m-1">Submit Paper</button>
            <button class="btn btn-dark border-danger text-danger m-1">Browse Publications</button>
          </div>
        </div>
      </div>
    </header>
  )
}
