import React from "react";
import { NavLink } from "react-router-dom";
import '../components/function/style/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar_section">
            <div>
                <h1 className="heading">MediMap</h1>
            </div>
            <div className="navbar_link_holder">
                <NavLink to="/Home" className="top_link" > About </NavLink>
                
                <NavLink to="/Dashboard" className="top_link" > Dashboard </NavLink>
                
                <NavLink to="/Diet_plan" className="top_link" > Diet Plan </NavLink>

                <NavLink to="/Workout" className="top_link" > Workout </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
