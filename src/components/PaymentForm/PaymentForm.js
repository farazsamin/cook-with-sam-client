import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'
import { PaymentContext } from '../../App';
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
     const [paymentError, setPaymentError] = useState('')
     const [paymentSuccess, setPaymentSuccess] = useState('')
     const [paymentId, setPaymentId] = useContext(PaymentContext)
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
           setPaymentError(error.message)
           setPaymentSuccess('')
        } else {
           setPaymentSuccess(paymentMethod.id)
           setPaymentError('')
           setPaymentId(paymentSuccess)
           console.log(paymentId)
        }
        
    };
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
                {
                    paymentError && <p style={{color :'red'}}>{paymentError}</p>
                }
                {
                    paymentSuccess && <p style={{color : 'green'}}>Payment Successful</p>
                }
            </form>
        </div>
    );
};

export default PaymentForm;