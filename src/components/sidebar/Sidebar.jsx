import React, { useEffect, useState } from 'react'
import {Link, useLocation } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import logo from '../../assets/images/logo.png'
import './Sidebar.scss'
import sidebarNav from '../../configs/sidebarNav'

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const location = useLocation()
  useEffect(() => {
    const choose = window.location.pathname.split('/')[1]
    const activeItem = sidebarNav.findIndex(item => item.section === choose)

    setActiveIndex(choose.length === 0 ? 0 : activeItem)
}, [location])

const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
  };

const handleClose = () => {
    setOpen(false);
};
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
      <img src={logo} alt="" />
      </div>
      <div className="sidebar__menu">
        {
          sidebarNav.map((nav, index) =>(
            <Link to = {nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`}>
            <div className="sidebar__menu__item__icon">
              {nav.icon}
            </div>
            </Link>
          ))}
        <div className="sidebar__menu__item">
        <div className="sidebar__menu__item__icon " onClick={handleClickOpen}>
          <i className='bx bx-log-out-circle'></i>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
        <DialogTitle id="alert-dialog-title">{"Logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Are you sure. do you want to logout?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleClose} autoFocus>
              Yes
            </Button>
          </DialogActions>
      </Dialog>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar