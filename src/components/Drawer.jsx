import React, { useState } from 'react';
import { Button, SwipeableDrawer } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { List, ListItem, ListItemText, Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import {ExpandMore} from '@mui/icons-material';


const Drawer = ({toggleDrawer, buttonStyle}) => {

    const textStyle = {
        color: 'hsl(0, 0%, 41%)'
    }

    const textItemStyle = {
        ...textStyle,
        paddingLeft: '18px'
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: 'hsl(0, 0%, 41%)'
            }
        },
    });

    return (
        <Box
        sx={{ width: '250px' }}
        role="presentation"
        >
            <List sx={{width: '100%'}}>
            <button onClick={toggleDrawer(false)} style={buttonStyle}><img src="images/icon-close-menu.svg" alt="icon-close-menu"></img></button>
            <ListItem sx={{ m: 0, p: 0}}>
                <Accordion elevation={0}>
                    <AccordionSummary
                    expandIcon={<ExpandMore></ExpandMore>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{m: 0, p: 0}}>Features</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography component={'span'}>
                        <List>
                            <ListItem>
                                <ListItemText><img src="images/icon-todo.svg" alt="icon-todo"></img> Todo List</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText><img src="images/icon-calendar.svg" alt="icon-calendar"></img> Calendar</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText><img src="images/icon-reminders.svg" alt="icon-reminders"></img> Reminders</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText><img src="images/icon-planning.svg" alt="icon-planning"></img> Planning</ListItemText>
                            </ListItem>
                        </List>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </ListItem>
            <ListItem sx={{ m: 0, p: 0}}>
                <Accordion elevation={0}>
                    <AccordionSummary
                    expandIcon={<ExpandMore></ExpandMore>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{m: 0, p: 0}}>Company</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography component={'span'}>
                        <List>
                            <ListItem>
                                <ListItemText>History</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Our Team</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Blog</ListItemText>
                            </ListItem>
                        </List>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </ListItem>
            <ListItem className="list-item" sx={{ m: 0, pt: 1, pl: 0, cursor: 'pointer' }}>
                <ListItemText primary='Careers' sx={textItemStyle}/>
            </ListItem>
            <ListItem className="list-item" sx={{ m: 0, pt: 1, pl: 0, cursor: 'pointer'}}>
                <ListItemText primary='About' sx={textItemStyle}/>
            </ListItem>
            <Box 
            textAlign="center"
            sx={{pl: 6}}   
            >
                <ListItem className="list-item" sx={{ m: 0, pt: 1, pl: 4, cursor: 'pointer'}}>
                <ListItemText primary='Login' sx={textItemStyle}/>
                </ListItem>
                <ListItem className="list-item-button">
                    <ThemeProvider theme={theme}>
                        <Button className="register" 
                        sx={{width: '120px',
                        height: '40px',
                        fontSize: '14px',
                        borderRadius: '10px',
                        backgroundColor: 'hsl(0, 0%, 98%)',
                        border: '2px solid hsl(0, 0%, 41%)',
                        color: 'hsl(0, 0%, 41%)',
                        ":hover": {
                            color: 'hsl(0, 0%, 8%)',
                            border: '2px solid hsl(0, 0%, 8%)'
                        }
                    }}>
                        Register</Button>
                    </ThemeProvider>
                </ListItem>
            </Box>
            </List>
        </Box>
    )
}

const DrawerComponent = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setOpen(open);
    };

    const buttonStyle = {
        width: 'auto',
        height: 'auto',
        border: 'none',
        cursor: 'pointer',
        float: 'right',
        padding: '10px',
        backgroundColor: 'white'
    }

    return (
        <div id='drawer'>
            <button onClick={toggleDrawer(true)} id="icon-menu"><img src="images/icon-menu.svg" alt="icon-menu"></img></button>
            <SwipeableDrawer
            anchor='right'
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            >
                <Drawer toggleDrawer={toggleDrawer} buttonStyle={buttonStyle}></Drawer>
            </SwipeableDrawer>
        </div>
    );
};


export default DrawerComponent;
