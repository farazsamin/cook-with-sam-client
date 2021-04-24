import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Orders/Orders';

//context created
export const UserContext =  createContext();
export const PaymentContext =  createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [paymentId, setPaymentId] = useState('')

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <PaymentContext.Provider value={[paymentId, setPaymentId]}>
      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/checkout/:name/:price">
              <Checkout/>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>

      </PaymentContext.Provider>
      </UserContext.Provider>
  );
}

export default App;
