import { useState } from "react";
import {useNavigate, Link } from "react-router-dom";
import axios from 'axios';

export const Register = () =>  {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    // Do something with the email and password, like send it to a server
    try {
      const response = await axios.post('https://saturn-sight-dk.vercel.app/api/register', {
        name,
        lastName,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate("/dashboard");
    } catch (error) {
      
      if (error.response.status === 401 || error.response.data.message === 'Email is already taken') {
        setErrorMessage("Email is already taken");
      } else {
        console.error(error);
      }
  
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-main-bg">
        <div className="bg-white px-10 py-20 rounded-2xl drop-shadow-md border-1 border-grey-200 w-10/12 h-8/12">
          <h1 className="text-3xl font-semibold">Register</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please enter your details to create an account.
          </p>
          <div className="mt-8">
            <div>
              
              <label className="text-15 font-medium">First Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4 bg-transparent"
                placeholder="Enter your first name"
              ></input>


              <label className="text-15 font-medium">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4 bg-transparent"
                placeholder="Enter your last name"
              ></input>

              <label className="text-15 font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4 bg-transparent"
                placeholder="Enter your email"
              ></input>

              <label className="text-15 font-medium">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4 bg-transparent text-12"
                placeholder="Enter your password"
              ></input>

              <label className="text-15 font-medium">Confirm Password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4  bg-transparent text-12"
                placeholder="Confirm your password"
              ></input>

              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleRegister}
                className="active:scale-[.97] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all py-3 rounded-md bg-gradient-to-tr from-green-300 to-blue-500 drop-shadow-md text-white text-14 font-bold"
              >
                Register
              </button>

              <div className="flex items-center justify-center">
                <span className="text-gray-500 mr-2">Already have an account?</span>
                <Link to="/" className="text-violet-500 font-medium text-base">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white'>
           
      <div className="w-60 h-60 bg-gradient-to-tr from-green-300 to-blue-500 rounded-full animate-bounce"></div> 
      <div className = "w-1/2 h-1/2 absolute bottom-1 bg-white/10 backdrop-blur"></div>
  
    </div>
  </div>
  )
}