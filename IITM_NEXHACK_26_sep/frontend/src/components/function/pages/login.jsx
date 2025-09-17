import React, { useState } from "react";
import '../style/login.css'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [userpass, setuserpass] = useState("");
    const [username, setusername] = useState("");

    const navigate = useNavigate();

    const onclick = async() =>  {

        try{

            const res = await fetch("http://localhost:5000/login_section")
            const data = await res.json();
            
            const user = data.users.find(
                u => u.email === username && u.password === userpass
            )

            if(user){
                navigate('/home')
            }
            else {
                alert("wrong details")
            }
        }
        catch (err){
            console.log("error")
            alert("backend error sorry")
        }
    };

  return (
    <div className="login-container">
        <div className="login-box">
            <h1 className="login-title">MediMap</h1>
            <h3 className="login-subtitle">Login</h3>

            <div className="input-group">
                <label className="input-label">Email</label>
                <input className="input-field" placeholder="enter mail id" type="text" onChange={(e) => setusername(e.target.value)} />
            </div>

            <div className="input-group">
                <label className="input-label">Password</label>
                <input className="input-field" placeholder="enter password" type="password" onChange={(e) => setuserpass(e.target.value)} />
            </div>

            <div className="button-group">
                <button className="login-button" type="button" onClick={onclick}> Login </button>
            </div>
        </div>
    </div>
    );
};

export default Login;
