import React, { useState } from "react";
import '../style/bmi_calculator.css'

const BMI = () => {
    const [weight, setweight] = useState(0);
    const [height, setheight] = useState(0);
    const [bmi, setbmi] = useState("");
    const [show, setshow] = useState(false);

    const onclick = () => {
        const heightInMeters = height / 100;
        const bmifound = weight / (heightInMeters ** 2);
        setbmi(`${bmifound.toFixed(2)} is your BMI`);
    };

    return (
        <div className="bmi_section">
        <div className="bmi_card">
            <h3 className="bmi_heading">B.M.I</h3>
            <div className="bmi_intro">
            <p>a quick measure of body fat based on your height and weight.</p>
            </div>

            {!show && (
            <button onClick={() => setshow(!show)} className="bmi_toggle_btn">Show</button>)}

            {show && ( <div className="bmi_form">
                <button onClick={() => setshow(!show)} className="bmi_toggle_btn"
                >Hide</button>

                <div className="bmi_input_group">
                <label className="bmi_label">Weight</label>
                <input className="bmi_input" placeholder="in kg" onChange={(e) => setweight(Number(e.target.value))} />
                </div>

                <div className="bmi_input_group">
                <label className="bmi_label">Height</label>
                <input className="bmi_input" placeholder="in cm" onChange={(e) => setheight(Number(e.target.value))}/>
                </div>

                <div className="bmi_result_section">
                <button onClick={onclick} type="button" className="bmi_calc_btn">Calculate </button>
                <p className="bmi_result">{bmi}</p>
                </div>
            </div>)}
        </div>
        </div>
    );
};

export default BMI;
