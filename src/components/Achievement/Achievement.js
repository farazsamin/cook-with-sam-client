import React from 'react';
import no1 from '../../images/no1.jpg'
import medal from '../../images/medal.jpg'
import './Achievement.css'
const Achievement = () => {
    return (
        <div className="achievement-container">
            <h3 className="text-center d-block mb-5">Achievements</h3>
            <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-md-3 text-center mr-5">
                    <img src={no1}  style={{borderRadius : '10%'}} alt=""/>
                    <p className="mt-3 text-center font-weight-bold" >Ranked No 1 Three times among the cooking institute in the universe! What are you waiting for? Come on...Join us now! </p>
                    
                </div>
                <div className="col-md-3 text-center mr-5 ">
                    <img src={medal}  style={{borderRadius : '10%'}} alt=""/>
                    <p className="mt-3 text-center font-weight-bold">Got Gold medal Five times among the cooking institute in the universe! What are you waiting for? Come on...Join us now!</p>
                    
                </div>
               
            </div>
        </div>
    );
};

export default Achievement;