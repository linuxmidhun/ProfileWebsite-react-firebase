import { AppBar, Box, Grid, Toolbar, Typography, Button, Drawer, Divider } from '@mui/material'
// 
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
// import logo from '../images/vanghogh-back.png'
import Artist from './Artist'
import './Base.css'
import Home from './Home'
import Techie from './Techie'
// import HomeIcon from '@mui/icons-material/Home';
// import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
// import EngineeringIcon from '@mui/icons-material/Engineering';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import Contact from './Contact'
// import ReactJs from '../images/ReactJs.png'
// import MaterialUi from '../images/MaterialUi.png'
// import EmailJs from '../images/EmailJs.png'
// import Firebase from '../images/Firebase.png'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PageWaiter from './PageWaiter'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Base = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState('home');
  const [drawerState, setDrawerState] = useState(false);
  // const [fromTopMenu, setFromTopMenu] = useState(false);
  const defaultStyle = {
    // fontWeight: 'bolder', 
    color: 'black',
    borderColor: '#2e2d5d',
    margin: '2px',
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
  };

  const clickStyle = {
    // backgroundColor: 'cyan',
    // borderColor: '#2e2d5d',
    backgroundColor: 'gold',
    borderColor: 'gold',
    color: 'black',
    // fontWeight: 'bolder'
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
  };

  const drawerMenuStyle = {
    width: '100%',
    color: 'black',
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
  }


  const toggleDrawer = (open) => {
    setDrawerState(open);
  };

  const choosePage = (value, isTop = false, contactThread = '') => {
    setPage(value);
    let navigateString = '/?access=' + value + "&qs=site_2AKSJEWIXCMNCWKLCSKPOQSKLAKOUFH";
    if (contactThread !== '') {
      navigateString = navigateString + '&ct=' + contactThread;
    }
    navigate(navigateString);
    setDrawerState(false);
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
        <Grid container spacing={2} className='base'>
          <Grid item sm={12} xs={12}>
            <Grid item sm={10} xs={12} style={{ margin: 'auto' }}>
              <AppBar elevation={0} style={{ backgroundColor: 'white' }} position='fixed'>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                  <Grid container spacing={0} className='base'>
                    <Grid item sm={12} xs={12}>
                      <Grid item sm={10} xs={12} style={{ margin: 'auto', padding: '0px' }}>
                        <Toolbar style={{ paddingRight: '0px' }}>
                          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
                            style={{
                              color: '#1B1F3B',
                              fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
                              fontWeight: 'bold',
                              textShadow: '5px 0 5px silver',
                            }}>
                            Midhun S Madhavan
                          </Typography>
                          <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => toggleDrawer(true)}
                            className='menu-button'
                          >
                            <MenuIcon style={{ color: 'black' }} />
                          </IconButton>
                          <div className='menu-wide'>
                            <Button
                              variant='button'
                              style={page === 'home' ? clickStyle : defaultStyle}
                              onClick={() => choosePage('home')}
                            >
                              Home
                            </Button>
                            <Button
                              variant='button'
                              style={page === 'artist-profile' ? clickStyle : defaultStyle}
                              onClick={() => choosePage('artist-profile')}
                            >
                              ARTIST
                            </Button>
                            <Button
                              variant='button'
                              style={page === 'tech-profile' ? clickStyle : defaultStyle}
                              onClick={() => choosePage('tech-profile')}
                            >
                              TECHNOLOGIST
                            </Button>
                            <Button
                              variant='button'
                              style={page === 'contact' ? clickStyle : defaultStyle}
                              onClick={() => choosePage('contact')}
                            >
                              Contact
                            </Button>
                          </div>
                        </Toolbar>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </AppBar>
              <Drawer anchor='top' open={drawerState}
                onClose={() => toggleDrawer(false)}>
                <Box
                  sx={{
                    width: window.innerWidth, height: window.innerHeight,
                    backgroundColor: 'aliceblue'
                  }}
                  role="presentation"
                >
                  <div style={{ width: '100%', height: '35%' }}></div>
                  <Divider />
                  <Button
                    variant='text'
                    style={drawerMenuStyle}
                    onClick={() => choosePage('home')}
                  >
                    Home
                  </Button> <br />
                  <Button
                    variant='text'
                    style={drawerMenuStyle}
                    onClick={() => choosePage('artist-profile')}
                  >
                    ARTIST
                  </Button> <br />
                  <Button
                    variant='text'
                    style={drawerMenuStyle}
                    onClick={() => choosePage('tech-profile')}
                  >
                    TECHNOLOGIST
                  </Button> <br />
                  <Button
                    variant='text'
                    style={drawerMenuStyle}
                    onClick={() => choosePage('contact')}
                  >
                    Contact
                  </Button>
                  <Divider />
                  <div style={{ width: '100%', textAlign: 'center', padding: '15px', paddingLeft: '15px' }}>
                    <IconButton
                      size="medium"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2, border: '1px solid silver' }}
                      onClick={() => toggleDrawer(false)}
                    >
                      <CloseIcon style={{ color: 'black', fontWeight: 'bold' }} />
                    </IconButton>
                  </div>
                </Box>
              </Drawer>
              <div style={{ height: '80px' }}></div>
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
                    return <PageWaiter />;
                }
              })()}
              {/* <div className='bottom-Filler'></div> */}
              <div className='bottom-wrapper'>
                {/* <Typography variant={window.innerWidth <= 900 ? 'body1' : 'h6'}>Crafted using</Typography> */}
                {/* <div>
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
        </div> */}
                <div>
                  <a href='https://www.instagram.com/iammadhavan_m' rel='noreferrer' target='_blank'><InstagramIcon style={{ fontSize: '30px' }} /></a>
                  <a href='https://www.linkedin.com/in/midhun-s-madhavan/' rel='noreferrer' target='_blank'><LinkedInIcon style={{ fontSize: '30px' }} /></a>
                  <a href='https://www.youtube.com/channel/UCJbFCDaNbTAX6pp1bxxup0A' rel='noreferrer' target='_blank'><YouTubeIcon style={{ fontSize: '33px' }} /></a>
                </div>
                <div>
                  <EmojiEmotionsIcon style={{ color: 'gold' }} /><br /><br />
                  &#169;&nbsp;Midhun S Madhavan,&nbsp;2023
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Base