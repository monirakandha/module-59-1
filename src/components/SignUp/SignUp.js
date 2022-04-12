import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [error , setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword , user ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigate('/shop');
    }
    const handleCreateUser = event => {
        event.preventDefault() ;
        if (password !== confirmPassword){
            setError('Your Password Not Match')
            return;
        }
        if(password.length < 6){
            setError('Password must be 6 character')
            return;
        }
        createUserWithEmailAndPassword(email , password)
        
    }
    return (
        <div className="form-container">
        <div>
          <h2 className="from-title">SignUp</h2>
          <form action="" onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onBlur={handlePassword} type="password" name="password" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" />
            </div>
            <p style={{color:'red'}}>{error}</p>
            <input className="form-submit" type="submit" value="Singup" required/>
          </form>
          <p>Aleady Have an Account ? <Link className="form-link" to='/login'>Login Here</Link></p>
        </div>
      </div>
    );
};

export default SignUp;