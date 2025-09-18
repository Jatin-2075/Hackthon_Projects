import React, { useState } from "react";
import "../style/diet_plan.css";

const Diet_plan = ( { data } ) => {
    const [eat, seteat] = useState("");
    const [meal, setmeal] = useState("");
    const [dailycalories, setdailycalories] = useState(2000);
    const [caloriesconsumed, setcaloriesconsumed] = useState(0);

    const handleClick = async () => {
        try {
            const found = encodeURIComponent(eat);
            const res = await fetch(
                `https://api.api-ninjas.com/v1/nutrition?query=${found}`,
                {
                    headers: { "X-Api-Key": "YOUR_API_KEY" },
                }
            );
            const data = await res.json();
            if (data && data.length > 0) {
                const calories = data[0].calories;
                setcaloriesconsumed((prev) => prev + calories);
                alert(`${eat} has ${calories} calories`);
            } else {
                alert("No nutrition data found.");
            }
        } catch (err) {
            console.error(err);
            alert("Error fetching nutrition data.");
        }
    };

    return (
        <div className="diet-container">
            <div className="diet-inputs">
                <h2 className="diet-title">🍴 What you eat</h2>
                <input
                    className="diet-input meal-input"
                    placeholder="Which meal?"
                    onChange={(e) => setmeal(e.target.value)}
                />
                <input
                    className="diet-input eat-input"
                    placeholder="What you ate"
                    onChange={(e) => seteat(e.target.value)}
                />
                <button className="diet-btn" onClick={handleClick}>
                    ADD
                </button>
            </div>

            <div className="diet-stats">
                <h3 className="diet-goal">Calories Goal: {dailycalories}</h3>
                <h3 className="diet-consumed">
                    Calories Consumed: {caloriesconsumed}
                </h3>
                {caloriesconsumed >= dailycalories && (
                    <h3 className="diet-warning">
                        Enough for today, now stop 
                    </h3>
                )}
            </div>
        </div>
    );
};

export default Diet_plan;
