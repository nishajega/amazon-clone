import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe("pk_test_51Hj5IYF9XzKtJlr76tpFVtVGjlDZjJacLsWqTgnUqsPSHQ501UTqrsJleUJtVXCD47oyVimRcIKhfGSTNs0ybjwF00EWxlurtW");

function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(()=>{
    //will only run once when the app component loads..
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        //the user just logged in/the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    // BEM
    <Router>
      <div className="App"> 
        <Switch>
        <Route path="/orders">
            <Header/>
            <Orders />
          </Route>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
