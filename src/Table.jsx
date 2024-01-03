import React, { useEffect, useState } from 'react';
import weekdays from "./routine.json";
import SubjectDetail from './SubjectDetail';
import NavBar from './Navbar';

const Table = () => {
    // State variables
    const days = Object.keys(weekdays);
    const [visibility, setVisibility] = useState("hidden");
    const [courseCode, setCourseCode] = useState("some course code");
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [day, setDay] = useState(getTodayDay())
    const [activeDay, setActiveDay] = useState('');


    function getTodayDay() {
        const currentDate = new Date();
        const dayIndex = currentDate.getDay();
        return daysOfWeek[dayIndex].toLocaleLowerCase();
    }

    const handleDay = (e) => {
        const temp = e.target.textContent
        setActiveDay(temp);

        daysOfWeek.map((each) => {
            if (each.includes(temp))
                setDay(each.toLocaleLowerCase())
        })

    }

    // Function to get the daily routine for a specific day
    function getDailyRoutine(day) {
        const dayRoutine = [];
        days.forEach(each => {
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
            {/* SubjectDetail component for displaying detailed information */}
            < SubjectDetail visibility={visibility} courseCode={courseCode} disable={hideDetail} />
            {/* Table structure */}
            < table className='table-large' >
                {/* Table header */}
                < thead >
                    <tr>
                        <th>Days/Time</th>
                        <th>8:00 - 8:50</th>
                        <th>9:00 -  9:50</th>
                        <th>10:00 -  10:50</th>
                        <th>11:00 -  11:50</th>
                        <th>12:00 -  12:50</th>
                        <th>13:00 -  13:50</th>
                        <th>14:00 -  14:50</th>
                        <th>15:00 -  15:50</th>
                        <th>16:00 -  16:50</th>
                    </tr>
                </thead >
                {/* Table body */}
                < tbody >
                    <tr>
                        <td className='days'>Monday</td>
                        {/* Mapping through the daily routine for Monday */}
                        {getDailyRoutine("monday").map((each, index) => <td onClick={getSubjectDetail} key={index} >
                            <div className="subject">
                                {each[0].subject}
                            </div>
                        </td>)}
                    </tr>
                    <tr>
                        <td className='days'>Tuesday</td>
                        {/* Mapping through the daily routine for Tuesday */}
                        {getDailyRoutine("tuesday").map((each, index) => <td onClick={getSubjectDetail} key={index}>
                            <div className="subject">
                                {each[0].subject}
                            </div>
                        </td>)}
                    </tr>
                    <tr>
                        <td className='days'>Wednesday</td>
                        {/* Mapping through the daily routine for Wednesday */}
                        {getDailyRoutine("wednesday").map((each, index) => <td onClick={getSubjectDetail} key={index}>
                            <div className="subject">
                                {each[0].subject}
                            </div>
                        </td>)}
                    </tr>
                    <tr>
                        <td className='days'>Thursday</td>
                        {/* Mapping through the daily routine for Thursday */}
                        {getDailyRoutine("thursday").map((each, index) => <td onClick={getSubjectDetail} key={index}>
                            <div className="subject">
                                {each[0].subject}
                            </div>
                        </td>)}
                    </tr>
                    <tr>
                        <td className='days'>Friday</td>
                        {/* Mapping through the daily routine for Friday */}
                        {getDailyRoutine("friday").map((each, index) => <td onClick={getSubjectDetail} key={index}>
                            <div className="subject">
                                {each[0].subject}
                            </div>
                        </td>)}
                    </tr>
                </tbody >
            </table >
            <div className='table-mini'>
                {getTodayDay() ? <ul className='flex-col'>
                    {getDailyRoutine(day).map((each, index) => <li className="day" onClick={getSubjectDetail} key={index}>
                        <div className="subject">
                            {each[0].subject}
                        </div>
                        <div className="hour">
                            {each[1]}:00 to {each[1]}:50
                        </div>
                    </li>)}
                </ul>
                    :
                    <div className='no-class flex-col'>C'mon!!! It's weekend.</div >
                }
            </div>
            <NavBar activeDay={activeDay} handleDay={handleDay} />
        </div >
    );
};

export default Table;

