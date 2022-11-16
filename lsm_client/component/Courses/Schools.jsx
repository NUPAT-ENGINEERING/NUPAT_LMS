import { Grid, Typography, Divider, Button } from '@mui/material'
import { Box, display } from '@mui/system'
import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import Image from 'next/image'

const Schools = () => {
  return (
    <>
      <Box sx={{ bgcolor: '#f1f1f1', mb: 5, pt: 3, pb: 4 }}>
        <Grid
          container
          spacing={1}
          sx={{
            margin: '0 auto',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box
              className="creche"
              sx={{
                justifyContent: 'center',
                alignItem: 'center',
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  width: '150px',
                  height: '160px',
                  bgcolor: 'white',
                  mt: 6,
                  opacity: '0.7',
                }}
              >
                <Box
                  sx={{
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '90%',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4">0-5</Typography>
                  <Divider />
                  <Typography variant="h5">Age</Typography>
                  <br />
                  <Button variant="contained" sx={{ borderRadius: '0px' }}>
                    Creche
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box
              className="primary"
              sx={{
                justifyContent: 'center',
                alignItem: 'center',
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  width: '150px',
                  height: '160px',
                  bgcolor: 'white',
                  mt: 6,
                  opacity: '0.7',
                }}
              >
                <Box
                  sx={{
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '90%',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4">4-10</Typography>
                  <Divider />
                  <Typography variant="h5">Age</Typography>
                  <br />
                  <Button variant="contained" sx={{ borderRadius: '0px' }}>
                    Primary
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box
              className="secondary"
              sx={{
                justifyContent: 'center',
                alignItem: 'center',
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  width: '150px',
                  height: '160px',
                  bgcolor: 'white',
                  mt: 6,
                  opacity: '0.7',
                }}
              >
                <Box
                  sx={{
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '90%',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4">10-15</Typography>
                  <Divider />
                  <Typography variant="h5">Age</Typography>
                  <br />
                  <Button variant="contained" sx={{ borderRadius: '0px' }}>
                    Secondary
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 5, pt: 3, pb: 4 }}>
        <Grid
          container
          spacing={1}
          sx={{
            margin: '0 auto',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              className="academics"
              sx={{
                justifyContent: 'center',
                alignItem: 'center',
                display: 'flex',
              }}
            >
              
            </Box>
            <Box
            sx={{
              justifyContent: 'center',
              alignItem: 'center',
              display: 'flex',
              textAlign:'center',
              flexDirection:'column',
              px: 6,
              py:3,
borderBottom:'2px solid #0098db'
            }}
            >
              <SchoolIcon/>
<Typography variant='h4'
sx={{
  fontSize:'18px',
  fontWeight:'600'
}}
>Curriculum</Typography>
<Typography variant='p'
sx={{
  fontSize:'12px'
}}
>We value academic excellence through highly committed and passionate teachers, inquiry-based learning, state-of-the-art educational technology.</Typography>
<br/>
<Button variant='outlined'>Read More</Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              className="school_blog"
              sx={{
                justifyContent: 'center',
                alignItem: 'center',
                display: 'flex',
              }}
            >
              
            </Box>
            <Box
            sx={{
              justifyContent: 'center',
              alignItem: 'center',
              display: 'flex',
              textAlign:'center',
              flexDirection:'column',
              px: 6,
              py:3,
borderBottom:'2px solid #0098db'
            }}
            >
              <PostAddIcon/>
<Typography variant='h4'
sx={{
  fontSize:'18px',
  fontWeight:'600'
}}
>School Blog</Typography>
<Typography variant='p'
sx={{
  fontSize:'12px'
}}
>Academic excellence, a warm international family ambience in which diversity is welcomed, and a safe location in exceptional surroundings, are our core values.</Typography>
<br/>
<Button variant='outlined'>Read More</Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              className="gallery"
              sx={{
                justifyContent: 'center',
                alignItem: 'center',
                display: 'flex',
              }}
            >
            
            </Box>
            <Box
            sx={{
              justifyContent: 'center',
              alignItem: 'center',
              display: 'flex',
              textAlign:'center',
              flexDirection:'column',
              px: 6,
              py:3,
borderBottom:'2px solid #0098db'
            }}
            >
              <CollectionsIcon/>
<Typography variant='h4'
sx={{
  fontSize:'18px',
  fontWeight:'600'
}}
>Photo Gallery</Typography>
<Typography variant='p'
sx={{
  fontSize:'12px'
}}
>Click on the image for the photo gallery: see school life at La Garenne and enjoy new photos each week...</Typography>
<br/>
<Button variant='outlined'>Read More</Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box
              className="Awards"
              sx={{
                justifyContent: 'center',
                alignItem: 'center',
                display: 'flex',
              }}
            >
            
            </Box>
            <Box
            sx={{
              justifyContent: 'center',
              alignItem: 'center',
              display: 'flex',
              textAlign:'center',
              flexDirection:'column',
              px: 6,
              py:3,
borderBottom:'2px solid #0098db'
            }}
            >
              <EmojiEventsIcon/>
<Typography variant='h4'
sx={{
  fontSize:'18px',
  fontWeight:'600'
}}
>Awards</Typography>
<Typography variant='p'
sx={{
  fontSize:'12px'
}}
>We value academic excellence through highly committed and passionate teachers, inquiry-based learning, state-of-the-art educational technology.</Typography>
<br/>
<Button variant='outlined'>Read More</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Schools
