import React from "react";
import BMI from "../tools/bmi";
import { useState, useEffect } from "react";

import '../style/dashboard.css'

const Dashboard = () => {
    return (
    <div className="dashboard-fullpage">
      {/* User Info */}
      <div className="user-info">
        <h2 className="user-name">updatename</h2>
        <p className="user-age">updateage</p>
        <p className="user-gender">updategender</p>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-item"><p>update bmi</p></div>
        <div className="stat-item"><p>update calories</p></div>
        <div className="stat-item"><p>update calories burnt</p></div>
      </div>

      {/* Diet Plan */}
      <div className="diet-plan">
        <h2 className="section-title">Diet Plan</h2>
        <div className="meals">
          <div className="meal"><p>Breakfast</p></div>
          <div className="meal"><p>Lunch</p></div>
          <div className="meal"><p>Dinner</p></div>
        </div>
      </div>

      {/* Workout Progress */}
      <div className="workout-progress">
        <h2 className="section-title">Workout Progress</h2>
        <div className="progress-circles">
          <div className="circle">
            <div className="inner-circle">75%</div>
            <p>Total</p>
          </div>
          <div className="circle">
            <div className="inner-circle">50%</div>
            <p>This Week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
