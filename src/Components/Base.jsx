import { Box, Button, ButtonGroup, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import img1 from '../images/litupface.png'
import Artist from './Artist'
import './Base.css'
import Home from './Home'
import Techie from './Techie'
import HomeIcon from '@mui/icons-material/Home';

const Base = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState('home');
  const defaultStyle = {
    fontWeight: 'bolder', color: 'white',
    borderColor: 'white'
  };
  const clickStyle = {
    backgroundColor: 'white', borderColor: 'white',
    color: '#1B1F3B', fontWeight: 'bolder'
  };

  const choosePage = (value) => {
    setPage(value);
    navigate('/?access=' + value + "&qs=site_2AKSJEWIXCMNCWKLCSKPOQSKLAKOUFH");
  }

  useEffect(() => {
    if (searchParams.has('access')) {
      setPage(searchParams.get('access'));
    } else {
      setPage('home');
    }
  }, [searchParams, page, setPage]);

  return (
    <div>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Grid container spacing={2} className='base' style={{display:'flow-root'}}>
          <Grid item xs={3} style={{ textAlign: 'center', float: 'left' }}>
            <img src={img1} alt="MSM" className='imageSet' />
            <p style={{ paddingTop: '5px', height: '60px', textAlign: 'left', paddingLeft: '70px' }}>
              <code style={{ fontSize: 25, color: 'skyblue' }}>
                Hey, I'm<br />
              </code>
              <code style={{ fontSize: 60, color: 'yellow' }}>
                Midhun S Madhavan, <br />
              </code>
              {/* color: '#3755BE', */}
              <code style={{ fontSize: 20, color: 'lightblue' }}>
                an artist and a software engineer.
              </code>
            </p>
          </Grid>
          <Grid item xs={9} style={{ float: 'left' }}>
            <div className='pages'>
              <ButtonGroup size='large' variant='outlined'>
                <Button
                  variant='outlined'
                  style={page === 'home' ? clickStyle : defaultStyle}
                  onClick={() => choosePage('home')}
                >
                  <HomeIcon />
                </Button>
                <Button
                  variant='outlined'
                  style={page === 'artist-profile' ? clickStyle : defaultStyle}
                  onClick={() => choosePage('artist-profile')}
                >
                  ARTIST PROFILE
                </Button>
                <Button
                  variant='outlined'
                  style={page === 'tech-profile' ? clickStyle : defaultStyle}
                  onClick={() => choosePage('tech-profile')}
                >
                  TECH PROFILE
                </Button>
              </ButtonGroup>
            </div>
            {(() => {
              switch (page) {
                case 'home':
                  return <Home />;
                case 'artist-profile':
                  return <Artist />;
                case 'tech-profile':
                  return <Techie />;
                default:
                  return <Home />;
              }
            })()}
          </Grid>
        </Grid>
      </Box>
      <div className='bottom-wrapper'>
        {/* <a href="https://www.instagram.com/iammadhavan_m/" target='blank' className='AppLink'>
          <img src={IG} alt="Instagram" style={{ width: 25, height: 20 }} />
        </a>
        <a href="mailto:arts.midhunsmadhavan@gmail.com" className='AppLink'>
          <img src={email} alt="Email" style={{ width: 20, height: 20 }} />
        </a>
        <br />*/}
        &#169;&nbsp;Midhun S Madhavan,&nbsp;
        2023
      </div>
    </div>
  )
}

export default Base