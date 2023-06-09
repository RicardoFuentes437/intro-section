import React, { useState, useEffect } from 'react';
import ItemMenu from './ItemMenu';

import '../styles/navbar/navbarStyles.css';
import DrawerComponent from './Drawer';

const Navbar = () => {

    const [isMobile, setMobile] = useState(window.innerWidth <= 800 ? true : false);

    const elements1 = [{ icon: 'images/icon-todo.svg', name: 'Todo List'},
                    {icon: 'images/icon-calendar.svg', name: 'Calendar'},
                    {icon: 'images/icon-reminders.svg', name: 'Reminders'},
                    {icon: 'images/icon-planning.svg', name: 'Planning'}];

    const elements2 = [{name: 'History'}, {name: 'Our Team'}, {name: 'Blog'}];

    useEffect(() => {
        const handleWindowResize = () => {
            if(window.innerWidth <= 800){
                setMobile(true);
            }

            if(window.innerWidth > 800){
                setMobile(false);
            }
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div id="navbar">
                <div id="logo-section"><img src="images/logo.svg" alt="logo" id="page-logo"></img></div>
                { isMobile ? 
                <DrawerComponent></DrawerComponent> :
                <div id="navbar-main-content">
                    <div id="navbar-left-section">
                        <ul id="navbar-items">
                            <ItemMenu name="Feature" elements={elements1}></ItemMenu>
                            <ItemMenu name="Company" elements={elements2}></ItemMenu>
                            <li className='regular-elements'>Careers</li>
                            <li className='regular-elements'>About</li>
                        </ul>
                    </div>
                    <div id="navbar-right-section">
                        <a href="#" id="login">Login</a>
                        <button className="register">Register</button>
                    </div>
                </div>
                }
        </div>
    );
};

export default Navbar;
