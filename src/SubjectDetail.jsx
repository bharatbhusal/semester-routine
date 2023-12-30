import React from 'react';
import subjects from './subjects_details.json';

const SubjectDetail = ({ courseCode, visibility, disable }) => {
    // Fetching subject details based on the course code
    const course = subjects[courseCode];

    // If course details are not found, display a message
    if (!course)
    {
        return <div className='subject_detail'>Course not found</div>;
    }

    // JSX structure for the SubjectDetail component
    return (
        // Container for the subject detail
        <div className='subject_detail' style={{ visibility: visibility }}>
            {/* Displaying subject details */}
            <h2>{course.name}</h2>
            <p><strong>Faculty:</strong> {course.faculty.name}</p>
            <p><strong>Cabin:</strong> {course.faculty.cabin}</p>
            <p><strong>Contact:</strong> {course.faculty.contact}</p>
            {/* Button to close the subject detail */}
            <button onClick={disable}>Close</button>
        </div>
    );
};

export default SubjectDetail;
