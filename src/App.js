import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Orders from './Orders';
import Checkout from './Checkout';
import Login from "./Login";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51MtqjKSGGTaMnTUNewXSRzPusB8lOy3MS9UcqXgX8JQGYW79pbepqjsxjeONUJFIMjS499uqvvBFAoF6cdcMP88b00RKvKkV3g');


function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    //will only run once when app component loads..
    auth.onAuthStateChanged(authUser =>{
      console.log("authUser : ",authUser);

      if(authUser){
        //the user just logged in/ the user was logged in
        dispatch({
          type:'SET_USER',
          user : authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user : null
        })
      }
    })
  },[])

  return (
    <Router>

    <div className="App">
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/orders" element={<Orders/>} />

    <Route path='/checkout' element={<Checkout/>}></Route>

    <Route path='/login' element={<Login/>}></Route>

    <Route path='/payment' element={
          <Elements stripe={promise}>
             <Payment/>
          </Elements>
    }></Route>




      </Routes>

    </div>

    </Router>

  );
}

export default App;
