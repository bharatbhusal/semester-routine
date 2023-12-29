import React, { useState } from 'react';
import weekdays from "./routine.json";
import SubjectDetail from './SubjectDetail';

const Table = () => {
    const days = Object.keys(weekdays)
    const [visibility, setVisibility] = useState("hidden")
    const [courseCode, setCourseCode] = useState("some course code")
    function getDailyRoutine(day) {
        const dayRoutine = []
        days.map(each => {
            if (each === day)
            {
                const hours = Object.keys(weekdays[day])
                hours.map(hour => {
                    dayRoutine.push(weekdays[day][hour])
                })

            }
        })
        return dayRoutine
    }

    const getSubjectDetail = () => {
        console.log("clicked")
        setVisibility("visible")
        setCourseCode("CSEN0000")
    }


    const hideDetail = () => {
        setVisibility("hidden")

    }
    return (
        <>
            <button onClick={getSubjectDetail}>click</button>
            <SubjectDetail visibility={visibility} courseCode={courseCode} disable={hideDetail} />
            <table>
                <thead>
                    <tr>
                        <th>Days/Time</th>
                        <th>8:00 - 8:50</th>
                        <th>9:00 -  9:50</th>
                        <th>10:00 -  10:50</th>
                        <th>11:00 -  11:50</th>
                        <th>14:00 -  14:50</th>
                        <th>15:00 -  15:50</th>
                        <th>16:00 -  16:50</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        {getDailyRoutine("monday").map((each, index) => <td key={index}>{each.subject}</td>)}
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        {getDailyRoutine("tuesday").map((each, index) => <td key={index}>{each.subject}</td>)}
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        {getDailyRoutine("wednesday").map((each, index) => <td key={index}>{each.subject}</td>)}
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        {getDailyRoutine("thrusday").map((each, index) => <td key={index}>{each.subject}</td>)}
                    </tr>
                    <tr>
                        <td>Friday</td>
                        {getDailyRoutine("friday").map((each, index) => <td key={index}>{each.subject}</td>)}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;
