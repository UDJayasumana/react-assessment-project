import { CatchingPokemon, DarkMode, LightMode } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ColorModeContext } from "@/context/ThemeContext";

const Navbar = () => {

  const navigate = useNavigate();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

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

               <Box sx={{ flexGrow: 1 }} />

               {/* Theme Toggle */}
              <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
              </IconButton>
               
            </Toolbar>

    </AppBar>
  )
}

export default Navbar