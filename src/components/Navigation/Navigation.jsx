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

    // Render DOM
    return (
        <div>

            <div className="navigation-header">

                { width > 850 &&
                    <div className="navigation-links-left">
                        <Button variant="text" onClick={()=>navigate('/skills')}>Skills</Button>
                        <Button variant="text" onClick={()=>navigate('/education')}>Education</Button>
                        <Button variant="text" onClick={()=>navigate('/projects')}>Projects</Button>
                    </div>  
                }

                <img src="logo_white.png" alt="logo" onClick={()=>navigate('/home')}/>

                { width > 850 &&

                    <div className="navigation-links-right">

                        <Button variant="text" onClick={()=>navigate('/about')}>About</Button>
                        <Button variant="text" onClick={()=>navigate('/faq')}>FAQ</Button>
                        <Button variant="text" onClick={()=>navigate('/contact')}>Contact</Button>

                    </div>

                }

            </div>

            <IconButton className='navigation-menu-button' onClick={()=>setDrawerActive(!drawerActive)}><MenuIcon/></IconButton>

            <Drawer variant="temporary" open={drawerActive} onClose={()=>setDrawerActive(false)} anchor={'bottom'}>

                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Skills" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Education" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Projects" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="FAQ" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
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