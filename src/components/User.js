import React from 'react'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const User = () => {

    const e = useRef(null);

    useEffect(() => {
        const typed = new Typed(e.current, {
            strings: ["Trusted by Leading Companies"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
         <div style={{background:"url(https://miro.medium.com/v2/resize:fit:1400/1*uW5I8U8Zvii2mHcW4ouJUA.png) no-repeat center /cover" , margin:"-48px 0px", }}>
             <div className="container text-center my-5 text-light py-5" >
                <h3>LEADING BUSINESSES DEVELOP TEAMS USING RECURRENT.</h3>
                <div className="fs-3 my-2" ref={e}></div>
                <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/Company%20Long%20List.png" class="img-fluid mt-3"  alt="..."></img>
             </div>
             </div>
        </>
    )
}

export default User