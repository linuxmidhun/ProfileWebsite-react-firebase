import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { Box, Button, Card, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import { isEmpty, validateForm } from '../Common/Methods';
import NearMeIcon from '@mui/icons-material/NearMe';
import SupportIcon from '@mui/icons-material/Support';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const ArtRequest = () => {
    const [searchParams] = useSearchParams();
    const [contactType, setContactType] = useState('General');
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState('');
    const [request, setRequest] = useState({ contact_type: '', from_name: "", from_email: "", from_phone: "", message: "" });
    const [validation, setValidation] = useState({  from_name: '', from_email: '', from_phone: '', message: '' });
    //handle submit updates
    function handleChange(event) {
        const { name, value } = event.target;
        setRequest({ ...request, [name]: value });
        setMessage('');
    }
    const checkValidation = () => {
        let errors = validation;
        errors.from_name = isEmpty(request.from_name) ? "Name is required" : "";
        errors.from_email = isEmpty(request.from_email) ? "Email is required" : "";
        // errors.from_phone = isEmpty(request.from_phone) ? "Phone number is required" : "";
        errors.message = isEmpty(request.message) ? "Message is required" : "";
        setValidation(errors);
    }

    // const delay = ms => new Promise(
    //     resolve => setTimeout(resolve, ms)
    // );

    const sendArtRequest = () => {
        checkValidation();
        setMessage('');
        setSubmitted(true);
        request.contact_type = contactType;
        if (validateForm(validation)) {
            emailjs.send('service_y763b09', 'template_q8g9nif', request, 'bG9eiaM7_CJDqQYVQ')
                .then((_) => {
                    setMessage("Thank You for your message.");
                    setSubmitted(false);
                    // console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    setMessage("Sorry, but there was a problem sending the message. Please try again later.");
                    console.log('FAILED...', err);
                    setSubmitted(false);
                });
            // await delay(500);            
        } else {
            // await delay(500);
            setMessage("Please check the errors.");
            setSubmitted(false);
        }

    }

    useEffect(() => {
        if (searchParams.has('ct')) {
            setContactType(searchParams.get('ct'));
        } else {
            setContactType('General');
        }
    }, [searchParams, contactType, setContactType]);

    return (
        <div>
            <Typography variant={window.innerWidth <= 900 ? 'h2' : 'h1'} className='oneLine1' style={{ paddingBottom: '30px', }}>
                How may{window.innerWidth <= 900 ? <br /> : <>&nbsp;</>}I help you?
            </Typography>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sm={window.innerWidth <= 900 ? 12 : 6} xs={12} style={{
                        padding: window.innerWidth <= 900 ? '10px' : '50px',
                        paddingLeft: window.innerWidth <= 900 ? '25px' : '35px'
                    }}>
                        <List
                            sx={{ width: '100%' }}
                            aria-label="contacts"
                        >
                            <ListItem disablePadding>
                                <ListItemIcon className='listIcon'>
                                    <SupportIcon size='small' style={{ color: 'white' }} />                                {/* color: '#04032a' */}
                                </ListItemIcon>
                                <ListItemText className='listText'>
                                    <Typography variant='h4'>
                                        Want my assistance in something?
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className='listIcon'>
                                    <ImportantDevicesIcon size='small' style={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText className='listText'>
                                    <Typography variant='h4'>
                                        Do you want me to make a software or a website for you?
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className='listIcon'>
                                    <MovieCreationIcon size='small' style={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText className='listText'>
                                    <Typography variant='h4'>
                                        Do you want me to be a part in your next movie?
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={window.innerWidth <= 900 ? 12 : 6} xs={12}
                        style={{
                            padding: window.innerWidth <= 900 ? '10px' : '20px',
                            paddingLeft: window.innerWidth <= 900 ? '25px' : '0px',
                        }}>
                        <Card elevation={4} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#7481e2' }}>
                            <TextField label='Name' name='from_name' variant='filled'
                                style={{ width: '100%', backgroundColor: 'white', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                                onChange={(e) => handleChange(e)} value={request.from_name} helperText={validation.from_name} /><br /><br />
                            <TextField label='Email' name='from_email' variant='filled'
                                style={{ width: '100%', backgroundColor: 'white', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                                onChange={(e) => handleChange(e)} value={request.from_email} helperText={validation.from_email} /><br /><br />
                            <TextField label='Phone' name='from_phone' variant='filled'
                                style={{ width: '100%', backgroundColor: 'white', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                                onChange={(e) => handleChange(e)} value={request.from_phone} helperText={validation.from_phone} /><br /><br />
                            <TextField multiline rows={5} label='Message' name='message' variant='filled'
                                style={{ width: '100%', backgroundColor: 'white', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                                error={(!isEmpty(validation.message) && submitted) ? true : false}
                                onChange={(e) => handleChange(e)} value={request.message} helperText={validation.message} /><br /><br />
                            <Typography variant='body2' style={{ width: '100%' }}>{message}</Typography>
                            <Button variant='contained' color='success'
                                style={{ float: 'right' }}
                                onClick={() => sendArtRequest()} disabled={submitted}>
                                {submitted ? "Sending..." : "Send"}<NearMeIcon /></Button>&nbsp;
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ArtRequest