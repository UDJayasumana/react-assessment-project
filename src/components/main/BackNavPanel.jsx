import { ArrowBackTwoTone } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

export const BackNavPanel = ({onBackClick}) => {
  return (
    <Box sx={{
      display:'flex',
      justifyContent: 'start',
      width: '100%',
      height: '50px',
      background: '#CCBEAD',  
  }}>
   <IconButton onClick={onBackClick}>
      <ArrowBackTwoTone sx={{width: 40, height: 40}} />
   </IconButton>
</Box>
  )
}