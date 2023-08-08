import React from 'react'
import './IssuesTable.css'

const IssuesTable = (data_table) => {
  const data = [
    { No: 1, Lab: 'Lab 1', PcNo: 13, IssueType: 'Hardware Issue', Description: 'desthe haabhsbbdhdd c s  sjddhegfsgfeajaehvdghavdhgvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvsbcbdbcfhakhsahdksahdkhashdsagdhksagdhsfgcadsjvcasjdggsggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg', IssueRaisedDate: '20-07-2023', IssueSatus: 'Resolved'},
    { No: 1, Lab: 'Lab 1', PcNo: 13, IssueType: 'Hardware Issue', Description: 'des', IssueRaisedDate: '20-07-2023', IssueSatus: 'Resolved'},
  ];
  return (
    <div style={{ textAlign: 'center', paddingLeft: '120px', paddingTop: '30px' }}>
      <table style={{border:"2px solid black"}}>
        <thead>
            <tr>
              <th style={{border:"2px solid black"}} className='p-2'>No</th>
              <th style={{border:"2px solid black"}} className='p-2'>Lab</th>
              <th style={{border:"2px solid black"}} className='p-2'>PC No</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Type</th>
              <th style={{border:"2px solid black"}} className='p-2'>Description</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Raised Date</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map((issue) => (
            <tr key={issue.No}>
                <td style={{border:"2px solid black"}}>{issue.No}</td>
                <td style={{border:"2px solid black"}}>{issue.Lab}</td>
                <td style={{border:"2px solid black"}}>{issue.PcNo}</td>
                <td style={{border:"2px solid black"}}>{issue.IssueType}</td>
                <td style={{border:"2px solid black"}} className='des'>{issue.Description}</td>
                <td style={{border:"2px solid black"}}>{issue.IssueRaisedDate}</td>
                <td style={{border:"2px solid black"}}>
                <select className='pl-5 pr-5'>
                  <option value="pending">pending</option>
                  <option value="working on it">working on it</option>
                  <option value="resolved">Resolved</option>
                </select>
                </td>
            </tr>
            ))}
        </tbody>
      </table>

    </div>
  )
}

export default IssuesTable;