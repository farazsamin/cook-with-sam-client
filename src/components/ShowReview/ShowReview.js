import React, { useEffect, useState } from 'react';
import axios from 'axios'
import loadingImg from '../../images/loading.gif'
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './ShowReview.css'
const ShowReview = () => {
    const [loading, setLoading] = useState(true)
    const [reviews, setReviews] = useState('')
    useEffect(() => {
        axios.get('https://mighty-tor-77983.herokuapp.com/reviews').then((response) => {
            console.log(response.data)
            setReviews(response.data)
            setLoading(false)
        })
    }, [])
    return (

        <div className="review-container">
                 <h3 className="text-center d-block mb-5">Ratings From Our Students</h3>
            <div className="row mt-3 d-flex justify-content-center align-items-center ">

                {
                    loading ? <img className="text-center m-auto" src={loadingImg} alt="" /> : reviews.map(name => <ReviewDetails name={name}></ReviewDetails>)
                }
                  
            </div>
        </div>
            
    );
};

export default ShowReview;