import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from '../images/lookback.png'

const Home = () => {
    return (
        <div className='content' style={{ display: 'flow-root', padding: '0px' }}>
            <Box sx={{ display: 'flex', flexGrow: 1, padding: '0px' }}>
                <Grid container spacing={0} style={{ display: 'flow-root', padding: '0px' }}>
                    <Grid item sm={12} xs={12}
                        style={{ width: '100%', padding: '0px', float: 'left', textAlign: 'center' }}>
                        <img src={img1} alt="MSM" className='imageSet' />
                    </Grid>
                    {/* } */}
                    <Grid item sm={12} xs={12} style={{ width: '100%', padding: '0px', float: 'left' }}>
                        <div style={{
                            padding: '10px',
                        }}>
                            <Typography variant='subtitle2' className='border-content-small-home'>
                                <span className='small'>Hey, I'm</span><br />
                                Midhun Soudamini Madhavan.<br />
                                <div className='sub'>
                                    I am an artist, a software engineer and a programming trainer from Kerala, India. I have spent more than a decade in the software industry as a programmer and after those eventful years in the information technology industry I took a turn and started as an art enthusiast and along with that I started helping in mentoring and grooming technology start ups, and teaching technology to college students or who ever is interested in technology.
                                </div>
                                <br />
                                <div className='sub'>
                                    Here I welcome you to my website to know little something about me. Happy Happy!
                                </div>
                            </Typography>
                            {/* <div style={{ height: window.innerWidth <= 900 ? '100px' : '0px' }}></div> */}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Home