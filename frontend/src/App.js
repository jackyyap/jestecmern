import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserContext from "./context/UserContext";

import "./style.css";



export default function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });
    //use react hook to check for token 
    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            //send to the backend to validate

            const tokenRes = await Axios.post("http://localhost:5000/users/tokenIsValid",
                null,
                { headers: { "x-auth-token": token } }
            );

            if (tokenRes.data) {
                const userRes = await Axios.get("http://localhost:5000/users/", {
                    headers: { "x-auth-token": token },
                });
                setUserData({
                    token,
                    user: userRes.data,
                })
            }
        }



        checkLoggedIn();
    }, []);

    //wrap components in User context provider to validate user before showing content
    return <>
        <BrowserRouter>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/archive" component={Archive} />
                    <Route path="/articlereader" component={ArticleReader} />
                    <Route path="/submission" component={Submission} />
                    <Route path="/fileslist" component={Fileslist} />
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    </>;
}
