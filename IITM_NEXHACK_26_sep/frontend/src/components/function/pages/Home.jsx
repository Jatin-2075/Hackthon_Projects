import React from "react";
import '../style/home.css'
import '../style/card.css'
import { NavLink } from "react-router";

const Home = () => {
    return (
        <div>
            <div>
                <div className="home_intro_section">
                    <h2 className="home_heading">Welcome to Your Fitness Journey</h2>
                    <p className="home_intro">
                        This platform helps you track your health, stay consistent, and unlock 
                        the best version of yourself. Explore workouts, diet plans, and tools 
                        designed to keep you motivated and on track.
                    </p>
                </div>
                
                <div className="home_section">
                    <h2 className="home_subheading">Stay Motivated</h2>
                    <p className="home_text">
                        Remember, fitness is not just about looking good — it's about feeling 
                        confident, energetic, and healthy every single day. Keep pushing, your 
                        future self will thank you.
                    </p>
                </div>

                <div className="card_holder">
                    <div className="cards_home_advantage">
                        <h3>Body upgrade</h3>
                        <p>more strength, stamina, and muscles</p>
                    </div>
                    <div className="cards_home_advantage">
                        <h3>Brain boost</h3>
                        <p>improves focus, memory, and mood.</p>
                    </div>
                    <div className="cards_home_advantage">
                        <h3>Stress killer</h3>
                        <p>bye-bye overthinking, releases happy hormones.</p>
                    </div>
                    <div className="cards_home_advantage">
                        <h3>Health insurance</h3>
                        <p>keeps heart, lungs, and sugar in control.</p>
                    </div>
                    <div className="cards_home_advantage">
                        <h3>Energy boost</h3>
                        <p>feel active and productive throughout the day.</p>
                    </div>
                    <div className="cards_home_advantage">
                        <h3>Sleep buff</h3>
                        <p>knocks you out faster and deeper.</p>
                    </div>
                </div>

                <div className="home_section">
                    <h2 className="home_subheading">Track Your Progress</h2>
                    <p className="home_text">
                        Use our BMI calculator, workout planner, and personalized diet 
                        recommendations to monitor your progress. Small consistent steps 
                        lead to massive long-term changes.
                    </p>
                    <NavLink className="start_home" to="/Dashboard" >Start</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Home;
