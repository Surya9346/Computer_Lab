import React from 'react'
import {Link} from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src="https://asset.brandfetch.io/id19-jVFJl/idHpZGlfNI.png" alt='' className='mlogo'/>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <Link to="/">
                    <li className="nav-item">
                      <p className="nav-link active">
                          Home
                      </p>
                    </li>
                </Link>
                <li className="nav-item">
                    <button className="btn btn-primary mr-2" style={{height:'45px',width:'120px'}}>
                        Check In
                    </button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-primary" style={{height:'45px',width:'120px'}}>
                      Check Out
                    </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar2;
