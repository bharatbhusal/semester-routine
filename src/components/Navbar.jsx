import React, { useEffect, useState } from 'react';
import routineJson from "../data/routine.json"
import { NavLink, useLocation } from 'react-router-dom';
import { getToday } from '../utils/dateTimeHandler';



export default function NavBar() {
    const { pathname } = useLocation()
    const [day, setDay] = useState(null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { dayName } = getToday()

    useEffect(() => {
        if (pathname.length > 1)
        {
            setDay(pathname.slice(1).toUpperCase())
        }
    }, [pathname])


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
                {day || dayName}
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

