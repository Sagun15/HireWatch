import React from 'react'
import CandidateRecordsTable from './CandidateRecordsTable/CandidateRecordsTable';
import './CandidateRecords.css';

function CandidateRecords() {
  return (
    <div className='container'>
        <h3 className='container__head'>Candidates</h3>
        <CandidateRecordsTable />
    </div>
  )
}

export default CandidateRecords