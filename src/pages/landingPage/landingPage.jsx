import { Box } from '@mui/material';
import React from 'react';
import SortedAndAlgolia from '../../components/advanced search/sortedAndAlgolia';
import Card from '../../components/reusables/Card';

const LandingPage = () => {
  return (
    <Box sx={{ border: "1px solid red", height: "100vw"}}>
      {/* <SortedAndAlgolia/> */}
      <Card/>
    </Box>
  )
}

export default LandingPage;
