import React from 'react';
import trainer1 from '../../images/trainer1.jpg'
import trainer2 from '../../images/trainer2.jpg'
import trainer3 from '../../images/trainer3.jpg'
import './Trainers.css'
const Trainers = () => {
    return (
        <div className="trainer-container">
         <h3 className="text-center d-block mb-5">Honourable Trainers</h3>
            <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-md-3 text-center mr-5">
                    <img src={trainer1}  class="rounded-circle" alt=""/>
                    <p className="mt-3 font-weight-bold" >He is one of the chefs who will train you like a HERO! You will never feel boring while working with him. </p>
                    
                </div>
                <div className="col-md-3 text-center mr-5">
                    <img src={trainer2}  class="rounded-circle" alt=""/>
                    <p className="mt-3 font-weight-bold">He is one of the chefs who will train you like a HERO! You will never feel boring while working with him. </p>
                    
                </div>
                <div className="col-md-3 text-center">
                    <img src={trainer3}  class="rounded-circle" alt=""/>
                    <p className="mt-3 font-weight-bold">He is one of the chefs who will train you like a HERO! You will never feel boring while working with him. </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Trainers;