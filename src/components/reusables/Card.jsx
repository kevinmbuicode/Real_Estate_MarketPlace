import React from 'react';
import { Box } from '@mui/material';
import CardImage from '../../../public/images/logo_design.png';

const Card = () => {
  return (
        <Box sx={{ border: "1px solid grey", width: 215, height: 250}}>
            <Box>
              <img src={CardImage} alt="card_name" width="100%" height="40%"/>
            </Box>
            <Box>Details</Box>
        </Box>
  )
}

export default Card;
