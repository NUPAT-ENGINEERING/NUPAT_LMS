import { Container } from '@mui/system'
import { Button,Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { DataCollegeData} from '../Data/DataCollegeData'
import Navbar from '../component/Header/Navbar'

const DataScience = () => {
  return (
    <>
       <Navbar/>
        <Container
    sx={{
      mt:12
    }}
    >
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
     College of Data 
        </Typography> 
       <Typography variant='body1'>
       Engineering department consist of courses such as Front end engineering, Back end engineering, Full stack (.net C#), Block chain developend , Cloud architecture, Full stack (django) etc
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
            DataCollegeData.map((data, index)=>(

        <Grid item 
        sx={{
            mt:3,
            mb:3,
            bgcolor:'rgba(0, 220, 220, 0.2)'
        }}
        lg={3.5} md={3} sm={5} key={index}
        className='college_card_2'
        
        
      
        >
            <div className='card_header'>
                <Box className='card_profile_2'
                sx={{
                    bgcolor:'#00DCDC'
                }}
                ></Box>
                <div className='card_title'><h2>{data.title}</h2></div>
            </div>
            <div className='card_content'>
<p>{data.content}</p>

<Link href="/"><a>More...</a></Link>
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

export default DataScience





