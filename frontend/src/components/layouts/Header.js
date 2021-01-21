import React from 'react';
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";


export default function Header() {
    return (
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div class="container">
        <Link to="/">
            <a class="navbar-brand text-white" href="/">JESTEC</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
	    </button>
	    <div class="collapse navbar-collapse" id="navbarResponsive">
	      <ul class="navbar-nav">
	        <li class="nav-item">
	          <Link to="/" class="nav-link">Home</Link>
	        </li>
	        <li class="nav-item">
	          <Link to="/submissionguidelines" class="nav-link">Submit Paper</Link>
	        </li>
	        <li class="nav-item">
	          <Link to="/archive" class="nav-link">Archive</Link>
	        </li>
	      </ul>
	    </div>
        <AuthOptions />
      </div>
    </nav>
    );
}