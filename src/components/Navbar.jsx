import React, { useEffect, useState } from 'react';
import routineJson from "../data/routine.json"
import { NavLink, useLocation } from 'react-router-dom';
import { getToday } from '../utils/dateTimeHandler';

const Dropdown = ({ daysOfWeek }) => (
    <div className="days">
        {daysOfWeek.map((day, index) => (
            <NavLink key={index} to={day.toLocaleLowerCase()}>{day}</NavLink>
        ))}
    </div>
);

const NavBar = () => {
    const { pathname } = useLocation();
    const [day, setDay] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { dayName } = getToday();
    const daysOfWeek = Object.keys(routineJson);

    useEffect(() => {
        if (pathname.length > 1)
        {
            setDay(pathname.slice(1).toUpperCase());
        }
    }, [pathname]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav>
            <a href="https://www.gitam.edu/" className="flex" target='_blank'>
                <img src="https://www.gitam.edu/themes/custom/gitam/logo.png" alt="Gitam logo" />
            </a>
            <div className="day flex flex-column space-around" onClick={toggleDropdown}>
                {day || dayName}
                {isDropdownOpen && <Dropdown daysOfWeek={daysOfWeek} />}
            </div>
        </nav>
    );
};

export default NavBar;
