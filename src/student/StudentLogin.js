import React,{useState} from 'react'
import './StudentLogin.css'
import {Link} from 'react-router-dom'

const StudentLogin = () => {
  const [data,setData] = useState({
    susername :'',
    spassword :''
  });
  const {susername,spassword} = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  };
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  };
  return (
    <div className='body p-5'>
      <div className="container">
        <h2>Student Login</h2>
        <hr/>
        <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="susername">Username</label>
              <input
                  type="text"
                  name="susername"
                  value={susername}
                  onChange={changeHandler}
                  placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="spassword">Password</label>
              <input
                  type="password"
                  name="spassword"
                  value={spassword}
                  onChange={changeHandler}
                  placeholder="Enter your password"
              />
            </div>
            <div className='d-flex justify-content-center'>
              <Link to='/StudentPageOne'>
                <button type="submit" className="btn">
                  Login
                </button>
              </Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default StudentLogin;