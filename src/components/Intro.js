import React from 'react'
import Typed from 'typed.js';
import logo from '../main (1).png';
import { useEffect, useRef } from 'react';
import Loginbox from './Loginbox';
import User from './User';
import { Link } from 'react-router-dom';
import Footer from "./Footer";

const Intro = () => {

    const el = useRef(null);

    const why = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Hire the Best Minds in the Industry"],
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


    useEffect(() => {
        const type = new Typed(why.current, {
            strings: ["Why Recuriter ,  We Provide  "],
            startDelay: 2000,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        // Destropying
        return () => {
            type.destroy();
        };
    }, []);




    return (
        <>

            <section className="pt-4 pt-md-11" style={{ background: "url(https://static.vecteezy.com/system/resources/previews/006/262/479/large_2x/white-and-blue-tone-abstract-background-backdrop-for-presentation-design-for-website-concept-of-beauty-and-health-business-brochure-free-photo.jpg)" }} >

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5 col-lg-6 order-md-2">

                            <img src={logo} className="ing-fluid mr-md-150 mr-1g-130 mb-6 mb-md-8 aos-init aos-animate" alt="..." data-aos="fade=up" data-aos-delay="100" />
                        </div>
                        <div className="col-12 col-md-7 col-lg-6 order-ad-1 aos-init aos animate" data-aos="Fade-up">

                            <h1 className="display-3 text-center text-md-start">

                                <strong>Welcome to</strong>

                                <span className="text-primary"> <strong>Recuriters</strong></span>

                                <br />
                            </h1>
                            <span className="fs-3" ref={el}></span>
                            <p className="lead text-center text-md-start text-muted ab-6 mb-lg-8"> Are you looking for highly skilled software engineers, product managers, data scientists, and more? Recuriter is your one-stop solution for finding top talent across the globe.
                            </p>
                            <div className="container text-center mt-4 ">
                                <Link class="btn btn-info text-center btn-lg px-4 text-light" to="/" role="button">Hire Now!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <div style={{background:"url(https://i.stack.imgur.com/gS7rh.png) center center/cover" , height:"600px", marginTop:"-47px"}}>
            <div className="container text-light" >
                <h2 className='mt-5 text-center pt-5' > <span className="fs-1 " ref={why}></span></h2>


                <div className="d-flex justify-content-evenly my-4 mt-5" >
                    <div className="container mx-1 text-center">
                        <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon.png" className="img-thumbnail ms-3 rounded-circle border border-info" alt="..." width="100" height="100" />
                        <h3 className='mt-3'>Access to Diverse Talent</h3>
                        <p className='my-2'>Our platform connects you with talent from India and around the world, ensuring a wide range of skill sets and experiences.</p>
                    </div>

                    <div className="container mx-1 text-center">
                        <img src="https://img.freepik.com/premium-vector/process-business-illustration-design-vector-illustration_8499-5037.jpg?w=740" className="img-thumbnail ms-3 rounded-circle border border-info" alt="..." width="100" height="100" />
                        <h3 className='mt-3'>Streamlined Hiring Process</h3>
                        <p className='my-2'>Our user-friendly interface makes it easy to post jobs, review applicants, and schedule interviews, saving you time and effort.</p>
                    </div>

                    <div className="container mx-1 text-center">
                        <img src="https://img.freepik.com/free-vector/man-holding-clock-time-management-concept_23-2148823171.jpg?size=626&ext=jpg&ga=GA1.2.637354507.1690955929&semt=sph" className="img-thumbnail ms-3 rounded-circle border border-info" alt="..." width="100" height="100" />
                        <h3 className='mt-3'>Hire Within 1 weeks</h3>
                        <p className='my-2'>Candidates respond in under 48 hours. Set up interviews in working days, hire within 1 weeks.</p>
                    </div>


                    <div className="container mx-1 text-center">
                        <img src="https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?w=740&t=st=1690966772~exp=1690967372~hmac=56b969828202e8eae34b28701e8cc99203bf380a4ad6fcdfc2700a1ba43c2a98" className="img-thumbnail ms-3 rounded-circle border border-info" alt="..." width="100" height="100" />
                        <h3 className='mt-3'>Verified Profiles</h3>
                        <p className='my-2'>We thoroughly screen all candidates, so you can be confident that you're connecting with qualified professionals.</p>
                    </div>
                </div>
            </div>
            </div>
            <Loginbox />
            <User />
            <Footer />
        </>
    )
}

export default Intro