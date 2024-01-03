import React, { useState } from 'react';
import subjects from '../data/subjects_details.json';

const SubjectDetail = ({ courseCode, visibility, disable }) => {

    // Fetching subject details based on the course code
    const course = subjects[courseCode];

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(course.faculty.contact)
            .then(() => {
                console.log('Contact number copied to clipboard');
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
            });
    };

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
            <p><strong>Classroom:</strong> {course.classroom}</p>
            <p><strong>Faculty:</strong> {course.faculty.name}</p>
            <p><strong>Cabin:</strong> {course.faculty.cabin}</p>
            <p><strong>Contact:</strong>  <span onClick={handleCopyToClipboard} style={{ cursor: "pointer", textDecoration: 'underline' }}>
                {course.faculty.contact}
            </span></p>

            {/* Button to close the subject detail */}
            <button onClick={disable}>X</button>
        </div>
    );
};

export default SubjectDetail;
