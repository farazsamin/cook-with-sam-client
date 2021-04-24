import React, { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios';
import loadingImg from '../../images/loading.gif'

import ShowReview from '../ShowReview/ShowReview';
import Trainers from '../Trainers/Trainers';
import Footer from '../Footer/Footer';
import HomeSlider from '../Home_Slider/HomeSlider';
import './Home.css'
import Achievement from '../Achievement/Achievement';
import CourseDetails from '../CourseDetails/CourseDetails';
const Home = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://mighty-tor-77983.herokuapp.com/courses').then((response) => {
            setCourses(response.data)
            setLoading(false)
        })
    }, [])
    return (

        <div>
            <HomeSlider></HomeSlider>
            <h3 className="text-center mt-3 d-block mb-5">Courses We Offer</h3>
                        <div className="row d-flex justify-content-center align-items-center food-container">
                        
                            {
                                loading ? <img className="text-center m-auto" src={loadingImg} alt="" /> : courses.map(name => <CourseDetails name={name}></CourseDetails>)
                            }

                        </div>
            <ShowReview></ShowReview>
            <Trainers></Trainers>
            <Achievement></Achievement>
            <Footer></Footer>

        </div>

    



    );
};

export default Home;