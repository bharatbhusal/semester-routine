import React, { useState } from 'react';
import routineJson from "../data/routine.json"
import { NavLink, useParams } from 'react-router-dom';



export default function NavBar() {
    const data = useParams()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const daysOfWeek = Object.keys(routineJson);

    return (
        <nav>

            {/* <h3>Hi there</h3> */}
            <a href="https://www.gitam.edu/" className="flex space-around" target='_blank'>
                <img src="https://www.gitam.edu/themes/custom/gitam/logo.png" alt="router logo" />
            </a>
            <div className="day flex space-around" onClick={toggleDropdown}>
                Day
                {isDropdownOpen && (
                    <div className="days">
                        {daysOfWeek.map((day, index) => (
                            <NavLink key={index} to={day.toLocaleLowerCase()}>{day}</NavLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

