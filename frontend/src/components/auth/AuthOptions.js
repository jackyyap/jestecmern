import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";


export default function AuthOptions() {
    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    const author = () => history.push("/dashboard/author")
    const reviewer = () => history.push("/dashboard/reviewer")
    const editor = () => history.push("/dashboard/editor")
    const register = () => history.push("/register")
    const login = () => history.push("/login")
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
    };

    return (
        <nav className="auth-options"> {
            userData.user ? (
                <ul class="navbar-nav">
                    <div class="dropdown">
                        <button 
                            class="btn btn-danger dropdown-toggle" 
                            type="button" id="dashboardDropdown" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                            Dashboard
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" onClick={author}>Author</a>
                            <a class="dropdown-item" onClick={reviewer}>Reviewer</a>
                            <a class="dropdown-item" onClick={editor}>Editor</a>
                        </div>
                    </div>
                    <li class="nav-item">
                        <a className="btn btn-link text-light" onClick={logout}>Logout</a>
                    </li>
                </ul>
            ) : (
                    <>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="btn btn-link text-light auth-options" onClick={register}>Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-link text-light auth-options" onClick={login}>Login</a>
                        </li>
                    </ul>
                    </>
                )}
        </nav>
    );
};
