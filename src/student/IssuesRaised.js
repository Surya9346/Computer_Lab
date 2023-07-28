import React from 'react'

const IssuesRaised = () => {
  const data = [
    { No: 1, Lab: 'Lab 1', PcNo: 13, IssueType: 'Hardware Issue', IssueRaisedDate: '20-07-2023', IssueResolvedDate: '24-07-2023', IssueSatus: 'Resolved'},
    { No: 1, Lab: 'Lab 1', PcNo: 13, IssueType: 'Hardware Issue', IssueRaisedDate: '20-07-2023', IssueResolvedDate: '24-07-2023', IssueSatus: 'Resolved'},
    { No: 1, Lab: 'Lab 1', PcNo: 13, IssueType: 'Hardware Issue', IssueRaisedDate: '20-07-2023', IssueResolvedDate: '24-07-2023', IssueSatus: 'Resolved'},
    { No: 1, Lab: 'Lab 1', PcNo: 13, IssueType: 'Hardware Issue', IssueRaisedDate: '20-07-2023', IssueResolvedDate: '24-07-2023', IssueSatus: 'Resolved'},
    { No: 1, Lab: 'Lab 1', PcNo: 13, IssueType: 'Hardware Issue', IssueRaisedDate: '20-07-2023', IssueResolvedDate: '24-07-2023', IssueSatus: 'Resolved'},
  ];
  return (
    <div style={{textAlign:"center",paddingLeft:'120px',paddingTop:'30px'}}>
      <table style={{border:"2px solid black"}}>
        <thead>
            <tr>
              <th style={{border:"2px solid black"}} className='p-2'>No</th>
              <th style={{border:"2px solid black"}} className='p-2'>Lab</th>
              <th style={{border:"2px solid black"}} className='p-2'>PC No</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Type</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Raised Date</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Resolved Date</th>
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
                <td style={{border:"2px solid black"}}>{issue.IssueRaisedDate}</td>
                <td style={{border:"2px solid black"}}>{issue.IssueResolvedDate}</td>
                <td style={{border:"2px solid black"}}>{issue.IssueSatus}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default IssuesRaised;