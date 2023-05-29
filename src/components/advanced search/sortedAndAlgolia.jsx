import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SortedSearch from './sortedSearch/sortedSearch'
import Algolia from './algoliaSearch/algolia'

const SortedAndAlgolia = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", marginTop: 4}}>
        <Algolia/>
        <SortedSearch/>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between"}}>
        <Typography variant='h5'>Latest Listings</Typography>
        <Button>Dropdown</Button>
      </Box>
    </Box>
  )
}

export default SortedAndAlgolia;
