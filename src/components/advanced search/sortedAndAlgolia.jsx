import { Box } from '@mui/material'
import React from 'react'
import SortedSearch from './sortedSearch/sortedSearch'
import Algolia from './algoliaSearch/algolia'

const SortedAndAlgolia = () => {
  return (
    <Box>
      <Algolia/>
      <SortedSearch/>
    </Box>
  )
}

export default SortedAndAlgolia;
