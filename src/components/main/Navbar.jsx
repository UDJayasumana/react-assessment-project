import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
            <Toolbar>
               
            </Toolbar>

    </AppBar>
  )
}

export default Navbar