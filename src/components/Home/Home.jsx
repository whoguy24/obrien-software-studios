///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Home/Home.css';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Home() {

    // Render DOM
    return (
        <div id="home">
            <div id="home-container">

                <div id="home-container-interior">

                    <img id="home-desktop" src="/images/desktop.png"/>

                    <img id="home-laptop" src="/images/laptop.png"/>

                    <img id="home-tablet" src="/images/tablet.png"/>

                    <img id="home-mobile" src="/images/mobile.png"/>

                </div>

            </div>
        </div>
    );
}

// Export Component Function
export default Home;