///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    const navigate = useNavigate();

    // Render DOM
    return (
        <div className="navigation-header">

            <div className="navigation-menu-group-left">
                <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/skills')}>Skills</Button>
                <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/education')}>Education</Button>
                <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/projects')}>Projects</Button>
            </div>

            <img className="navigation-logo" src="logo_white.png" alt="logo" onClick={()=>navigate('/home')}/>

            <div className="navigation-menu-group-right">
                <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/about')}>About</Button>
                <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/faq')}>FAQ</Button>
                <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/contact')}>Contact</Button>
            </div>

        </div>
    );
}

// Export Component Function
export default Navigation;