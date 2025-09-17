import React, { useState } from "react";

const Diet_plan = () => {

    const [eat, seteat] = useState("");
    const [dailycalories, setdailycalories] = useState(0);
    const [caloriesconsumed, setcaloriesconsumed] = useState(0);
    const [meal, setmeal] = useState("");

    onclick = () => {
        const found = encodeURIComponent(eat);
        fetch(`https://api.api-ninjas.com/v1/nutrition?query=${found}`)
        .then((res) => res.json())
        .then((data) => {
            /*set the calories and other to the data  */
        })
    }

    return (
        <div>
            <div>
                <div>
                    <h2>what you eat</h2>
                    <input placeholder="which meal ?" onChange={(e) => setmeal(e.target.value)}/>
                    <input placeholder="what you ate" onChange={(e) => seteat(e.target.value)}/>
                    <button onClick={onclick}>ADD</button>
                </div>
                {dailycalories < caloriesconsumed && <div><h3>Enough for today now stop</h3></div>}
            </div>
        </div>
    )
}
export default Diet_plan;