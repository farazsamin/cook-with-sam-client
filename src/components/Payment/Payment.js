import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';


const stripePromise = loadStripe('pk_test_51IeJhVK3cirpxdZKzKEKc9EVQUs7nNG2Lo0aTdpxACQEba1PA14Cx5UsbyXJa5QeQ9g5gB7Fddu6FOhmhRIt9pML006P5XSgD1');
const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm></PaymentForm>
            </Elements>


        </div>
    );
};

export default Payment;