import React, { useEffect, useState } from 'react';
import weekdays from "../data/routine.json";
import SubjectDetail from './SubjectDetail';
import NavBar from './Navbar';
import TableMini from './TableMini';
import TableLarge from './TableLarge';

const Table = () => {
    // State variables
    const daysOfWeek = Object.keys(weekdays);
    const [visibility, setVisibility] = useState("hidden");
    const [courseCode, setCourseCode] = useState("some course code");
    const [day, setDay] = useState(getTodayDay())
    const [activeDay, setActiveDay] = useState('');

    function getTodayDay() {
        const currentDate = new Date();
        const dayIndex = currentDate.getDay();
        return daysOfWeek[dayIndex - 1];
    }

    const handleDay = (e) => {
        const temp = e.target.textContent
        setActiveDay(temp);

        daysOfWeek.map((each) => {
            if (each.includes(temp))
                setDay(each)
        })

    }

    // Function to get the daily routine for a specific day
    function getDailyRoutine(day) {
        const dayRoutine = [];
        daysOfWeek.forEach(each => {
            if (each === day)
            {
                const hours = Object.keys(weekdays[day]);
                hours.forEach(hour => {
                    dayRoutine.push([weekdays[day][hour], hour]);
                });
            }
        });

        return dayRoutine;
    }

    // Function to handle the click event on a subject cell
    const getSubjectDetail = (e) => {
        const liElement = e.currentTarget;
        console.log("clicked");
        setVisibility("visible")
        setCourseCode(liElement.querySelector(".subject").textContent);
    }

    // Function to hide the subject detail component
    const hideDetail = () => {
        setVisibility("hidden");
    }

    // JSX structure for the Table component
    return (
        // Container for the table
        <div className='table flex-col' >

            < SubjectDetail visibility={visibility} courseCode={courseCode} disable={hideDetail} />

            <TableLarge getDailyRoutine={getDailyRoutine} getSubjectDetail={getSubjectDetail} />

            <TableMini daysOfWeek={daysOfWeek} day={day} getDailyRoutine={getDailyRoutine} getSubjectDetail={getSubjectDetail} />

            <NavBar activeDay={activeDay} handleDay={handleDay} />
        </div >
    );
};

export default Table;

