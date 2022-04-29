import React from 'react'
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ava from '../../assets/images/ava.png'
const userInfo = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
      <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={5} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Avatar alt="Rost" src={ava} />
      </Stack>
    </div>
  )
}

export default userInfo