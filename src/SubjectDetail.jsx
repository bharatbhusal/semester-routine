import React from 'react'
import subjects from './subjects_details.json'

const SubjectDetail = ({ courseCode, visibility, disable }) => {
    const course = subjects[courseCode]

    if (!course)
    {
        return <div className='subject_detail'>Course not found</div>;
    }
    return (
        <div className='subject_detail' style={{ visibility: visibility }}>
            <h2>{course.name}</h2>
            <p><strong>Faculty:</strong> {course.faculty.name}</p>
            <p><strong>Cabin:</strong> {course.faculty.cabin}</p>
            <p><strong>Contact:</strong> {course.faculty.contact}</p>
            <button onClick={disable}>Close</button>
        </div>
    )
}

export default SubjectDetail