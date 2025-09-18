import React, { useTransition } from "react";
import BMI from "../tools/bmi";
import { useState, useEffect } from "react";

import '../style/dashboard.css'

const Dashboard = () => {

    const [data, setdata] = useState({});
    const [breakfast, setbreakfast] = useState([]);
    const [lunch, setlunch] = useState([]);
    const [dinner, setdinner] = useState([]);

    useEffect(() => {
        const saveddata = localStorage.getItem("data")
        if (saveddata) {
            setdata(saveddata);
            console.log(data);
            setbreakfast(data.breakfast)
            setlunch(data.lunch)
            setdinner(data.dinner)
        }
        else {
            alert("some issues arrived in data please restart web")
        }
    })

    return (
        <div>

            <div className="dashboard-fullpage">
                {/* User Info */}
                <div className="user-info">
                    <h2 className="user-name">{data.name || "name"}</h2>
                    <p className="user-age">{data.age || "age"}</p>
                    <p className="user-gender">{data.gender || "gender"}</p>
                </div>

                {/* Stats Section */}
                <div className="stats">
                    <div className="stat-item"><p>{data.bmi || "your bmi is here"}</p></div>
                    <div className="stat-item"><p>{data.calories || "calories"}</p></div>
                    <div className="stat-item"><p>{data.sleep || "sleep"}</p></div>
                </div>

                {/* Diet Plan */}
                <div className="diet-plan">
                    <h2 className="section-title">Diet Plan</h2>
                    <div className="meal"><p>breakfast</p></div>
                    { breakfast.map((meal, i) => {
                        <div className="meals" key={i}> 
                            <div className="meal"><p>{meal.items || "items"}</p></div>
                        </div>
                    })}
                    <div className="meal"><p>lunch</p></div>
                    { lunch.map((meal, i) => {
                        <div className="meals" key={i}> 
                            <div className="meal"><p>{meal.items || "items"}</p></div>
                        </div>
                    })}
                    <div className="meal"><p>dinner</p></div>
                    { dinner.map((meal, i) => {
                        <div className="meals" key={i}> 
                            <div className="meal"><p>{meal.items || "items"}</p></div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
};

export default Dashboard;
