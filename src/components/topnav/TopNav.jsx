import React from 'react'
import './topNav.scss'

const topNav = () => {
  return (
    <div className="topnav">
       <div className="topnav__left">
          <i className='bx bx-search'></i>
          <input type="text" className="" placeholder="Search Here..."></input>
       </div>
       <div className="topnav__center">
          <i className='bx bx-station'></i>
          <h4>Wellcome, Admin!</h4>
       </div>
    </div>
  )
}

export default topNav