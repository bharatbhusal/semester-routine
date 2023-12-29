import React from 'react'
import subjects from './subjects_details.json'

const SubjectDetail = ({ courseCode, visibility, disable }) => {

    return (
        <div className='subject_detail' style={{ visibility: visibility }}>
            Subject detail
            {courseCode}
            <button onClick={disable}>Close</button>
        </div>
    )
}

export default SubjectDetail