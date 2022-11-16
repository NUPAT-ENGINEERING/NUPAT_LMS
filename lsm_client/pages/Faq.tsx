import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import Navbar from '../component/Header/Navbar';
import Footer from '../component/Common/Footer';
import { Box, Container } from '@mui/system';
import { TextField } from '@mui/material';
import Newsletter from '../component/Common/Newsletter';

export default function SimpleAccordion() {
  return (
    <>
    
        <Navbar/>
       
    
        <Box
      
      sx={{ p: '2px 4px', mt:8,bgcolor:'#131e4a', flexDirection:'column', display: 'flex', alignItems: 'center' }} 
    >
            <Typography variant='h3'
        sx={{
            color:'white',
            mt:3,
            fontSize:'24px'
        }}
        >Frequently Asked Questions</Typography>  
   <Box>
      <InputBase
        sx={{ ml: 1, pl:2,mt:2, flex: 1,bgcolor:'white', width:{
            lg: 500,
            md: 500,
            sm:400,
            xs:200
        } }}
        placeholder="Search Answers Here"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ py:'8px', px:'30px',color:'white', bgcolor:'black', borderRadius:'0px' }} aria-label="search">
        <Typography variant='body'
        sx={{
            fontSize:'15px'
        }}
        >Search</Typography>
    
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
      </Box>
    </Box> 
        
        <Container
       
        >
            <Box
            sx={{
                mb:2,
                mt:3
            }}
            >
                <Typography variant='body'>Do you have any issues with the LMS? Here are few solutions to some questions that may be on your mind</Typography>
            </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography variant='body'>Quest One :  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mi magna urna </Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
            bgcolor:'#a7acc2'
        }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mi magna urna scelerisque erat. Vitae mi nunc vitae sodales placerat. Fermentum lobortis cursus arcu at nibh turpis. Vitae leo diam diam id.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </Container>
    <Newsletter/>
    <Footer/>
    </>
  );
}
