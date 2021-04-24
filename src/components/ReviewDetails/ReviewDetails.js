import React from 'react';
import './ReviewDetails.css'
const ReviewDetails = (props) => {
    const {email,description,reviewStar,photoURL} = props.name;
    return (
        <div className="col-md-4 text-center ">
        <img style={{borderRadius : '80%' , height : '140px' , width : '140px'}} className="mb-3" src={photoURL} alt=""/>
        <h3>{email}</h3>
        <p>{description}</p>
        <p>{reviewStar}</p>
    </div>
    );
};

export default ReviewDetails;