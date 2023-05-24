import { Box, Typography } from '@mui/material';
import React from 'react';
import Logo from '../../../../public/images/logo_design.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between"}}>
      <Box sx={{ display: "flex", width: "25%"}}>
        <img src={Logo} alt="Logo" width="50px"/>
        <Typography variant='h5' fontWeight="bold">Next Home</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", width: "50%", alignItems: "flex-end"}}>
        <Typography>Routes</Typography>
        <Typography>Routes</Typography>
        <Typography>Routes</Typography>
        <Typography>Routes</Typography>
        <Typography>Routes</Typography>
        <Typography>Routes</Typography>
      </Box>
      <Box sx={{ display: "flex", width: "25%", justifyContent: "flex-end", alignItems: "flex-end" }}>
        <FavoriteBorderIcon sx={{marginTop: 1}}/>
        <Box sx={{ display: "flex", backgroundColor: "#F4F4F4", width: "50%",height: "30px", alignItems: "center", borderRadius: 2, marginLeft: 2, marginRight: 2}}>
            <PermIdentityIcon/>
            <Typography>Name...</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar;
