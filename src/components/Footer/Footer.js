import React, { useEffect } from 'react';
import './Footer.css'
const Footer = () => {
    
    return (
        <div className="half-height">
        <div className="row  d-flex justify-content-center align-items-center pb-5">
            <div className="col-md-3">
            <p>Mobile : 01777777777</p>
            <p> Email  : saminfaraz40@gmail.com</p>
            <p> Location : Chittagong </p>
           
            </div>
            <div className="col-md-3">
            <p>Fax : 01777777777</p>
            <p> Official-Email  : saminfaraz@gmail.com</p>
            <p> Office Location : Chittagong </p>
           
            </div>
            <div className="col-md-3">
            <label htmlFor="">Email : </label>
                <input type="text" className="form-group" name="" id=""/>
                <button className="btn btn-primary">Send</button>
                <p>Send us your email to get interesting food blogs and food recepies from our talented chefs. You will never walk alone. We promise! </p>

            </div>
           
        </div>
        <p className="text-center"> © Copyright Faraz Samin. All rights reserved.</p>
       

        </div>
    );
};

export default Footer;