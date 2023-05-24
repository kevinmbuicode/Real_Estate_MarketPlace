import { Box, Button, Typography } from '@mui/material'
import React from 'react';

const SortedSearch = () => {

  return (
    <Box sx={{ display: " flex", border: "1px solid red", width: "75%", marginLeft: 5, justifyContent: "space-between"}}>
        <Box sx={{ display: "flex", border: "2px solid red", width: "40%"}}>
            <Typography>City</Typography>
            <Typography>Surbab</Typography>
            <Typography>Rural</Typography>
        </Box>
        <Box>
            <Button>Dropdown</Button>
        </Box>
        <Box>
            <Button>Dropdown</Button>
        </Box>
    </Box>
  )
}

export default SortedSearch;
