import React from 'react';
import './CandidateRecord.css';

function CandidateRecord(props) {
    return (
        <div className='candidate__record'>
            <p className='candidate__record-no candidate__record-detail'>{props.no}</p>
            <p className='candidate__record-name candidate__record-detail'>{props.name}</p>
            <p className='candidate__record-email candidate__record-detail'>{props.email}</p>
            <p className='candidate__record-tech candidate__record-detail'>{props.techstack}</p>
            <p className='candidate__record-test candidate__record-detail'>{props.testname}</p>
            <p className={`candidate__record-status candidate__record-detail ${props.status === 'send link' ? 'candidate__record-send' : 'candidate__record-view'}`}>{props.status}</p>
            <button>HII</button>
        </div>
    )
}

export default CandidateRecord
// sl, name, email, techstack, test name, status, action