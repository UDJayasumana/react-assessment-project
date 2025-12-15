import { CatchingPokemon } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
            <Toolbar>
               <IconButton size='large' edge='start' color='inherit' aria-label='logo'
                            onClick={()=> navigate('/')}>
                  <CatchingPokemon />
                  <Box sx={{ pl: 1}}>
                  <Typography variant='16' component='div'>
                    COURIER FLEX
                  </Typography>
                  </Box>  
               </IconButton>
               
            </Toolbar>

    </AppBar>
  )
}

export default Navbar