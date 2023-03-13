import { useState } from "react";
import {useNavigate, Link, Navigate } from "react-router-dom";
import axios from 'axios';


export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate the email
    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }
  
    // Send the reset password email
    try {

      const response = await axios.post('http://localhost:3001/api/forgotpassword', {
        email,
      });
      
      if (response.status === 200) {
        // Handle success
        console.log('Password reset email sent!');
        setSuccessMessage("Password reset sent! Check your inbox. ");
      } else {
        // Handle error
        console.log(response.data.error);
      }
    } catch (error) {
      // Handle error
      setErrorMessage("No user associated to that email! ");
      console.log(error);
    }
  };
  const handleBack = (event) => {
    navigate("/")
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-main-bg">
        <div className="bg-white px-10 py-20 rounded-2xl drop-shadow-md border-1 border-grey-200 w-10/12 h-8/12">
          <h1 className="text-3xl font-semibold">Forgot Password</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Enter your email address below and we'll send you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div>
              <label className="text-15 font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4 bg-transparent"
                placeholder="Enter your email"
              ></input>
              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="text-green-700 text-sm">{successMessage}</div>
              )}
              
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.97] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all py-3 rounded-md bg-gradient-to-tr from-green-300 to-blue-500 drop-shadow-md text-white text-14 font-bold"
              >
                Send Reset Link
              </button>
              <button
                className="font-medium text-base text-violet-500"
                onClick={handleBack}
              >
                Back to Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white'>
           
        <div className="w-60 h-60 bg-gradient-to-tr from-green-300 to-blue-500 rounded-full animate-bounce"></div> 
        <div className = "w-1/2 h-1/2 absolute bottom-1 bg-white/10 backdrop-blur"></div>
  
        </div>
        </div>
  
        
    )
    

}