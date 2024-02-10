import React from 'react'
import RoutineJson from "../data/routine.json"


const RoutineTable = ({ day }) => {
    return (
        <div className='routine-table'>
            {
                RoutineJson.hasOwnProperty(day)
                    ?
                    < ul >
                        {
                            Object.values(RoutineJson[day]).map((each, index) => <li className="flex space-between" key={index}>
                                <div className="subject">{each.subject}</div>
                                <div className="hour">{each.hour}:00 - {each.hour}:50 </div>
                            </li>)
                        }
                    </ul>
                    :
                    <div className='holiday flex space-around'>C'mon, it's holiday</div>
            }

        </div >
    )
}

export default RoutineTable