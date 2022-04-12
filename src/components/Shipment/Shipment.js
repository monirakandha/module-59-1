import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
  
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [address , setAdress] = useState('');
    const [phone , setPhone] = useState('');
    const [error , setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword , user ] = useCreateUserWithEmailAndPassword(auth);
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handlePhoneNUmber = event => {
        setAdress(event.target.value);
    }
    const handleAdressBlur = event => {
        setPhone(event.target.value)
    }
    if(user){
        navigate('/shop');
    }
    const handleCreateUser = event => {
        event.preventDefault() ;
        
    }
    return (
        <div className="form-container">
        <div>
          <h2 className="from-title">Shipping Information</h2>
          <form action="" onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input onBlur={handleNameBlur} type="text" name="name" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Mail</label>
              <input value={user?.email}readOnly type="email" name="email" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="phonenumber">Phone Number</label>
              <input onBlur={handlePhoneNUmber} type="text" name="phonenumber" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="adress">Adress</label>
              <input onBlur={handleAdressBlur} type="text" name="adress" id="" />
            </div>
            <p style={{color:'red'}}>{error}</p>
            <input className="form-submit" type="submit" value="Add Shipping" required/>
          </form>
          <p>Aleady Have an Account ? <Link className="form-link" to='/login'>Login Here</Link></p>
        </div>
      </div>
    );
};

export default Shipment;