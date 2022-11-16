import { Container } from '@mui/system'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Schools from './Schools'
import { styled } from '@mui/material/styles'
import SchoolIcon from '@mui/icons-material/School'
import ApartmentIcon from '@mui/icons-material/Apartment'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'

const Features = () => {
  const value = [
    'Personal attention',
    'International diversity',
    'Global awareness',
    'Healthy living',
    'Passion for learning',
  ]
  const academic = [
    'Accredited curriculum',
    'Passionate teaching',
    'Lessons in English',
    'French for all',
    'Small class sizes',
  ]
  const classroom = [
    'Outdoor learning',
    'Art, drama & music',
    'Expeditions',
    'Snow sports',
    'Clubs & activities',
  ]
  const care = [
    'Day & boarding',
    'Safe environment',
    'Wraparound care',
    'Exceptional location',
    'State of the art campus',
  ]
  return (
    <>
      <Container>
        <div className="feature_container">
          <h2>A QUICK LOOK AT PROMISE INTERNATIONAL SCHOOL</h2>
          <p>outstanding features</p>
          <Grid container spacing={2} className="features_container">
            <Grid item className="feature_value">
              <div className="feature_img">
                <div className="feature_inner_circle">
                  <AutoStoriesIcon sx={{ fontSize: '60px' }} />
                </div>
              </div>
              <h5 style={{ color: 'black' }}>Our Values</h5>
              {value.map((page, index) => (
                <p key={index}>{page}</p>
              ))}
              <Button
                variant="outlined"
                sx={{ fontSize: '12px', marginTop: '20px' }}
              >
                Read More
              </Button>
            </Grid>
            <Grid item className="feature_academic">
              <div className="feature_img">
                <div className="feature_inner_circle">
                  <SchoolIcon sx={{ fontSize: '60px' }} />
                </div>
              </div>
              <h5 style={{ color: 'black' }}>Academic Excellence</h5>
              {academic.map((page, index) => (
                <p key={index}>{page}</p>
              ))}
              <Button
                variant="outlined"
                sx={{ fontSize: '12px', marginTop: '20px' }}
              >
                Read More
              </Button>
            </Grid>
            <Grid item className="feature_classroom">
              <div className="feature_img">
                <div className="feature_inner_circle">
                  <ApartmentIcon sx={{ fontSize: '60px' }} />
                </div>
              </div>
              <h5 style={{ color: 'black' }}>Beyond the Classroom</h5>
              {classroom.map((page, index) => (
                <p key={index}>{page}</p>
              ))}
              <Button
                variant="outlined"
                sx={{ fontSize: '12px', marginTop: '20px' }}
              >
                Read More
              </Button>
            </Grid>
            <Grid item className="feature_care">
              <div className="feature_img">
                <div className="feature_inner_circle">
                  <MedicationLiquidIcon sx={{ fontSize: '60px' }} />
                </div>
              </div>
              <h5 style={{ color: 'black' }}>Pastoral Care</h5>
              {care.map((page, index) => (
                <p key={index}>{page}</p>
              ))}
              <Button
                variant="outlined"
                sx={{ fontSize: '12px', marginTop: '20px' }}
              >
                Read More
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container>
        <Grid container className="feature_container_two">
          <Grid item lg={6} md={6} 
          sx={{
            height:{
              sm:250,
              xs: 250,
              lg: 350
            }
          }}
          className="feature_video">
            <div className="feature_thumbnail">
              <Link href="/">
                <a>
                  <div className="play">
                    <PlayArrowIcon
                      sx={{ fontSize: '35px', color: '#0098db' }}
                    />
                  </div>
                </a>
              </Link>
            </div>
          </Grid>
          <Grid item lg={6} md={6} className="feature_info">
            <h3>Welcome</h3>
            <p>
              Promise Int'l welcomes young people aged 5 to 18 from more than 30
              nations to our exceptional school in the Swiss Alps.
              <br />
              We pride ourselves on our bilingual approach, giving students
              mastery of French and English. Our students follow globally
              accredited programmes of study, creating informed, globally
              competent, and future-ready learners. La Garenne’s core values are
              academic excellence, a close-knit family atmosphere, security and
              cultural diversity.
            </p>
            <Button
              variant="outlined"
              sx={{ fontSize: '12px', marginTop: '20px', width: '100px' }}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Schools />
    </>
  )
}

export default Features
