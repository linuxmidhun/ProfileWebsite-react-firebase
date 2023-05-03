import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import './Base.css'
import ConvolveLogo from '../images/ConvolveLogo.png'
import NudesicLogo from '../images/NeudesicLogo.png'
import RoutematicLogo from '../images/RoutematicLogo.png'
import IsletLogo from '../images/IsletLogo.png'
import MvoLogo from '../images/MvoLogo.png'
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConstructionIcon from '@mui/icons-material/Construction';
import NearMeIcon from '@mui/icons-material/NearMe';
import LaunchIcon from '@mui/icons-material/Launch';

const Techie = ({ choosePage }) => {
    return (
        <div className='content' style={{ display: 'flow-root', paddingBottom: '20px' }}>
            <Typography variant='h2' className='border-content' >
                {/* Senior<br />Software<br />Engineer */}
                Developer,<br />
                Software Engineer,<br />
                Technology Trainer.
            </Typography>
            {/* // , padding: window.innerWidth <= 900 ? '10px' : '20px', paddingTop: '10px', paddingBottom: '10px' }}> */}
            <div style={{ width: '100%', display: 'block' }}>
                {/* <Typography variant='h1' className='border-content'>
                    Senior<br />Software<br />Engineer
                </Typography> */}
                <Typography variant='overline' style={{
                    display: 'block',
                    // paddingBottom: window.innerWidth <= 900 ? '0px' : '0px',
                    paddingLeft: window.innerWidth <= 900 ? '15px' : '10px'
                }}>
                    Experience in designing and developing software for business solutions.
                </Typography>
            </div>
            {window.innerWidth <= 900 ? '' : <br />}
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12}>
                        <Paper variant='elevation' style={{
                            // backgroundColor: '#04032a',
                            padding: '20px', color: 'whitesmoke', marginBottom: '20px',
                            width: window.innerWidth <= 900 ? '83%' : 'auto',
                            // borderRadius: window.innerWidth <= 900 ? '0px' : '10px',
                            margin: 'auto'
                        }}>
                            <Typography variant={window.innerWidth <= 900 ? 'body1' : 'h6'}
                                style={{
                                    paddingBottom: '10px', color: '#04032a',
                                    textAlign: window.innerWidth <= 900 ? 'left' : 'justify'
                                }}>
                                Over a decade of experience in designing and developing software solutions using Microsoft technology stack and other open-source technologies, mostly for transportation and logistics vertical. Experienced in working with various feature areas of .NET, .NET Core, MVC, WebAPI, JavaScript and Angular/React.js/React-Native.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <br />
            <Typography variant='h3' style={{ padding: '10px', paddingBottom: '0px' }}>
                {/* , color: 'silver' */}
                <ConstructionIcon fontSize='large' />&nbsp;Tech Stack
            </Typography>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12}>
                        <Paper variant='elevation' style={{
                            // backgroundColor: '#04032a',
                            padding: '20px', color: 'whitesmoke', marginBottom: '20px',
                            width: window.innerWidth <= 900 ? '83%' : 'auto',
                            // borderRadius: window.innerWidth <= 900 ? '0px' : '10px',
                            margin: 'auto'
                        }}>
                            {/* <Stack direction="row" spacing={1}> */}
                            <Box sx={{ display: 'flex', flexGrow: 1, color: '#04032a' }}>
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <Typography className='chip'>
                                            Programming Languages:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>C#, VB.NET, Go Lang</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Frameworks:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>.NET, .NET Core</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            RDBMS:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>SQL Server, MySQL</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            NoSQL DBMS:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>Cassandra</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            In-Memory Data Store:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>Redis</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            ORM:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>Dapper, ADO.Net</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Web Server Technologies:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>ASP.NET, ASP.NET Core, ASP.NET MVC, ASP.NET Core MVC, ASP.NET Web API</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Web Client Technologies:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>JavaScript, jQuery, HTML5/CSS3, Bootstrap, react.js, d3.js, Angular</b>.
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <Typography className='chip'>
                                            Mobile Client Technologies:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>React-Native (Expo)</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Cloud Technologies:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>AWS, Azure</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Stream-Processing Technologies:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>Apache Kafka</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Load Balancer:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>Nginx</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Containerization Technologies:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>Docker, Kubernetes</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Version Control System:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>SVN, Git, TFS, Bit Bucket</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Scripting:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>PowerShell</b>.
                                        </Typography>
                                        <Typography className='chip'>
                                            Other Utilities &amp; Tools:
                                            {window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}
                                            <b>Postman, Swagger UI</b>.
                                        </Typography>
                                        {/* </Stack> */}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant='h3' style={{ padding: '10px', paddingBottom: '10px' }}>
                {/* , color: 'silver' */}
                <WorkHistoryTwoToneIcon fontSize='large' />&nbsp;Career History
            </Typography>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <Paper variant='elevation' className='company' style={{
                            minHeight: window.innerWidth <= 900 ? 'auto' : '420px',
                            width: window.innerWidth <= 900 ? '83%' : 'auto',
                            margin: 'auto'
                        }}>
                            {window.innerWidth <= 900 ?
                                <Grid container spacing={2}>
                                    <Grid item sm={12} xs={12}>
                                        <img src={ConvolveLogo} alt='Convolve' />
                                        <Typography variant='h6' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            CONVOLVE TECHNOLOGIES&nbsp;&nbsp;<a href='https://in.linkedin.com/company/convolve-technologies' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Dec 2018 – Jun 2020.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>SENIOR CONSULTANT (Contract).</Typography>
                                    </Grid>
                                </Grid>
                                :
                                <Grid container spacing={2}>
                                    <Grid item sm={8} xs={12}>
                                        <Typography variant='h6' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            CONVOLVE TECHNOLOGIES&nbsp;&nbsp;<a href='https://in.linkedin.com/company/convolve-technologies' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Dec 2018 – Jun 2020.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>SENIOR CONSULTANT (Contract).</Typography>
                                    </Grid>
                                    <Grid item sm={4} xs={12}>
                                        <img src={ConvolveLogo} alt='Convolve' style={{ marginTop: window.innerWidth <= 900 ? '0px' : '-5px', float: 'right' }} />
                                    </Grid>
                                </Grid>
                            }
                            <Grid container spacing={2}>
                                <Grid item sm={12} xs={12}>
                                    <List
                                        sx={{ width: '100%' }}
                                        aria-label="contacts"
                                    >
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                                {/* color: '#04032a' */}
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>ARCHITECTING</b> end-to-end software solutions based on client requirements.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>TEAM MANAGEMENT</b> and responsible for overall delivery of the software project.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>COST ANALYSIS</b> and quoting for the development requirements.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DEVELOPMENT</b> efforts.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Paper variant='elevation' className='company' style={{
                            minHeight: window.innerWidth <= 900 ? 'auto' : '420px',
                            width: window.innerWidth <= 900 ? '83%' : 'auto',
                            margin: 'auto'
                        }}>
                            {window.innerWidth <= 900 ?
                                <Grid container spacing={2}>
                                    <Grid item sm={12} xs={12}>
                                        <img src={NudesicLogo} alt='Nudesic' />
                                        <Typography variant='h6' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            NEUDESIC LLC&nbsp;&nbsp;<a href='https://www.neudesic.com/' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Dec 2018 – Jun 2020.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>SENIOR CONSULTANT.</Typography>
                                    </Grid>
                                </Grid>
                                :
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <Typography variant='h6' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            NEUDESIC LLC&nbsp;&nbsp;<a href='https://www.neudesic.com/' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Dec 2018 – Jun 2020.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>SENIOR CONSULTANT.</Typography>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <img src={NudesicLogo} alt='Nudesic' style={{ marginTop: window.innerWidth <= 900 ? '0px' : '-5px', float: 'right' }} />
                                    </Grid>
                                </Grid>
                            }
                            <Grid container spacing={2}>
                                <Grid item sm={12} xs={12} style={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: window.innerWidth <= 900 ? 'auto' : '280px'
                                }}>
                                    <List
                                        sx={{ width: '100%' }}
                                        aria-label="contacts"
                                    >
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>COLLECTING</b> and analyzing requirements from clients to define the work schedule and technology definitions.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DESIGNING</b> and DEVELOPING different aspects of features in the requested application software.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Paper variant='elevation' className='company' style={{
                            minHeight: window.innerWidth <= 900 ? 'auto' : '420px',
                            width: window.innerWidth <= 900 ? '83%' : 'auto',
                            margin: 'auto'
                        }}>
                            {window.innerWidth <= 900 ?
                                <Grid container spacing={2}>
                                    <Grid item sm={12} xs={12}>
                                        <img src={RoutematicLogo} alt='Routematic' />
                                        <Typography variant='h6' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            ROUTEMATIC&nbsp;&nbsp;<a href='https://www.routematic.com/' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>
                                            Bengaluru, Karnataka.
                                        </Typography>
                                        <Typography variant='overline'>Nov 2015 – Aug 2018.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>PRODUCT ENGINEER.</Typography>
                                    </Grid>
                                </Grid>
                                :
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <Typography variant='h6' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            ROUTEMATIC&nbsp;&nbsp;<a href='https://www.routematic.com/' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>
                                            Bengaluru, Karnataka.
                                        </Typography>
                                        <Typography variant='overline'>Nov 2015 – Aug 2018.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>PRODUCT ENGINEER.</Typography>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <img src={RoutematicLogo} alt='Routematic' style={{ marginTop: window.innerWidth <= 900 ? '0px' : '-5px', float: 'right' }} />
                                    </Grid>
                                </Grid>
                            }
                            <Grid container spacing={2}>
                                <Grid item sm={12} xs={12} style={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: window.innerWidth <= 900 ? 'auto' : '280px'
                                }}>
                                    <List
                                        sx={{ width: '100%' }}
                                        aria-label="contacts"
                                    >
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DEVELOPING</b> web applications, Web APIs and Microservices using C#, ASP.NET MVC.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>SUPPORTING</b> releases and DevOps.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Paper variant='elevation' className='company' style={{
                            minHeight: window.innerWidth <= 900 ? 'auto' : '420px',
                            width: window.innerWidth <= 900 ? '83%' : 'auto',
                            margin: 'auto'
                        }}>
                            <Grid container spacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <Typography variant='h5' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                        F6 ANIMATIONS&nbsp;&nbsp;<LaunchIcon style={{ cursor: 'pointer' }} />
                                    </Typography>
                                    <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                        Ernakulam, Kerala.
                                    </Typography>
                                    <Typography variant='overline'>Sep 2014 – Nov 2015.</Typography>
                                    <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>TECHNICAL LEAD.</Typography>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    {/* <img src={IsletLogo} alt='Islet' style={{ marginTop: window.innerWidth <= 900 ? '0px' : '-5px' }} /> */}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item sm={12} xs={12} style={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: window.innerWidth <= 900 ? 'auto' : '300px'
                                }}>
                                    <List
                                        sx={{ width: '100%' }}
                                        aria-label="contacts"
                                    >
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DESIGNING</b> and developing small scale custom applications.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>SUPPORTING</b> releases and DevOps.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>LEADING</b> a small team of developers.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Paper variant='elevation' className='company' style={{
                            minHeight: window.innerWidth <= 900 ? 'auto' : '425px',
                            width: window.innerWidth <= 900 ? '83%' : 'auto',
                            margin: 'auto'
                        }}>
                            {window.innerWidth <= 900 ?
                                <Grid container spacing={2}>
                                    <Grid item sm={12} xs={12}>
                                        <img src={IsletLogo} alt='Islet' style={{ background: 'black', padding: '10px', borderRadius: '10px' }} />
                                        <Typography variant='h5' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            ISLET SYSTEMS&nbsp;&nbsp;<a href='https://www.isletsystems.com/' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Aug 2014 – Sep 2014.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>Sr. SOFTWARE ENGINEER</Typography>
                                    </Grid>
                                </Grid>
                                :
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <Typography variant='h5' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            ISLET SYSTEMS&nbsp;&nbsp;<a href='https://www.isletsystems.com/' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Aug 2014 – Sep 2014.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>Sr. SOFTWARE ENGINEER</Typography>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <img src={IsletLogo} alt='Islet' style={{ marginTop: window.innerWidth <= 900 ? '0px' : '-5px', float: 'right', backgroundColor: 'black', padding: '10px', borderRadius: '10px' }} />
                                    </Grid>
                                </Grid>
                            }
                            <Grid container spacing={2}>
                                <Grid item sm={12} xs={12} style={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: window.innerWidth <= 900 ? 'auto' : '280px'
                                }}>
                                    <List
                                        sx={{ width: '100%' }}
                                        aria-label="contacts"
                                    >
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DESIGNING</b> and developing web application using C# and ASP.NET MVC.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>TRAINING</b> the developer’s team in ASP.NET MVC and C#.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Paper variant='elevation' className='company' style={{
                            minHeight: window.innerWidth <= 900 ? 'auto' : '420px',
                            width: window.innerWidth <= 900 ? '83%' : 'auto',
                            margin: 'auto'
                        }}>
                            {window.innerWidth <= 900 ?
                                <Grid container spacing={2}>
                                    <Grid item sm={12} xs={12}>
                                        <img src={IsletLogo} alt='Islet' style={{ backgroundColor: 'black', padding: '10px', borderRadius: '10px' }} />
                                        <Typography variant='h5' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            ISLET SYSTEMS&nbsp;&nbsp;<a href='https://www.isletsystems.com/' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Jun 2011 – Jun 2014.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>Sr. SOFTWARE ENGINEER</Typography>
                                    </Grid>
                                </Grid>
                                :
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <Typography variant='h5' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            ISLET SYSTEMS&nbsp;&nbsp;<a href='https://www.isletsystems.com/' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Jun 2011 – Jun 2014.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>Sr. SOFTWARE ENGINEER</Typography>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <img src={IsletLogo} alt='Islet' style={{ marginTop: window.innerWidth <= 900 ? '0px' : '-5px', float: 'right', backgroundColor: 'black', padding: '10px', borderRadius: '10px' }} />
                                    </Grid>
                                </Grid>
                            }
                            <Grid container spacing={2}>
                                <Grid item sm={12} xs={12}>
                                    <List
                                        sx={{ width: '100%' }}
                                        aria-label="contacts"
                                    >
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>ANALYZING</b> customer requirements for custom web/desktop applications.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DEVELOPING</b> web applications using C#/VB.NET and ASP.NET/ASP.NET MVC.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DEVELOPING</b> desktop applications using Windows Forms/WPF.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DEVELOPING</b> Windows mobile applications using Silverlight.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Paper variant='elevation' className='company' style={{
                            minHeight: window.innerWidth <= 900 ? 'auto' : '420px',
                            width: window.innerWidth <= 900 ? '83%' : 'auto',
                            margin: 'auto'
                        }}>
                            {window.innerWidth <= 900 ?
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <img src={MvoLogo} alt='MVO' />
                                        <Typography variant='body1' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            MVO TECHNOLOGIES&nbsp;&nbsp;<a href='https://www.justdial.com/jdmart/Ernakulam/Mvo-Technologies-Services-Pvt-Ltd-closed-Closed-Down-Piravom/0484PX484-X484-140309140853-S2A2_BZDET/catalogue?bc=0&flow=&pid=&type=' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Apr 2010 – Feb 2011.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>JUNIOR PROGRAMMER.</Typography>
                                    </Grid>
                                </Grid>
                                :
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <Typography variant='body1' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            MVO TECHNOLOGIES&nbsp;&nbsp;<a href='https://www.justdial.com/jdmart/Ernakulam/Mvo-Technologies-Services-Pvt-Ltd-closed-Closed-Down-Piravom/0484PX484-X484-140309140853-S2A2_BZDET/catalogue?bc=0&flow=&pid=&type=' target='_blank' rel='noreferrer'><LaunchIcon /></a>
                                        </Typography>
                                        <Typography variant='body2' style={{ color: '#3F599E', fontWeight: 'bolder' }}>
                                            Ernakulam, Kerala.
                                        </Typography>
                                        <Typography variant='overline'>Apr 2010 – Feb 2011.</Typography>
                                        <Typography variant='body2' style={{ fontWeight: 'bold', color: '#4460AA' }}>JUNIOR PROGRAMMER.</Typography>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <img src={MvoLogo} alt='MVO' style={{ marginTop: window.innerWidth <= 900 ? '0px' : '-5px', float: 'right' }} />
                                    </Grid>
                                </Grid>
                            }
                            <Grid container spacing={2}>
                                <Grid item sm={12} xs={12} style={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: window.innerWidth <= 900 ? 'auto' : '280px'
                                }}>
                                    <List
                                        sx={{ width: '100%' }}
                                        aria-label="contacts"
                                    >
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DEVELOPING</b> Web applications using C# and ASP.NET.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon className='listIcon'>
                                                <TaskAltTwoToneIcon size='small' style={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText className='listText'>
                                                <Typography variant='body1'>
                                                    <b>DEVELOPING</b> desktop applications using Windows Forms and C#.
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <Paper variant='elevation' elevation={0} className='company' style={{
                            // minHeight: window.innerWidth <= 900 ? 'auto' : '420px',
                            // width: window.innerWidth <= 900 ? '83%' : 'auto',
                            textAlign: 'left',
                            margin: 'auto'
                        }}>
                            <div style={{ width: '100%', height: '100%', marginLeft: 0, marginRight: 0 }}>
                                <EngineeringIcon style={{ fontSize: '40px' }} />
                                <Typography variant='h6'>
                                    Are you looking to expand your technology team? <br />
                                    Are you looking for someone to build your software or website?<br /><br />
                                    <Button variant='outlined'
                                        style={{ color: '#1B1F3B', borderColor: '#1B1F3B', float: 'right', bottom: '0px' }}
                                        onClick={() => choosePage('contact',
                                            window.innerWidth <= 900 ? true : false,
                                            'techrequest')}>LET'S TALK&nbsp;&nbsp;<NearMeIcon /></Button>
                                    <br />
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Techie