import React, { useState, useEffect } from "react";
import '../style/workout.css';

const Workout_plan = () => {
    const [exercise, setExercise] = useState([]);
    const Data = { name: "Bro" };

    return (
        <div className="workout-container">
            <div className="header">
                <h1 className="title">Workout</h1>
                <p className="subtitle">{`Hi, ${Data.name} let's start`}</p>
            </div>

            <div className="exercise-list">
                {exercise.map((data, i) => (
                    <div className="exercise-card" key={i}>
                        <h3 className="exercise-name">{data.name || "squats"}</h3>
                        <p className="exercise-type">{data.type || "strength"}</p>
                        <p className="exercise-equipment">{data.equipment || "rod and weight"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Workout_plan;
