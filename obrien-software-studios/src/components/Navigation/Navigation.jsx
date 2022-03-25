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

// This component will render the blue app bar across the top, global to all main app components.
// It displays the app name, the currently logged in user as well as a button to log out of the application.

function Navigation() {

    const navigate = useNavigate();

    // Render DOM
    return (
        <div className="app-navigation-header">
            <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/skills')}>Skills</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/education')}>Education</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/projects')}>Projects</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/home')}>Home</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/about')}>About</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/faq')}>FAQ</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}} onClick={()=>navigate('/contact')}>Contact</Button>
        </div>
    );
}

// Export Component Function
export default Navigation;