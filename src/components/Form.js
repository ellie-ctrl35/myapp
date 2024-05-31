import { useState } from 'react';
import { EyeIcon, EyeOffIcon, MailIcon } from '@heroicons/react/outline';
import LogoImage from '../assests/LogoImage.svg';
import SubmitButton from './SubmitButton';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Form = ({ onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      toast.info("Please Enter An Email"); // Display error toast
    } else if (password === "") {
      toast.info("Please Enter your Password");
    }else{
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 bg-white p-8 rounded-lg w-96 h-25 mx-auto'>
      <img src={LogoImage} alt="Logo" className="w-96 h-10" />

      <h1 className="text-center text-black-700 text-xl font-semibold mb-4">
        Sign in to your account
      </h1>
      <div className="flex flex-col mb-2">
        <input
          id="email"
          type="text"
          placeholder="Username"
          className="flex-1 bg-transparent outline-none items-center border border-gray-400 rounded-md p-2 w-75"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">

        <div className="flex items-center border border-gray-400 rounded-md p-2">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="flex-1 bg-transparent outline-none font-sans"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <EyeOffIcon className="text-gray-500 h-5 w-5 ml-2 cursor-pointer" onClick={togglePasswordVisibility} />
          ) : (
            <EyeIcon className="text-gray-500 h-5 w-5 ml-2 cursor-pointer" onClick={togglePasswordVisibility} />
          )}
        </div>
        <div className="flex justify-center mt-8 bg-[#BA1B1B] p-1 rounded-md">
          <SubmitButton text="Sign in" width="100%" height="40px" className="w-full" />
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Form;
