import React, { useState } from 'react';
import '../App.css';
import Form from '../components/Form';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='App'>
      <Form/>
    </div>
  );
};

export default Login;
