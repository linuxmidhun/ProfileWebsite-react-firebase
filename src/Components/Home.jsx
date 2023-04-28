import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from '../images/cr3-rm.png'

const Home = () => {
    return (
        <div className='content' style={{ display: 'flow-root', padding: '0px' }}>
            <Box sx={{ display: 'flex', flexGrow: 1, padding: '0px' }}>
                <Grid container spacing={0} style={{ display: 'flow-root', padding: '0px' }}>
                    {window.innerWidth <= 900 ?
                        <Grid item sm={6} xs={12} className='mobile-landing'>
                            {/* No content */}
                        </Grid>
                        :
                        <Grid item sm={6} xs={12}
                            style={{ width: '100%', float: 'left', padding: '0px' }}>
                            <img src={img1} alt="MSM" style={{ width: '100%' }} />
                        </Grid>
                    }
                    <Grid item sm={6} xs={12} style={{ width: '100%', float: 'left' }}>
                        <div style={{
                            textAlign: 'center', padding: '30px',
                            paddingTop: window.innerWidth <= 900 ? '5px' : '30px', paddingBottom: '0px'
                        }}>
                            <Typography variant='h5' className='border-content-small'>
                                <span className='small'>Hey, I'm</span><br />
                                Midhun Soudamini Madhavan,<br />
                                an artist and a software engineer.
                            </Typography>
                            <div style={{ height: window.innerWidth <= 900 ? '100px' : '0px' }}></div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Home