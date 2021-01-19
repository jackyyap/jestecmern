import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [affiliation, setAffiliation] = useState();
    const [title, setTitle] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        const newUser = { email, password, passwordCheck, firstName, lastName, affiliation, title };
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
    };

    return (
        <div className="page">
            <h2>Register</h2>
            <form onSubmit={submit}>
                <label htmlFor="register-email">Email</label>
                <input
                    id="register-email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="register-password">Password</label>
                <input
                    id="register-password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="verify password"
                    onChange={(e) => setPasswordCheck(e.target.value)}
                />

                <label htmlFor="register-firstName">First name</label>
                <input
                    id="register-firstName"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="register-lastName">Last name</label>
                <input
                    id="register-lastName"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="register-affiliation">Affiliation</label>
                <input
                    id="register-affiliation"
                    type="text"
                    onChange={(e) => setAffiliation(e.target.value)}
                />

                <label htmlFor="register-title">Title</label>
                <select
                    id="register-title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                </select>

                <input type="submit" value="Register" />
            </form>
        </div>
    );
}
