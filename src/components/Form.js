import { useState } from 'react';
import { EyeIcon, EyeOffIcon, MailIcon } from '@heroicons/react/outline';
import Logo from '../assests/Logo.svg';
import SubmitButton from './SubmitButton';

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className='flex flex-col gap-4 bg-white p-8 rounded-lg w-96 mx-auto'>
      <div className="flex justify-center mb-4 bg-sky-800 p-2 rounded-lg w-32 mx-auto">
        <img src={Logo} alt="Logo" className="w-24 h-10" />
      </div>
      <h1 className="text-center text-gray-700 text-xl font-semibold">
        Login to your account
      </h1>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-600 mb-2">Email</label>
        <div className="flex items-center border border-gray-400 rounded-md p-2 w-75">
          <MailIcon className="text-gray-500 h-6 w-6 mr-2" />
          <input
            id="email"
            type="text"
            placeholder="example@gmail.com"
            className="flex-1 bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-600 mb-1">Password</label>
        <div className="flex items-center border border-gray-400 rounded-md p-2">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="flex-1 bg-transparent outline-none font-sans"
          />
          {showPassword ? (
            <EyeOffIcon className="text-gray-500 h-6 w-6 ml-2 cursor-pointer" onClick={togglePasswordVisibility} />
          ) : (
            <EyeIcon className="text-gray-500 h-6 w-6 ml-2 cursor-pointer" onClick={togglePasswordVisibility} />
          )}
        </div>
        <div className="flex justify-center mt-8 bg-sky-800 p-1 rounded-md">
          <SubmitButton text="Log In" width="100%" height="40px" className="w-full" />
        </div>
      </div>
    </form>
  );
};

export default Form;
