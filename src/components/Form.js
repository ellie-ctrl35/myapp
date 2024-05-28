import { useState } from 'react';
import '../App.css';
import { EyeIcon, EyeOffIcon, MailIcon } from '@heroicons/react/outline';
import Logo from '../assests/Logo.svg';

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className='theform' action="">
      <div className="logoContainer">
        <img src={Logo} alt="Logo" style={{ width: "100px", height: "40px", margin: "0 auto", display: "block" }} />
      </div>

      <h1 className="formTitle">
        Login to your account
      </h1>

      <div className="inputGroup">
        <label htmlFor="email" className="inputLabel">
          Email
        </label>
        <div className="inputWithIcon">
          <MailIcon className="inputIcon" height={25} width={25} />
          <input
            id="email"
            type="text"
            placeholder="example@gmail.com"
            className="textInput"
          />
        </div>
      </div>

      <div className="inputGroup">
        <label htmlFor="password" className="inputLabel">
          Password
        </label>
        <div className="inputWithIcon">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="textInput"
          />
          {showPassword ? (
            <EyeOffIcon className="toggleIcon" height={20} width={20} onClick={togglePasswordVisibility} />
          ) : (
            <EyeIcon className="toggleIcon" height={20} width={20} onClick={togglePasswordVisibility} />
          )}
        </div>
      </div>
    </form>
  );
}

export default Form;
