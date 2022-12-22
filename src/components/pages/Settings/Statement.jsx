import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../../Menubar/Sidenav';
import Navbar from '../../Menubar/Navbar';


const Statement = () => {
  return (
    <>
    <div className='bgcolor'>
      <Navbar/>
      <Box height={30} />
        <Box sx={{ display: 'flex' }}> 
        <Sidenav/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Statement</h1> 
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, saepe excepturi officiis optio harum quo laborum reiciendis vitae quod provident veniam laudantium adipisci cupiditate, quis perspiciatis. Magnam quasi suscipit rem.</h1>
      </Box> 
        </Box>
    </div>
    </>
  )
}

export default Statement