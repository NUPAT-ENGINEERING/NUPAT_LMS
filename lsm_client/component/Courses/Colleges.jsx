import { Container } from '@mui/system'
import { Button,Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import {College} from '../../Data/College'

const Colleges = () => {
  return (
<>
<Container>
    <Grid container >
    <Grid item lg={8}>
       <Typography variant='h2'
       sx={{
        fontSize:{
            lg:'24px',
            md:'22px',
            sm:'19px',
            xs:'18px'
        },
        fontWeight:{
            lg:'600',
            md:'600',
            sm:'600',
            xs: '600'
        },
        mb:3
       }}
       >
       Welcome to Nupat Code Camp
        </Typography> 
       <Typography variant='body1'>
       Nupat code camp, a  home for acquiring  new Tech skills , we have 3 Major departments which includes The Engineering Department, Design Departments and the Data Departments.
        </Typography> 
     </Grid>

     <Grid container 
     
     gap={1}
     sx={{
        display:'flex',
        justifyContent:'space-around'
     }}
     >
         {
            College.map((data, index)=>(

        <Grid item 
        sx={{
            mt:3,
            mb:3
        }}
        lg={3.5} md={3} sm={5} key={index}
        className='college_card'
        >
            <div className='card_header'>
                <div className='card_profile'></div>
                <div className='card_title'><h2>{data.title}</h2></div>
            </div>
            <div className='card_content'>
<p>{data.content}</p>

<Link href={data.link}><a>More...</a></Link>
            </div>
        </Grid>
            ))
        }
       
    
    </Grid>
    </Grid>
</Container>
</>
  )
}

export default Colleges