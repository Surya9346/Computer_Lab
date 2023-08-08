import React from 'react'
import './IssuesTable.css'

const IssuesTable = (data_table) => {
  const data = data_table.data_table;
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
                <td style={{border:"2px solid black"}}>{issue.description}</td>
                <td style={{border:"2px solid black"}}>{issue.IssueRaisedDate}</td>
                <td style={{border:"2px solid black"}}>
                <select className='pl-5 pr-5'>
                  <option value="pending">pending</option>
                  <option value="work in progess">work in progess</option>
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