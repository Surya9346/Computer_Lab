import React from 'react'
import './Home.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='row homebg p-5'>
        <div className='col-8'>
          <h2 className='head'>About BVRIT</h2>
          <p className='content'>B V Raju Institute of Technology (BVRIT) was established by the eminent philanthropist (Late) Padmabhushan Dr. B.V. Raju under the aegis of Sri Vishnu Educational Society (SVES) in the year 1997. BVRIT was granted UGC – Autonomous Status from the year 2014. The Institute is also duly approved by the AICTE and the Government of Telangana State and is affiliated to JNTU, HYDERABAD. CSE, IT, ECE, EEE, Chemical, Mechanical, and Civil Engineering branches in BVRIT are accredited by NBA. BVRIT is accredited by NAAC with an A+ grade.</p>
          <p className='content'>This institution is also looked after by a body of distinguished professionals from IITs, engineering and government sectors, led by Sri K. V. Vishnu Raju garu. He is a graduate in Chemical Engineering from REC, Trichy and a postgraduate from Michigan Technological University, USA.</p>
          <p className='content'>The purpose of establishing BVRIT was to provide quality technical education in a perfect ambiance for the all-round development of a student. Under the hegemony of our Chairman, Sri K. V. Vishnu Raju, BVRIT made a quantum leap in its reputation for its best teaching-learning practices, high-quality intake, excellent infrastructure facilities, the highest number of placements, etc.</p>
        </div>
        <div className='col-4'>
          <img src='https://mybvrit.com/wp-content/uploads/2022/05/maxresdefault.jpg' alt='bvritlogo' className='bvritimg'/>
        </div>
        <div className='col-4'>
          <img src='https://png.pngtree.com/png-vector/20200610/ourlarge/pngtree-computer-vector-illustration-in-cartoon-style-png-image_2222574.jpg' alt='bvritlogo' className='bvritimg'/>
        </div>
        <div className='col-8'>
          <h2 className='head'>About Website</h2>
          <p className='content'>Our Website will try to resolve the computer Laboratory issues remotely.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
