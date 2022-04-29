import React from 'react'
import './Layout.scss'
import {Outlet} from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Topnav from '../components/topnav/TopNav'
const Layout = () => {
  return (
    <>
    <Sidebar />
    <div className="main">
      <div className="main__content">
      <Topnav />
      <Outlet />
      </div>
    </div>
</>
  )
}

export default Layout