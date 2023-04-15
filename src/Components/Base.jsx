import { Box, Button, ButtonGroup, Grid, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import img1 from '../images/litupface.png'
import Artist from './Artist'
import './Base.css'
import Home from './Home'
import Techie from './Techie'
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Contact from './Contact'
import ReactJs from '../images/ReactJs.png'
import MaterialUi from '../images/MaterialUi.png'
import EmailJs from '../images/EmailJs.png'
import Firebase from '../images/Firebase.png'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Zoom from '@mui/material/Zoom';

const Base = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState('home');
  const [fromTopMenu, setFromTopMenu] = useState(false);
  const defaultStyle = {
    fontWeight: 'bolder', color: 'cyan',
    borderColor: '#2e2d5d'
  };

  const clickStyle = {
    backgroundColor: 'cyan', borderColor: '#2e2d5d',
    color: '#1B1F3B', fontWeight: 'bolder'
  };

  const topMenuDefaultStyle = {
    fontWeight: 'bold',
    borderColor: '#2e2d5d',
    color: 'cyan',
  };
  const topMenuClickStyle = {
    backgroundColor: 'cyan', borderColor: 'cyan',
    fontWeight: 'bold',
    color: '#1B1F3B',
  };

  const choosePage = (value, isTop = false, contactThread = '') => {
    setPage(value);
    value !== 'home' ? setFromTopMenu(isTop) : setFromTopMenu(false);
    let navigateString = '/?access=' + value + "&qs=site_2AKSJEWIXCMNCWKLCSKPOQSKLAKOUFH";
    if (contactThread !== '') {
      navigateString = navigateString + '&ct=' + contactThread;
    }
    navigate(navigateString);
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
      <div className='topMenu'>
        <ButtonGroup size='small' variant='outlined' style={{ marginLeft: '-30px' }}>
          <Button
            variant='outlined'
            style={page === 'home' ? topMenuClickStyle : topMenuDefaultStyle}
            onClick={() => choosePage('home', true)}
          >
            <HomeIcon />
          </Button>
          <Button
            variant='outlined'
            style={page === 'artist-profile' ? topMenuClickStyle : topMenuDefaultStyle}
            onClick={() => choosePage('artist-profile', true)}
          >ARTIST PROFILE</Button>
          <Button
            variant='outlined'
            style={page === 'tech-profile' ? topMenuClickStyle : topMenuDefaultStyle}
            onClick={() => choosePage('tech-profile', true)}
          >TECH PROFILE</Button>
          <Button
            variant='outlined'
            style={page === 'contact' ? topMenuClickStyle : topMenuDefaultStyle}
            onClick={() => choosePage('contact', true)}
          >
            <ContactMailIcon />
          </Button>
        </ButtonGroup>
      </div>
      {window.innerWidth <= 900 ? <br /> : ""}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Grid container spacing={2} className='base'>
          <Grid item sm={window.innerWidth <= 900 ? 12 : 3} xs={12} className='leftPan'>
            {fromTopMenu ?
              <Grid container spacing={2}>
                <Grid item xs={6} style={{ textAlign: 'right' }}>
                  <img src={img1} alt="MSM" className='imageSetSmall' />
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'left' }}>
                  <p className='smalldescription'>
                    <code className='name'>
                      Midhun<br />Soudamini<br />Madhavan <br />
                    </code>
                    <code className='firstLine' style={{
                      background: 'ivory',
                      padding: '0.5px 5px',
                      color: '#1B1F3B',
                    }}>
                      {(() => {
                        switch (page) {
                          case 'artist-profile':
                            return "The Artist";
                          case 'tech-profile':
                            return "The Techie";
                          case 'contact':
                            return "Contact me";
                          default:
                            return "";
                        }
                      })()}
                    </code>
                  </p>
                </Grid>
              </Grid>
              :
              <>
                <img src={img1} alt="MSM" className='imageSet' />
                <p className='description'>
                  <code className='firstLine'>
                    Hey, I'm<br />
                  </code>
                  <code className='name'>
                    Midhun<br />Soudamini<br />Madhavan <br />
                  </code>
                  <code className='brief'>
                    an artist and a software engineer.
                  </code>
                </p>
              </>
            }
          </Grid>
          <div className='splitter'></div>
          <Grid item sm={window.innerWidth <= 900 ? 12 : 9} xs={12}>
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
                <Button
                  variant='outlined'
                  style={page === 'contact' ? clickStyle : defaultStyle}
                  onClick={() => choosePage('contact')}
                >
                  <ContactMailIcon />
                </Button>
              </ButtonGroup>
            </div>
            {(() => {
              switch (page) {
                case 'home':
                  return <Home />;
                case 'artist-profile':
                  return <Artist choosePage={choosePage} />;
                case 'tech-profile':
                  return <Techie choosePage={choosePage} />;
                case 'contact':
                  return <Contact />;
                default:
                  return <Home />;
              }
            })()}
          </Grid>
        </Grid>
      </Box>
      <div className='bottom-Filler'></div>
      <div className='bottom-wrapper'>
        <Typography variant={window.innerWidth <= 900 ? 'body1' : 'h6'}>Crafted using</Typography>
        <div>
          <Tooltip title="React Js" TransitionComponent={Zoom} placement="top" arrow>
            <img src={ReactJs} alt='React.Js' style={{
              height: window.innerWidth <= 900 ? '20px' : '30px', width: window.innerWidth <= 900 ? '20px' : '30px',
              display: 'inline-block', margin: '10px', borderRadius: '2px'
            }} /></Tooltip>
          <Tooltip title="Material  UI" TransitionComponent={Zoom} placement="top" arrow>
            <img src={MaterialUi} alt='Material Ui' style={{
              height: window.innerWidth <= 900 ? '20px' : '30px', width: window.innerWidth <= 900 ? '20px' : '30px',
              display: 'inline-block', margin: '10px', borderRadius: '2px'
            }} /></Tooltip>
          <Tooltip title="Email Js" TransitionComponent={Zoom} placement="top" arrow>
            <img src={EmailJs} alt='EmailJs' style={{
              height: window.innerWidth <= 900 ? '20px' : '30px', width: window.innerWidth <= 900 ? '20px' : '30px',
              display: 'inline-block', margin: '10px', borderRadius: '2px'
            }} /></Tooltip>
          <Tooltip title="Firebase" TransitionComponent={Zoom} placement="top" arrow>
            <img src={Firebase} alt='Firebase' style={{
              height: window.innerWidth <= 900 ? '20px' : '30px', width: window.innerWidth <= 900 ? '20px' : '30px',
              display: 'inline-block', margin: '10px', borderRadius: '2px'
            }} />
          </Tooltip>
        </div>
        <div>
          (and by myself.)<br /><br />
          <EmojiEmotionsIcon style={{ color: 'gold' }} /><br /><br />
          &#169;&nbsp;Midhun S Madhavan,&nbsp;
          2023
        </div>
      </div>
    </div >
  )
}

export default Base