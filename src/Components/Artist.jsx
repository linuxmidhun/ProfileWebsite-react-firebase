import { Typography, Card, CardMedia, CardContent, Box, Grid, Button, Chip, Select, MenuItem, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material'
import React, { useState } from 'react'
import './Base.css'
import ReactPlayer from 'react-player/lazy'
import { Movies } from '../Data/Movies'
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
// import CakeIcon from '@mui/icons-material/Cake';
// import StraightenIcon from '@mui/icons-material/Straighten';
// import ScaleIcon from '@mui/icons-material/Scale';
// import Carousel from 'react-material-ui-carousel'
// import img1 from '../images/chieroscuro.png'
// import cr1 from '../images/cr1.png'
// import cr2 from '../images/cr2.png'
// import cr3 from '../images/cr3.png'
// import cr4 from '../images/cr4.png'
// import cr5 from '../images/cr5.png'
// import cr6 from '../images/cr6.png'
// import cr7 from '../images/cr7.png'
// import cr8 from '../images/cr8.png'
// import cr9 from '../images/cr9.png'
// import cr10 from '../images/cr10.png'
import NearMeIcon from '@mui/icons-material/NearMe';

const Artist = ({ choosePage }) => {
    const [videos, setVideos] = useState(Movies);
    const [count, setCount] = useState(Movies.length)
    const roles = ["All", "Actor", "Writer", "Director", "Art Assistant", "Subtitlist"];
    const [selected, setSelected] = useState("All");

    const clickFilter = (value) => {
        setSelected(value);
        if (value === 'All') {
            setVideos(Movies);
            setCount(Movies.length);
        } else {
            var sub = [];
            Movies.forEach((item) => {
                if (item.activity.match(value)) {
                    sub.push(item);
                }
            })
            setVideos(sub);
            setCount(sub.length);
        }
    }

    const clickFilterOnDrop = (e) => {
        const {
            target: { value },
        } = e;
        setSelected(typeof value === 'string' ? value.split(',') : value,);
        if (value === 'All') {
            setVideos(Movies);
            setCount(Movies.length);
        } else {
            var sub = [];
            Movies.forEach((item) => {
                if (item.activity.match(value)) {
                    sub.push(item);
                }
            })
            setVideos(sub);
            setCount(sub.length);
        }
    }

    return (
        <div className='content' style={{ display: 'flow-root' }}>
            <Typography variant='h2' className='border-content'>
                {/* style={{ color: 'cyan' }} */}
                Actor,<br /> Screenwriter,<br /> Lyricist, Director.
            </Typography>
            <Paper elevation={1} style={{
                padding: '20px',
                width: window.innerWidth <= 900 ? '83%' : 'auto',
                margin: 'auto',
            }}>
                <List
                    sx={{ width: '100%' }}
                    aria-label="notes"
                >
                    <ListItem disablePadding>
                        <ListItemIcon className='listIconArtist'>
                            <StarIcon style={{ color: 'gold' }} />
                        </ListItemIcon>
                        <ListItemText className='listTextArtist'>
                            <Typography variant='body1'>
                                <b>WORKED</b> as actor in a Malayalam feature film, many Malayalam short films and some Malayalam web serieses.
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon className='listIconArtist'>
                            <StarIcon style={{ color: 'gold' }} />
                        </ListItemIcon>
                        <ListItemText className='listTextArtist'>
                            <Typography variant='body1'>
                                <b>ASSOCIATED</b> in the direction team for some Malayalam music videos and short films.
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon className='listIconArtist'>
                            <StarIcon style={{ color: 'gold' }} />
                        </ListItemIcon>
                        <ListItemText className='listTextArtist'>
                            <Typography variant='body1'>
                                <b>WROTE</b> screenplays for some Malayalam short films.
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon className='listIconArtist'>
                            <StarIcon style={{ color: 'gold' }} />
                        </ListItemIcon>
                        <ListItemText className='listTextArtist'>
                            <Typography variant='body1'>
                                <b>WRITTEN</b> and directed a couple of Malayalam micro films.
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon className='listIconArtist'>
                            <EmojiEventsIcon style={{ color: 'gold' }} />
                        </ListItemIcon>
                        <ListItemText className='listTextArtist'>
                            <Typography variant='body1'>
                                <b>THE</b> micro film directorial "The Outsider" was selected as an official entry for "One Earth Awards - 2022".
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon className='listIconArtist'>
                            <TheaterComedyIcon style={{ color: 'gold' }} />
                        </ListItemIcon>
                        <ListItemText className='listTextArtist'>
                            <Typography variant='body1'>
                                <b>ATTENDED</b> acting workshops from ACTLAB - Actor's Training Laboratory, Cochin.
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Paper>
            <br />
            <Box sx={{ display: 'flex', flexGrow: 1, }}>
                <Grid container spacing={0.5} style={{ display: 'flow-root', padding: window.innerWidth <= 900 ? '10px' : '0px' }}>
                    <Grid item sm={window.innerWidth <= 900 ? 12 : 12} xs={12} style={{ width: '100%', float: 'left' }}>
                        <div elevation={1} style={{
                            backgroundColor: 'white',
                            paddingTop: '10px', paddingBottom: '10px',
                            borderRadius: '5px', width: '100%',
                            textAlign: 'center'
                        }}>
                            <ReactPlayer url="https://youtu.be/EufxNy0OZlA"
                                pip={true} width={'100%'} height={window.innerWidth <= 900 ? 300 : 600}
                                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                        </div>
                    </Grid>
                </Grid>
            </Box>
            {/* <Box sx={{ display: 'flex', flexGrow: 1, }}>
                <Grid container spacing={0.5} style={{ display: 'flow-root', padding: '10px' }}>
                    <Grid item sm={window.innerWidth <= 900 ? 12 : 5} xs={12} style={{
                        float: 'left',
                        width: window.innerWidth <= 900 ? '100%' : 'auto',
                    }}>
                        {window.innerWidth <= 900 ?
                            <Paper style={{
                                paddingTop: '15px', textAlign: 'center',
                                width: '100%', display: 'flow-root'
                            }} variant='elevation'>
                                <Typography variant='h6' style={{ display: 'block', color: 'rebeccapurple' }}>
                                    <CakeIcon />
                                    <h4 style={{ marginTop: '-10px' }}>08-08-1990</h4>
                                </Typography>
                                <Typography variant='h6' style={{ display: 'block', color: 'rebeccapurple' }}>
                                    <StraightenIcon />
                                    <h4 style={{ marginTop: '-10px' }}>5'4"</h4>
                                </Typography>
                                <Typography variant='h6' style={{ display: 'block', color: 'rebeccapurple' }}>
                                    <ScaleIcon />
                                    <h4 style={{ marginTop: '-10px' }}>53Kg</h4>
                                </Typography>
                            </Paper>
                            :
                            <Paper style={{
                                padding: '15px', paddingBottom: '0px', textAlign: 'center',
                                width: '100%', display: 'flow-root'
                            }} variant='elevation'>
                                <Typography variant='h6' style={{ float: 'left', marginRight: '60px', marginLeft: '30px', color: 'rebeccapurple' }}>
                                    <CakeIcon />
                                    <h2 style={{ marginTop: '-10px' }}>08-08-1990</h2>
                                </Typography>
                                <Typography variant='h6' style={{ float: 'left', marginRight: '60px', color: 'rebeccapurple' }}>
                                    <StraightenIcon />
                                    <h2 style={{ marginTop: '-10px' }}>5'4"</h2>
                                </Typography>
                                <Typography variant='h6' style={{ float: 'left', marginRight: '20px', color: 'rebeccapurple' }}>
                                    <ScaleIcon />
                                    <h2 style={{ marginTop: '-10px' }}>53Kg</h2>
                                </Typography>
                            </Paper>
                        }
                        <br />
                        <Paper style={{
                            textAlign: 'center',
                            width: window.innerWidth <= 900 ? '100%' : '106%'
                        }} variant='elevation'>
                            <Carousel fullHeightHover={false} indicators={false} navButtonsAlwaysVisible={true}
                                height={'350px'} style={{ borderRadius: '5px' }}>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={img1} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr1} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr2} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr3} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr4} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr5} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr6} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr7} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr8} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr9} alt='MSM' style={{ height: '100%' }} />
                                </div>
                                <div style={{ height: '100%', width: '100%', borderRadius: '5px' }}>
                                    <img src={cr10} alt='MSM' style={{ height: '100%' }} />
                                </div>
                            </Carousel>
                        </Paper>
                    </Grid>
                </Grid>
            </Box> */}
            <Box sx={{ display: 'flex', flexGrow: 1, }}>
                <Grid container spacing={1}>
                    <Grid item sm={12} xs={12}>
                        <div style={{
                            width: '95%', paddingTop: '15px', paddingBottom: '10px',
                            display: 'block',
                            textAlign: 'left',
                            paddingLeft: window.innerWidth <= 900 ? '10px' : '0px'
                        }}>
                            {
                                window.innerWidth <= 900 ?
                                    <div>
                                        <Select value={selected} variant='outlined'
                                            color='primary' onChange={clickFilterOnDrop} size='small'
                                            style={{
                                                backgroundColor: '#1976d2',
                                                color: 'white', fontWeight: 'bolder',
                                                borderColor: 'white', width: '150px'
                                            }}>
                                            {roles.map((item, _) => {
                                                return <MenuItem
                                                    key={item}
                                                    value={item}
                                                >{item}</MenuItem>
                                            })}
                                        </Select>
                                        <Chip variant='filled' color='info' size='medium'
                                            style={{ color: 'white', fontWeight: 'bold', float: 'right', marginTop: '2px' }}
                                            label={count + " Movie(s)"} />

                                    </div>
                                    :
                                    roles.map((value, index) => {
                                        return <Button variant={selected === value ? 'contained' : 'outlined'} key={index}
                                            onClick={() => clickFilter(value)}
                                            color={selected === value ? 'primary' : 'secondary'}
                                            style={{
                                                marginRight: '10px', fontWeight: 'bold',
                                                color: (selected === value) ? 'white' : '#1B1F3B',
                                                backgroundColor: (selected === value) ? '#1976d2' : 'cyan',
                                                border: '0px'
                                            }}
                                            size={window.innerWidth <= 900 ? "small" : ""}>
                                            {value}&nbsp;
                                            {selected === value ?
                                                <Chip variant='outlined' size='small'
                                                    style={{ color: 'whitesmoke', fontWeight: 'bold' }}
                                                    label={count} />
                                                : ""
                                            }
                                        </Button>
                                    })
                            }
                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12} style={{ paddingLeft: window.innerWidth <= 900 ? '10px' : '0px' }}>
                        <div className='workList' style={{ textAlign: 'center' }}>
                            {
                                videos.map((value, index) => {
                                    return <Card elevation={1} className='art-card' key={index}>
                                        <CardMedia>
                                            <ReactPlayer url={value.url} pip={true} height={200} width={'100%'} />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" style={{ color: 'black' }}>
                                                {value.title}
                                            </Typography>
                                            <Typography variant="overline" style={{ color: 'darkturquoise', }}>
                                                <b>{value.contentType}</b> <br />
                                                <b>{value.activity}</b> <br />
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                })
                            }
                            <Card elevation={0} sx={{
                                width: '95%',
                                textAlign: 'left',

                            }}>
                                <div style={{ padding: '20px' }}>
                                    <TheaterComedyIcon style={{ fontSize: '40px' }} />
                                    <Typography variant='h6'>
                                        Are you in search of an actor?<br />
                                        Are you in need of the lines for your musical?<br />
                                        Are you looking for help in writing the screenplay of your dream project?<br />
                                    </Typography>
                                    <br />
                                    <Typography variant='h6'>
                                        <Button variant='outlined'
                                            style={{ color: '#1B1F3B', borderColor: '#1B1F3B', float: 'right' }}
                                            onClick={() => choosePage('contact',
                                                window.innerWidth <= 900 ? true : false,
                                                'artrequest')}>LET'S TALK&nbsp;&nbsp;<NearMeIcon /></Button>
                                        <br />
                                    </Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default Artist