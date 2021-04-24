import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PaymentContext, UserContext } from '../../App';
import axios from 'axios';
import Payment from '../Payment/Payment';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [data, setData] = useState([])
    const [courseName, setCourseName] = useState('')
    const [coursePrice, setCoursePrice] = useState()
    const [quantity, setQuantity] = useState(1)
    const [date, setDate] = useState(0)
    const [status, setStatus] = useState('Pending')
    const [paymentId, setPaymentId] = useContext(PaymentContext)
    const {name,price} = useParams();

    useEffect(() => {
            setCourseName(name)
            setCoursePrice(price);
            setDate(new Date())
    }, [])
   

   const handleCheckout =() =>{
    axios.post('https://mighty-tor-77983.herokuapp.com/checkout', {
        courseName: courseName,
        coursePrice: coursePrice,
        quantity : quantity,
        date : date,
        email : loggedInUser.email,
        paymentId : paymentId,
        status : status
    })
        .then((response) => {
            console.log(response)
        })
    
   }


    return (

        <div class="row">
           
            <div className="col-md-6">
            <table class="table text-center mt-3">
                <thead>
                    <tr>
                        <th scope="col">Course Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>

                {
                    <tr>
                        <td>
                            {courseName}
                        </td>
                        <td>
                            {quantity}
                        </td>
                        <td>
                            $ {price}
                        </td>
                    </tr>
                }  
                </tbody>
            </table>
            </div>

            <div className="col-md-6 mt-5">
                    <Payment></Payment>
            </div>

            <button className="btn btn-success d-flex mx-auto mt-5" onClick={handleCheckout}>Checkout</button>

        </div>
    );
};

export default Book;