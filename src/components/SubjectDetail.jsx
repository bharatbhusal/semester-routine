import React, { useState } from 'react';
import subjects from '../data/subjects_details.json';

const SubjectDetail = ({ courseCode, display, disable }) => {

    // Fetching subject details based on the course code
    const course = subjects[courseCode];


    // const handleCopyToClipboard = () => {
    //     navigator.clipboard.writeText(course.faculty.contact)
    //         .then(() => {
    //             console.log('Contact number copied to clipboard');
    //         })
    //         .catch((error) => {
    //             console.error('Error copying to clipboard:', error);
    //         });
    // };


    const ContactOptions = ({ phoneNumber }) => {
        const [showOptions, setShowOptions] = useState(false);

        const handleNumberClick = () => {
            setShowOptions(!showOptions);
        };

        return (
            <div >
                <div onClick={handleNumberClick} style={{ cursor: 'pointer', textDecoration: "underline" }}>
                    {phoneNumber}
                </div>

                {
                    showOptions && (
                        <div className='contact-options'>
                            <a href={`tel:${phoneNumber}`}>Call</a>
                            <br />
                            <a href={`sms:${phoneNumber}`}>SMS</a>
                            <br />
                            <a href={`https://wa.me/${phoneNumber}`}>WhatsApp</a>
                        </div>
                    )
                }
            </div >
        );
    };

    // If course details are not found, display a message
    if (!course)
    {
        return <div className='subject_detail'>Course not found</div>;
    }

    // JSX structure for the SubjectDetail component
    return (
        // Container for the subject detail
        <div className='subject_detail' style={{ display: display }}>
            {/* Displaying subject details */}
            <h2>{course.name}</h2>
            <p><strong>Classroom:</strong> {course.classroom}</p>
            <p><strong>Faculty:</strong> {course.faculty.name}</p>
            <p><strong>Cabin:</strong> {course.faculty.cabin}</p>
            <p>
                <strong>Contact:</strong>
                <ContactOptions phoneNumber={course.faculty.contact} />
            </p>

            {/* Button to close the subject detail */}
            <button onClick={disable}>X</button>
        </div>
    );
};

export default SubjectDetail;
