import React, { useState } from 'react'
import RoutineJson from "../data/routine.json"
import SubjectDetailsJson from "../data/subjects_details.json"
import { FaArrowDown } from "react-icons/fa";



const RoutineTable = ({ day }) => {
    const [visibility, setVisibility] = useState("hidden")
    const [courseCode, setCourseCode] = useState(null)
    const realSubjects = Object.keys(SubjectDetailsJson)

    const PopUp = () => {
        const course = SubjectDetailsJson[courseCode]

        return (realSubjects.includes(courseCode) &&
            <div className="popup flex flex-column space-between" style={{ visibility: visibility }}>
                <div className="details flex flex-column space-between">
                    <h2>{course.name}</h2>
                    <p><strong>Classroom:</strong> {course.classroom}</p>
                    <p><strong>Faculty:</strong> {course.faculty.name}</p>
                    <p><strong>Cabin:</strong> {course.faculty.cabin}</p>
                    <div className='contact-options flex space-between'>
                        <a href={`tel:${course.faculty.contact}`}>Call</a>
                        <br />
                        <a href={`sms:${course.faculty.contact}`}>SMS</a>
                        <br />
                        <a href={`https://wa.me/${course.faculty.contact}`}>WhatsApp</a>
                    </div>
                </div>

                <p className="arrow flex space-around" onClick={() => setVisibility("hidden")}>
                    <FaArrowDown />
                </p>
            </div>
        )
    }

    function handlePopUp(e) {
        const liElement = e.currentTarget;
        setCourseCode(liElement.querySelector(".subject").textContent);
        console.log(courseCode)
        setVisibility("visible")
    }
    return (
        <div className='routine-table'>
            {
                RoutineJson.hasOwnProperty(day)
                    ?
                    < ul className='flex flex-column'>
                        <PopUp />
                        <div className='table'>
                            {
                                Object.values(RoutineJson[day]).map((each, index) =>
                                    <li
                                        title={realSubjects.includes(each.subject) ? SubjectDetailsJson[each.subject].name : ""}
                                        className="flex space-between"
                                        key={index}
                                        onClick={handlePopUp}
                                    >
                                        <div className="subject">{each.subject}</div>
                                        <div className="hour">{each.hour}:00 - {each.hour}:50 </div>
                                    </li>
                                )
                            }
                        </div>
                    </ul>
                    :
                    <div className='holiday flex space-around'>C'mon, it's holiday</div>
            }

        </div >
    )
}

export default RoutineTable