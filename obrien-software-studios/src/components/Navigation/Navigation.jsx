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

            <div className="navigation-links-left">
                <Button variant="text" onClick={()=>navigate('/skills')}>Skills</Button>
                <Button variant="text" onClick={()=>navigate('/education')}>Education</Button>
                <Button variant="text" onClick={()=>navigate('/projects')}>Projects</Button>
            </div>

            <img src="logo_white.png" alt="logo" onClick={()=>navigate('/home')}/>

            <div className="navigation-links-right">
                <Button variant="text" onClick={()=>navigate('/about')}>About</Button>
                <Button variant="text" onClick={()=>navigate('/faq')}>FAQ</Button>
                <Button variant="text" onClick={()=>navigate('/contact')}>Contact</Button>
            </div>

        </div>
    );
}

// Export Component Function
export default Navigation;