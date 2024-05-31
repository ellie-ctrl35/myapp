import React, { useState } from 'react';
import Form from '../components/Form';
import SuccessModal from '../components/SuccesModal';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccess = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-redGradientStart to-redGradientEnd'>
      {isLoggedIn ? <SuccessModal /> : <Form onSuccess={handleSuccess} />}
    </div>
  );
};

export default Login;
