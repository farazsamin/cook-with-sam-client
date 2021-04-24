import React, { useContext, useState } from 'react';
import axios from 'axios'
import { UserContext } from '../../App';
const Review = () => {
    const [description, setDescription] = useState('')
    const [reviewStar, setReviewStar] = useState('')
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleAddReview =() =>{
       
        axios.post('https://mighty-tor-77983.herokuapp.com/addReview', {
            email : loggedInUser.email,
            photoURL : loggedInUser.photoURL,
            description : description,
            reviewStar : reviewStar
        })
            .then((response) => {
                console.log(response)
            })
    }
    return (
        <div>
            <h1 className="text-center">Give a Review</h1>
            <div className="form-group">
                            <label htmlFor="">Description : </label>
                            <input type="text" name="book-name" id="" onChange={
                                (event) => {
                                    setDescription(event.target.value);
                                }
                            } />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Review Star : </label>
                            <input type="text" name="book-author" id="" onChange={
                                (event) => {
                                    setReviewStar(event.target.value);
                                }
                            } />
                        </div>

                        <button onClick={handleAddReview} className="btn btn-success mt-3">Add Review</button>

                       
        </div>
    );
};

export default Review;