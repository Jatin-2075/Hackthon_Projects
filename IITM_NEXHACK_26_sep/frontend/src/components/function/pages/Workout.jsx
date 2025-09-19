import React, { useState, useEffect } from "react";
import "../style/workout.css";

const Workout_plan = () => {
    const [exercise, setExercise] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }

        setExercise([
            { name: "Push Ups", type: "strength", equipment: "none" },
            { name: "Squats", type: "strength", equipment: "bodyweight" },
            { name: "Plank", type: "core", equipment: "mat" },
        ]);
    }, []);

    const handleStart = (exerciseName) => {
        console.log(`${exerciseName} started!`);
    };

    return (
        <div className="workout-container">
            <div className="header">
                <h1 className="title">Workout</h1>
                <p className="subtitle">
                    {user
                        ? `Hi, ${user.name} let's start`
                        : "Hi, Guest let's start"}
                </p>
            </div>

            <div className="exercise-list">
                {exercise.map((data, i) => (
                    <div className="exercise-card" key={i}>
                        <h3 className="exercise-name">{data.name}</h3>
                        <p className="exercise-type">{data.type}</p>
                        <p className="exercise-equipment">{data.equipment}</p>
                        <button type="button" onClick={() => handleStart(data.name)}>
                            Start
                        </button>
                    </div>
                ))}
            </div>

            <div>
                <h2>Exercise Done</h2>
                <div></div>
            </div>
        </div>
    );
};

export default Workout_plan;
