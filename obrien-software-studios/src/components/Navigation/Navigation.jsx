///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

import Button from '@mui/material/Button';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

// This component will render the blue app bar across the top, global to all main app components.
// It displays the app name, the currently logged in user as well as a button to log out of the application.

function Navigation() {

    // Render DOM
    return (
        <div className="app-navigation-header">
            <Button className="app-navigation-header-link" style={{color: 'white'}}>Skills</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}}>Education</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}}>Projects</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}}>Home</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}}>About</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}}>FAQ</Button>
            <Button className="app-navigation-header-link" style={{color: 'white'}}>Contact</Button>
        </div>
    );
}

// Export Component Function
export default Navigation;