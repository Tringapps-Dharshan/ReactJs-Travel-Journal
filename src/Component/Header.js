import { IconButton } from '@mui/material';
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
function Header() {
  return (
    <div className='header'>
      <IconButton aria-label="add to favorites">
        <LanguageIcon />
      </IconButton>
      <h3>my travel journal.</h3>
    </div>
  )
}

export default Header