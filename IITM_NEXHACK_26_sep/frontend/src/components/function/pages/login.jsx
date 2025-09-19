import React, { useState } from "react";
import '../style/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [userpass, setUserpass] = useState("");
    const navigate = useNavigate();

    const onclick = async () => {
        try {
            const res = await fetch("https://hackthon-projects-backend.onrender.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: username, password: userpass })
            });

            const data = await res.json();

            if (data.success) {
                localStorage.setItem("data", JSON.stringify(data.user));
                console.log("Saved:", JSON.parse(localStorage.getItem("data")));
                navigate('/home', { state: data.user });
            } else {
                alert(data.message); 
            }
        } catch (err) {
            console.log(err);
            alert("Backend error");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">MediMap</h1>
                <h3 className="login-subtitle">Login</h3>

                <div className="input-group">
                    <label className="input-label">Email</label>
                    <input
                        className="input-field"
                        placeholder="enter mail id"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label className="input-label">Password</label>
                    <input
                        className="input-field"
                        placeholder="enter password"
                        type="password"
                        onChange={(e) => setUserpass(e.target.value)}
                    />
                </div>

                <div className="button-group">
                    <button className="login-button" type="button" onClick={onclick}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
