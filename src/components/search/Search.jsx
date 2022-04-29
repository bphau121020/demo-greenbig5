import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
const Search = () => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for contens, tasks, project..."
        inputProps={{ 'aria-label': 'Search for contens, tasks, project...' }}
      />
      <IconButton type="submit" sx={{ p: '8px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search