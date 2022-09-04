///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Preloader/Preloader.css';

import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";

import gearAnimation from "../../animations/gear_animation.json";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Preloader() {

    const animation = useRef(null);
    useEffect(() => {

        lottie.loadAnimation({
            container: animation.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: gearAnimation,
        });

        return () => lottie.stop();


    }, []);
    return <div id="preloader" ref={animation}></div>;

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Preloader;