import { Box, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Algolia = () => {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#F4F4F4", width: "25%"}}>
      <SearchIcon/>
      <input type="text"/>
    </Box>
  )
}

export default Algolia;
