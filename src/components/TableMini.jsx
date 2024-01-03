import React from 'react'

const TableMini = ({ daysOfWeek, day, getDailyRoutine, getSubjectDetail }) => {
    return (
        <div className='table-mini'>
            {daysOfWeek.includes(day) ? <ul className='flex-col'>
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
    )
}

export default TableMini