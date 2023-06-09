import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const ItemMenu = ({name, elements}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: 'hsl(0, 0%, 41%)'
            }
        },
    });

    return (
        <li>
            <ThemeProvider theme={theme}>
                <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx = {{
                    fontSize: '18px',
                    width: 'fit-content',
                    height: 'fit-content',
                    padding: 0,
                    margin: 0,
                    textTransform: 'capitalize',
                    fontFamily: 'Epilogue',
                    ":hover": {
                        color: 'hsl(0, 0%, 8%)'
                    }
                }}
                >
                {name}
                <img src={open ? 'images/icon-arrow-up.svg' : 'images/icon-arrow-down.svg'} alt="arrow-icon" className='arrow-icon'></img>
                </Button>
            </ThemeProvider>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >   
                {elements.map(elem => {
                    return <MenuItem key={elem.name} onClick={handleClose}>
                    {elem.icon ? <img src={elem.icon} alt='icon' className='menu-item-icon'></img> : null}
                    {elem.name}
                    </MenuItem>
                })}
            </Menu>
        </li>
    );
};


ItemMenu.propTypes = {
    name: PropTypes.string.isRequired,
    elements: PropTypes.array.isRequired
};


export default ItemMenu;
