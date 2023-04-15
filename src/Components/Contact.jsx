// import { Button } from '@mui/material'
import React from 'react'
import ArtRequest from './ArtRequest'
import './Base.css'

const Contact = () => {
    return (
        <div className='content' style={{ display: 'flow-root', padding: '0px', paddingTop: '10px', paddingBottom: '10px' }}>
            <div style={{
                width: '100%',
                paddingTop: window.innerWidth <= 900 ? '10px' : '0px',
                textAlign: window.innerWidth <= 900 ? 'center' : 'center'
            }}>
                {/* <br /><br /> */}
                <ArtRequest />
                {/* <br /><br /> */}
                {/* <br />
                <Button variant='contained' color='info'>
                    <a href='mailto:midhunmadhavan.se@gmail.com' style={{ color: 'white', textDecoration: 'none' }}>TECH QUERIES</a></Button> */}
                {/* </Grid>
                    </Grid>
                </Box> */}
                {/* <Typography variant='h3' className='oneLine'>
                    Want my assistance in something?
                </Typography>
                <Typography variant='h4' className='oneLine'>
                    Do you want me to make a website for you?
                </Typography>
                <Typography variant='h5' className='oneLine'>
                    Do you want me to be a part in your next movie?<br />
                </Typography>
                <Typography variant='h6' className='oneLine' style={{ color: 'gold' }}>
                    Please feel free to contact me.
                </Typography> */}
            </div>
        </div>
    )
}

export default Contact