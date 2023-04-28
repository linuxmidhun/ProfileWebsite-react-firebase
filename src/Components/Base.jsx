import { AppBar, Box, Grid, Toolbar, Tooltip, Typography, Button, ButtonGroup, Drawer, Divider } from '@mui/material'
// 
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
// import logo from '../images/vanghogh-back.png'
import Artist from './Artist'
import './Base.css'
import Home from './Home'
import Techie from './Techie'
import HomeIcon from '@mui/icons-material/Home';
// import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
// import EngineeringIcon from '@mui/icons-material/Engineering';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Contact from './Contact'
import ReactJs from '../images/ReactJs.png'
import MaterialUi from '../images/MaterialUi.png'
import EmailJs from '../images/EmailJs.png'
import Firebase from '../images/Firebase.png'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Base = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState('home');
  const [drawerState, setDrawerState] = useState(false);
  // const [fromTopMenu, setFromTopMenu] = useState(false);
  // const defaultStyle = {
  //   fontWeight: 'bolder', color: 'cyan',
  //   borderColor: '#2e2d5d'
  // };

  // const clickStyle = {
  //   backgroundColor: 'cyan', borderColor: '#2e2d5d',
  //   color: '#1B1F3B', fontWeight: 'bolder'
  // };

  // const topMenuDefaultStyle = {
  //   fontWeight: 'bold',
  //   borderColor: '#2e2d5d',
  //   color: 'cyan',
  // };
  // const topMenuClickStyle = {
  //   backgroundColor: 'cyan', borderColor: 'cyan',
  //   fontWeight: 'bold',
  //   color: '#1B1F3B',
  // };

  const toggleDrawer = (open) => {
    setDrawerState(open);
  };

  const choosePage = (value, isTop = false, contactThread = '') => {
    setPage(value);
    // value !== 'home' ? setFromTopMenu(isTop) : setFromTopMenu(false);
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
              <AppBar elevation={0} style={{ backgroundColor: 'whitesmoke' }} position='fixed'>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                  <Grid container spacing={0} className='base'>
                    <Grid item sm={12} xs={12}>
                      <Grid item sm={10} xs={12} style={{ margin: 'auto', padding: '0px' }}>
                        <Toolbar style={{ paddingRight: '0px' }}>
                          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
                            style={{
                              color: 'black',
                              // fontStyle: 'italic',
                              fontFamily: 'Arial,Helvetica,sans-serif',
                              textShadow: '5px 0 5px silver',
                            }}>
                            Midhun S Madhavan
                          </Typography>
                          {window.innerWidth <= 900 ?
                            <IconButton
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{ mr: 2 }}
                              onClick={() => toggleDrawer(true)}
                            >
                              <MenuIcon style={{ color: 'black' }} />
                            </IconButton>
                            :
                            <ButtonGroup size='large'>
                              <Button
                                variant='text'
                                // style={page === 'home' ? clickStyle : defaultStyle}
                                onClick={() => choosePage('home')}
                              >
                                <HomeIcon />
                              </Button>
                              <Button
                                variant='text'
                                // style={page === 'artist-profile' ? clickStyle : defaultStyle}
                                onClick={() => choosePage('artist-profile')}
                              >
                                ARTIST PROFILE
                              </Button>
                              <Button
                                variant='text'
                                // style={page === 'tech-profile' ? clickStyle : defaultStyle}
                                onClick={() => choosePage('tech-profile')}
                              >
                                TECH PROFILE
                              </Button>
                              <Button
                                variant='text'
                                // style={page === 'contact' ? clickStyle : defaultStyle}
                                onClick={() => choosePage('contact')}
                              >
                                <ContactMailIcon />
                              </Button>
                            </ButtonGroup>
                          }
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
                    // style={page === 'home' ? clickStyle : defaultStyle}
                    style={{ width: '100%', color: 'black' }}
                    onClick={() => choosePage('home')}
                  >
                    {/* <HomeIcon />&nbsp; */}
                    Home
                  </Button> <br />
                  <Button
                    variant='text'
                    // style={page === 'artist-profile' ? clickStyle : defaultStyle}
                    style={{ width: '100%', color: 'black' }}
                    onClick={() => choosePage('artist-profile')}
                  >
                    {/* <TheaterComedyIcon />&nbsp; */}
                    ARTIST PROFILE
                  </Button> <br />
                  <Button
                    variant='text'
                    // style={page === 'tech-profile' ? clickStyle : defaultStyle}
                    style={{ width: '100%', color: 'black' }}
                    onClick={() => choosePage('tech-profile')}
                  >
                    {/* <EngineeringIcon />&nbsp; */}
                    TECH PROFILE
                  </Button> <br />
                  <Button
                    variant='text'
                    // style={page === 'contact' ? clickStyle : defaultStyle}
                    style={{ width: '100%', color: 'black' }}
                    onClick={() => choosePage('contact')}
                  >
                    {/* <ContactMailIcon />&nbsp; */}
                    Contact
                  </Button>
                  <Divider />
                  {/* </div> */}
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
              <div style={{ height: window.innerWidth <= 900 ? '50px' : '80px' }}></div>
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
        </Grid>
      </Box>
      {/* <div className='bottom-Filler'></div> */}
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
    </div>
  )
}

export default Base