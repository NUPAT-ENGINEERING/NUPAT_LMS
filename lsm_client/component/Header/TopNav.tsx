import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { AppBar } from '@mui/material'
import React from 'react'
import App from 'next/app';

const TopNav = () => {
  return (
    <>
   
    <AppBar>
    <div className="topNav_container">
      <Container sx={{display:'flex', justifyContent:'space-between'}}>
        <div className='left'>
            <div>
        <Typography variant="p" sx={{  fontSize: '10px' }}>
          Welcome to Promise International School 
        </Typography>
        </div>
        <div className='social'>
        <InstagramIcon sx={{fontSize:'15px', marginLeft:'10px'}} />
        <FacebookIcon sx={{fontSize:'15px', marginLeft:'10px'}}/>
        <LinkedInIcon sx={{fontSize:'15px', marginLeft:'10px'}}/></div>
        
        </div>
        <div className='right'>
            <CallIcon sx={{fontSize:'15px', marginRight:'10px'}}/>
            <a href='tel:0902817644'>
<Typography variant='p'sx={{  fontSize: '10px' }}> +234 9028 818847</Typography>
</a>
<EmailIcon sx={{fontSize:'15px', marginLeft:'20px', marginRight:'10px'}}/>
<a href='mailto:alimisammy@gmail.com'>
<Typography variant='p'sx={{  fontSize: '10px' }}> info@gmail.com</Typography></a>
        </div>
      </Container>
    </div>
    </AppBar>
    </>
    
  )
}

export default TopNav
