import { Typography, Card, CardMedia, CardContent, Box, Grid, Button, Chip } from '@mui/material'
import React, { useState } from 'react'
import './Base.css'
import ReactPlayer from 'react-player/lazy'
import { Movies } from '../Data/Movies'

const Artist = () => {
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

    return (
        <div className='content' style={{ display: 'flow-root', padding: '0px' }}>
            <Box sx={{
                display: 'flex', flexGrow: 1, backgroundColor: 'lavender',
                borderTopLeftRadius: '5px', borderTopRightRadius: '5px'
            }}>
                <Grid container spacing={0.5} style={{ display: 'flow-root', padding: '10px' }}>
                    <Grid item xs={6} style={{ minWidth: '500px', float: 'left' }}>
                        <div style={{
                            backgroundColor: '#1B1F3B', paddingTop: '10px', paddingBottom: '10px',
                            borderRadius: '10px', width: '100%'
                        }}>
                            <ReactPlayer url="https://youtu.be/EufxNy0OZlA"
                                pip={true} width={'100%'}
                                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ float: 'left' }}>
                        <Typography variant='h2' className='border-content' style={{ fontSize: '75px' }}>
                            Actor, Screenwriter, Lyricist, Director.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    width: '100%', paddingTop: '5px', paddingBottom: '10px',
                    display: 'block',
                    backgroundColor: 'lightcyan',
                }}>
                    <Typography variant="h3" style={{display: 'inline-block'}}>Videos &nbsp;</Typography>
                    {
                        roles.map((value, index) => {
                            return <Button variant={selected === value ? 'contained' : 'outlined'} key={index}
                                onClick={() => clickFilter(value)}
                                color={selected === value ? 'primary' : 'secondary'}
                                style={{ marginRight: '10px', marginTop: '-20px' }}>
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
                <div style={{ width: '100%', display: 'block', padding: '10px', paddingLeft: '50px' }}>
                    {
                        videos.map((value, index) => {
                            return <Card sx={{
                                maxWidth: 300, marginRight: '15px', marginBottom: '15px',
                                backgroundColor: '#1B1F3B', color: 'whitesmoke', float: 'left', textAlign: 'left'
                            }} key={index}>
                                <CardMedia>
                                    <ReactPlayer url={value.url} pip={true} height={200} width={'100%'} />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
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
                </div>
            </div>
        </div >
    )
}

export default Artist