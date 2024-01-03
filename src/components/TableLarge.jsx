import React from 'react'

const TableLarge = ({ getDailyRoutine, getSubjectDetail }) => {
    return (
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
                    {getDailyRoutine("Monday").map((each, index) => <td onClick={getSubjectDetail} key={index} >
                        <div className="subject">
                            {each[0].subject}
                        </div>
                    </td>)}
                </tr>
                <tr>
                    <td className='days'>Tuesday</td>
                    {/* Mapping through the daily routine for Tuesday */}
                    {getDailyRoutine("Tuesday").map((each, index) => <td onClick={getSubjectDetail} key={index}>
                        <div className="subject">
                            {each[0].subject}
                        </div>
                    </td>)}
                </tr>
                <tr>
                    <td className='days'>Wednesday</td>
                    {/* Mapping through the daily routine for Wednesday */}
                    {getDailyRoutine("Wednesday").map((each, index) => <td onClick={getSubjectDetail} key={index}>
                        <div className="subject">
                            {each[0].subject}
                        </div>
                    </td>)}
                </tr>
                <tr>
                    <td className='days'>Thursday</td>
                    {/* Mapping through the daily routine for Thursday */}
                    {getDailyRoutine("Thursday").map((each, index) => <td onClick={getSubjectDetail} key={index}>
                        <div className="subject">
                            {each[0].subject}
                        </div>
                    </td>)}
                </tr>
                <tr>
                    <td className='days'>Friday</td>
                    {/* Mapping through the daily routine for Friday */}
                    {getDailyRoutine("Friday").map((each, index) => <td onClick={getSubjectDetail} key={index}>
                        <div className="subject">
                            {each[0].subject}
                        </div>
                    </td>)}
                </tr>
            </tbody >
        </table >


    )
}

export default TableLarge