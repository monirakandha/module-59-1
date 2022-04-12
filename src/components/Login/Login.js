import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import "./Login.css";

const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const handlEmailBlur = event => {
    setEmail(event.target.value);
  }
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  
  const handleUserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email,password)
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="from-title">Login</h2>
        <form onSubmit={handleUserSignIn}  action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handlEmailBlur} type="email" name="" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
          </div>
          <p style={{color:'red'}} >{error?.message}</p>
          <input className="form-submit" type="submit" value="Login" required />
        </form>
        <p>New to Ema-Jhon ? <Link className="form-link" to='/singup'>Create New Account</Link></p>
      </div>
    </div>
  );
};

export default Login;
