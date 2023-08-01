import React from 'react'
import './StudentPageOne.css'
import {Link} from 'react-router-dom'
import Navbar2 from '../Navbar2'

const StudentPageOne = () => {
  return (
    <div>
        <Navbar2 />
        <div className='d-flex flex-row'>
        <div className='side-bar'>
          <div className='d-flex flex-row m-2' style={{textAlign:'center',border:'2px solid black',borderRadius:'25px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-person-circle m-2" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <p className='mt-2'>username</p>
          </div>
          <ul class="nav flex-column">
            <Link to='/RaiseIssue'>
              <li className="nav-item">
                <p className="nav-link active">Raise Issue</p>
              </li>
            </Link>
            <Link to='/IssuesRaised'>
              <li className="nav-item">
                <p className="nav-link">Issues Raised</p>
              </li>
            </Link>
            <Link to='/'>
              <li className="nav-item m-3">
                <button className='btn btn-primary' style={{height:'45px',width:'110px'}}>Logout</button>
              </li>
            </Link>
          </ul>
        </div>
        <div className='sidecomp pl-2'>
        </div>
      </div>
    </div>
  )
}

export default StudentPageOne;