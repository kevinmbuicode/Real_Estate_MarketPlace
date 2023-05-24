import { Box } from '@mui/material'
import React from 'react'
import SortedSearch from './sortedSearch/sortedSearch'
import Algolia from './algoliaSearch/algolia'

const SortedAndAlgolia = () => {
  return (
    <Box sx={{ display: "flex", marginTop: 4}}>
      <Algolia/>
      <SortedSearch/>
    </Box>
  )
}

export default SortedAndAlgolia;
