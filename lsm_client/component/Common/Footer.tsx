
import { Typography, Grid, Container } from '@mui/material'

import React from 'react'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../public/logo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
   <Container className='footer_container'>
    <Grid container>
<div className='footer_logo'>
    <Image src={logo} width='232px' height='254px'/>
</div>
<div className='footer_links'>
<div>
    <h2>Quick Links</h2>
    <Link href='/'><a>FAQ</a></Link>
    <br/>
    <Link href='/'><a>News</a></Link>
    <br/>
    <Link href='/'><a>Nupat Initiative</a></Link>
</div>
<div>
<h2>What we do</h2>
    <Link href='/'><a>Codecamp</a></Link>
    <br/>
    <Link href='/'><a>IT Services</a></Link>
</div>
<div>
<h2>About</h2>
    <Link href='/'><a>About Us</a></Link>
    <br/>
    <Link href='/'><a>Career</a></Link>
    <br/>
    <Link href='/'><a>Leadership</a></Link>
    <br/>   
    <Link href='/'><a>Contact Us</a></Link>
</div>
</div>
<div className='footer_social'>
    <p>48, Community Road,Akoka Lagos</p>
    <a href='#'><FacebookIcon/></a>
    <a href='#'><LinkedInIcon/></a>
    <a href='#'><InstagramIcon/></a>
    <a href='#'><TwitterIcon/></a>
</div>
</Grid>
    </Container>
    <div className='footer_end'></div>
    </>

    
  )
}

export default Footer
