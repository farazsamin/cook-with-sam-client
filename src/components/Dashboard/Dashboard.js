import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import loadingImg from '../../images/loading.gif'
import Review from '../Review/Review';
import Orders from '../Orders/Orders';
import { UserContext } from '../../App';
import { data } from 'jquery';
import AddAdmin from '../AddAdmin/AddAdmin';
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    const [courseName, setCourseName] = useState('');
    const [courseAuthor, setCourseAuthor] = useState('');
    const [coursePrice, setCoursePrice] = useState(0);
    const [courses, setCourses] = useState([])
    const [imageUrl, setImageUrl] = useState(null)
    const [date, setDate] = useState(0)
    const [loading, setLoading] = useState(true)

    const handleAddCourse = () => {
        axios.post('https://mighty-tor-77983.herokuapp.com/addCourse', {
            courseName: courseName,
            courseAuthor: courseAuthor,
            coursePrice: coursePrice,
            imageUrl: imageUrl,
            date: date
        })
            .then((response) => {
                console.log(response)
            })
        // window.location.reload();
    }
  
    useEffect(() => {
        axios.post('https://mighty-tor-77983.herokuapp.com/isAdmin',{
            email : loggedInUser.email
        })
        .then((response) => {
            setIsAdmin(response.data)
            console.log(isAdmin) 
        })
        .then((err)=>{
            console.log(err)
        })
    }, [])
    

    useEffect(() => {
        axios.get('https://mighty-tor-77983.herokuapp.com/courses').then((response) => {
            setCourses(response.data)
            setLoading(false)
        })
    }, [])

    const deleteCourse = (id) => {
        axios.delete(`https://mighty-tor-77983.herokuapp.com/delete/${id}`, {
        })
        // window.location.reload();
    }
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'dadd1c340e709dfd345e92ae94e9f9ba')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="d-flex text-center row">
            <div className="col-md-3">
                <div className="nav flex-column nav-pills sidebar mx-auto" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                       {  
                           isAdmin &&
                           <div>
                                <a className="nav-link bg-secondary p-2 ml-3 mr-3 mt-3 text-white" id="v-pills-manage-courses-tab" data-toggle="pill" href="#v-pills-manage-courses" role="tab" aria-controls="v-pills-manage-courses" aria-selected="true">Manage Courses</a>
                                <a className="nav-link bg-secondary p-2 m-3 text-white" id="v-pills-add-course-tab" data-toggle="pill" href="#v-pills-add-course" role="tab" aria-controls="v-pills-add-course" aria-selected="false">Add Course</a>
                                <a className="nav-link bg-secondary p-2 m-3 text-white" id="v-pills-add-admin-tab" data-toggle="pill" href="#v-pills-add-admin" role="tab" aria-controls="v-pills-add-admin" aria-selected="false">Add Admin</a>
                            </div> 
                       }
                    <a className="nav-link bg-secondary p-2 m-3 text-white" id="v-pills-add-review-tab" data-toggle="pill" href="#v-pills-add-review" role="tab" aria-controls="v-pills-add-review" aria-selected="false">Add Review</a>
                    <a className="nav-link bg-secondary p-2 m-3 text-white" id="v-pills-orders-tab" data-toggle="pill" href="#v-pills-orders" role="tab" aria-controls="v-pills-orders" aria-selected="false">Orders</a>
                </div>
            </div>

            <div className="col-md-9">
                <div className="tab-content ml-5 content" id="v-pills-tabContent">
                    {
                    isAdmin && 
                    <div className="tab-pane fade show active" id="v-pills-manage-courses" role="tabpanel" aria-labelledby="v-pills-manage-courses-tab">
                        <table class="table mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Course Name </th>
                                    <th scope="col">Course Author</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                
                                {
                                    loading ? <img className="text-center m-auto" src={loadingImg} alt="" /> : courses.map((val, key) => {
                                        return (
                                            <tr>


                                                <td>{val.courseName}</td>
                                                <td>{val.courseAuthor}</td>
                                                <td>$ {val.coursePrice}</td>
                                                <td>{<button className="btn btn-danger" onClick={() => deleteCourse(val._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>}</td>
                                                
                                            </tr>
                                        )
                                    })
                                }




                            </tbody>
                        </table>
                    </div>

                    }
                    <div className="tab-pane fade mt-3" id="v-pills-add-course" role="tabpanel" aria-labelledby="v-pills-add-course-tab">
                        <div className="form-group">
                            <label htmlFor="">Course Name : </label>
                            <input type="text" name="course-name" id="" onChange={
                                (event) => {
                                    setCourseName(event.target.value);
                                }
                            } />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Course Author : </label>
                            <input type="text" name="course-author" id="" onChange={
                                (event) => {
                                    setCourseAuthor(event.target.value);
                                }
                            } />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Course Price : </label>
                            <input type="text" name="price" id="" onChange={
                                (event) => {
                                    setCoursePrice(event.target.value);
                                }
                            } />
                        </div>

                        <div className="form-group">
                            <label className="ml-5 mt-3" htmlFor="">Image :   </label>
                            <input className="ml-3" type="file" name="course-cover" id="" onChange={handleImageUpload} />
                        </div>


                        <button onClick={handleAddCourse} className="btn btn-success mt-3">Add Course</button>
                    </div>
                    <div className="tab-pane fade mt-3" id="v-pills-add-review" role="tabpanel" aria-labelledby="v-pills-add-book-tab">
                        <Review></Review>
                    </div>
                    <div className="tab-pane fade mt-3" id="v-pills-orders" role="tabpanel" aria-labelledby="v-pills-orders-tab">
                        <Orders></Orders>
                    </div>
                    <div className="tab-pane fade mt-3" id="v-pills-add-admin" role="tabpanel" aria-labelledby="v-pills-add-admin-tab">
                       <AddAdmin></AddAdmin>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Dashboard;