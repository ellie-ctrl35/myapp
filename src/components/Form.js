import { useState } from 'react';
import { EyeIcon, EyeOffIcon, MailIcon } from '@heroicons/react/outline';
import Logo from '../assests/Logo.svg';
import SubmitButton from './SubmitButton';
import {ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword]= useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      toast.info("Please enter an email"); // Display error toast
    } else if (password === "") {
      toast.info("Please enter your password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-white p-8 rounded-lg w-96 mx-auto'>
      <div className="flex justify-center mb-4 bg-sky-800 p-2 rounded-lg w-32 mx-auto">
        <img src={Logo} alt="Logo" className="w-24 h-10" />
      </div>
      <h1 className="text-center text-gray-700 text-xl font-semibold">
        Login to your account
      </h1>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-600 mb-2">Email</label>
        <div className="flex items-center border border-gray-400 rounded-md p-2 w-75">
          <MailIcon className="text-gray-500 h-5 w-5 mr-2" />
          <input
            id="email"
            type="text"
            placeholder="example@gmail.com"
            className="flex-1 bg-transparent outline-none"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          {showPassword ? (
            <EyeOffIcon className="text-gray-500 h-5 w-5 ml-2 cursor-pointer" onClick={togglePasswordVisibility} />
          ) : (
            <EyeIcon className="text-gray-500 h-5 w-5 ml-2 cursor-pointer" onClick={togglePasswordVisibility} />
          )}
        </div>
        <div className="flex justify-center mt-8 bg-sky-800 p-1 rounded-md">
          <SubmitButton text="Log In" width="100%" height="40px" className="w-full" />
        </div>
      </div>
      <ToastContainer/>
    </form>
  );
};

export default Form;
