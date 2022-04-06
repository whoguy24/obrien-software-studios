///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    const navigate = useNavigate();

    const [height, setHeight] = useState(document.body.clientHeight);
    const [width, setWidth] = useState(document.body.clientWidth);

    const [drawerActive, setDrawerActive] = useState(false);

    function handleContentSizeChange() {
        setHeight(document.body.clientHeight)
        setWidth(document.body.clientWidth)
    }

    window.addEventListener('resize', handleContentSizeChange)

    function handleNavClick(path) {
        navigate(path)
        setDrawerActive(false)
    }

    // Render DOM
    return (
        <div>

            { width > 850 ?

                <div className="navigation-header">

                    <div className="navigation-links-left">
                        <Button variant="text" onClick={()=>handleNavClick('/skills')}>Skills</Button>
                        <Button variant="text" onClick={()=>handleNavClick('/education')}>Education</Button>
                        <Button variant="text" onClick={()=>handleNavClick('/projects')}>Projects</Button>
                    </div>  

                    <img className='navigation-header-logo' src="logo_white.png" alt="logo" onClick={()=>handleNavClick('/home')}/>

                    <div className="navigation-links-right">
                        <Button variant="text" onClick={()=>handleNavClick('/about')}>About</Button>
                        <Button variant="text" onClick={()=>handleNavClick('/faq')}>FAQ</Button>
                        <Button variant="text" onClick={()=>handleNavClick('/contact')}>Contact</Button>
                    </div>

                </div>

            :

                <div className="navigation-header-mobile">

                    <div className='navigation-placeholder'>
                    </div>

                    <img className='navigation-header-logo' src="logo_white.png" alt="logo" onClick={()=>navigate('/home')}/>

                    <IconButton className='navigation-menu-button' onClick={()=>setDrawerActive(!drawerActive)}>
                        <MenuIcon className='navigation-menu-button-icon'/>
                    </IconButton>

                </div>

            }

            <Drawer variant="temporary" open={drawerActive} onClose={()=>setDrawerActive(false)} anchor={'bottom'}>

                <List className='navigation-menu-list'>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>handleNavClick('/skills')}>
                            <ListItemText primary="Skills" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>handleNavClick('/education')}>
                            <ListItemText primary="Education" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>handleNavClick('/projects')}>
                            <ListItemText primary="Projects" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>handleNavClick('/about')}>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>handleNavClick('/faq')}>
                            <ListItemText primary="FAQ" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>handleNavClick('/contact')}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Drawer>

        </div>

    );
}

// Export Component Function
export default Navigation;