import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { UserContext } from '../../App';
import loadingImg from '../../images/loading.gif'
const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [status, setStatus] = useState('Pending')
    useEffect(() => {
        axios.get('https://mighty-tor-77983.herokuapp.com/orders?email=' + loggedInUser.email).then((response) => {
            setOrders(response.data)
            setLoading(false)
        })
    }, [])

    const handleStatus = (e) => {
        setStatus(e.target.value)

    }
    const submitStatus = (id) => {
        console.log(id)
        axios.patch(`https://mighty-tor-77983.herokuapp.com/update/${id}`, {
            status: status
        })
            .then((response) => {

                console.log(response)
            })
            .then((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        axios.post('https://mighty-tor-77983.herokuapp.com/isAdmin', {
            email: loggedInUser.email
        })
            .then((response) => {
                setIsAdmin(response.data)
                console.log(isAdmin)
            })
            .then((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <table className="table text-center mt-3">
                <thead>
                    <tr>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Order Time</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        {
                            isAdmin && <><th scope="col">Change Status</th>
                                <th scope="col"></th></>
                        }


                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <img className="text-center m-auto" src={loadingImg} alt="" /> :
                            orders.map((val, key) => {
                                return (
                                    <tr>
                                        <td>{val.email}</td>
                                        <td>{val.courseName}</td>
                                        <td>{val.date}</td>
                                        <td>{val.quantity}</td>
                                        <td>${val.coursePrice}</td>
                                        <td>{val.status}</td>
                                        {
                                            isAdmin && <>
                                                <td>
                                                    <select name="" id="" onChange={handleStatus}>
                                                        <option value="Pending">Pending</option>
                                                        <option value="Ongoing">Ongoing</option>
                                                        <option value="Done">Done</option>
                                                    </select>
                                                </td>
                                                <td><button onClick={() => submitStatus(`${val._id}`)}>Submit</button></td>
                                            </>
                                        }



                                    </tr>
                                )
                            })

                    }

                </tbody>
            </table>
        </div>
    );
};

export default Orders;