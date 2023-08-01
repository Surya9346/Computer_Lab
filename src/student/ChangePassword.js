import React from 'react'
import {Link} from 'react-router-dom'
import Navbar1 from '../Navbar1';

const ChangePassword = () => {
  return (
    <div>
        <Navbar1 />
        <div className='body p-5'>
            <div className="container" style={{marginTop:'50px'}}>
            <h2>Change Password</h2>
            <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="newpassword">New Password</label>
                    <input
                        type="text"
                        name="newpassword"
                        placeholder="Enter your new password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                        type="text"
                        name="confirmpassword"
                        placeholder="Enter your confirm password"
                    />
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to='/StudentLogin'>
                        <button type="submit" className="btn btn-primary">
                            update
                        </button>
                    </Link>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword;
