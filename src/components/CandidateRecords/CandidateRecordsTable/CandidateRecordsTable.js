import React from 'react'
import CandidateRecord from './CandidateRecord/CandidateRecord';
import './CandidateRecordsTable.css';

function CandidateRecordsTable() {

    const candidateRecordsList = [
        {
            name: "Shanu",
            email: "kumshanu@deloitte.com",
            techstack: "Node.js developer",
            testname: "Nodejs Developer Hiring",
            status: "send link"
        },
        {
            name: "Priyanshu",
            email: "pri@deloitte.com",
            techstack: "C# developer",
            testname: "C# Developer Hiring",
            status: "sent"
        }
    ];

    return (
        <div className='records__table'>
            <div className='records__table-header'>
                <p>Sl No.</p>
                <p>Candidate Name</p>
                <p>Email</p>
                <p>Techstack Name</p>
                <p>Testname</p>
                <p>Status</p>
                <p>Action</p>
            </div>
            {candidateRecordsList.length !=0 ? candidateRecordsList.map((candidate, index) =>
                <CandidateRecord 
                    key={candidate.name + index}
                    no={index + 1}
                    name={candidate.name}
                    email={candidate.email}
                    techstack={candidate.techstack}
                    testname={candidate.testname}
                    status={candidate.status}
                />)
            :
            <h1 className='records__table-empty'>There are no candidates</h1>}
        </div>
    )
}

export default CandidateRecordsTable
// sl, name, email, techstack, test name, status, action