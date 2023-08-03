import React from 'react'
import { Link } from 'react-router-dom'

const Loginbox = () => {
    return (
        <>
            <hr style={{  width: "80%;" }} />
           
            <div className="container border mt-4 ">
                <form className="px-2 py-2 d-flex">
                    <div className="m-3 col-md-7 " >
                        <input type="email" className="form-control px-4 py-3 " id="exampleDropdownFormEmail1" placeholder="Your Email" />
                    </div>
                    <button type="submit" className="btn btn-dark m-3 px-4 " >Sign in</button>
                    <p className='mt-4'>or</p>
                    <button type="submit" className="btn btn-light border m-3 px-3 " >
                        <img src="https://e7.pngegg.com/pngimages/715/371/png-clipart-youtube-google-logo-google-s-google-account-youtube-text-trademark.png" className="img-thumbnail border-0 " alt="..." width="35" height="35" />
                        Sign in With Google</button>
                </form>
            </div>
            <div className="container d-flex flex-row">

                <div className="container text-start my-2 pe-5 me-5">
                    Looking to raise money or make an investment in the upcoming crop of outstanding startups? You may now find Recuriter Venture at Recuriter.com.
                </div>

                <div className="container mx-3 my-2 text-end">
                    Already Have an Account ?
                    <Link class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0       link-underline-opacity-75-hover bs-primary-text-emphasis" to="/">
                        Login
                    </Link>

                </div>
                </div>
            
           <hr/>
        </>
    )
}

export default Loginbox


