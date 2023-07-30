import React from 'react'
import './AdminLogin.css'
import {Link} from 'react-router-dom'
import Navbar1 from '../Navbar1'

const AdminLogin = () => {
  return (
    <div>
        <Navbar1 />
        <div className='body p-5'>
          <div className="container" style={{marginTop:'50px'}}>
            <h2>Admin Login</h2>
            <hr/>
            <form>
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                />
                </div>
                <div className='d-flex justify-content-center'>
                  <Link to='/AdminPageOne'>
                    <button type="submit" className="btn">
                      Login
                    </button>
                  </Link>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default AdminLogin;
