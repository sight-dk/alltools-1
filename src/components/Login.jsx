import * as React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from './auth'
import { useNavigate, useLocation, Link} from 'react-router-dom'
import axios from 'axios';



export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const navigate = useNavigate();

  const handleForgot = async () => {
    navigate("/forgotpassword")
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate("/dashboard");
    } catch (error) {
     //console.error(error);
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid email or password.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
    
  };


    return (
        
           
        <div className = "flex w-full h-screen">
            
            <div className = "w-full flex items-center justify-center lg:w-1/2 bg-main-bg">
            <div className='bg-white px-10 py-20 rounded-2xl drop-shadow-md border-1 border-grey-200 w-10/12 h-8/12'>
          
                <h1 className = "text-3xl font-semibold">Welcome Back</h1>
                <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back, please enter your details</p>
                <div className='mt-8'>
                    <div>
                        <label className='text-15 font-medium'>Email</label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type = "text"
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4 bg-transparent'
                            placeholder = "Enter your email"
                        ></input>

                        <label className='text-15 font-medium'>Password</label>
                        <input
                            value={password}
                            onChange = {(e) => setPassword(e.target.value)}
                            type = "password"
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 bg-transparent text-12'
                            placeholder = "Enter your password"
                        ></input>   
                        {errorMessage && (
                          <div className="text-red-500 text-sm">{errorMessage}</div>
                        )}

                    </div>
                    <div className = 'mt-8 flex justify-between items-center'>
                        <div>
                            <input 
                                type = "checkbox"
                                className=''
                                id = 'remember'

                            />
                            <label className = "ml-2 font-medium text-base" htmlFor = "remember">Remember for 30 days</label>

                        </div>
                        <button onClick = {handleForgot} className = "ml-2 font-medium text-base hover:scale-[.97] hover: duration-75 hover:scale-[1.01 ease-in-out] transition-all"> Forgot password? </button>
                    </div>
                    <div className = "mt-8 flex flex-col gap-y-4">
                    
                        <button onClick = {handleLogin} className='active:scale-[.97] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all py-3 rounded-md bg-gradient-to-tr from-green-300 to-blue-500 drop-shadow-md text-white text-14 font-bold'> Sign In </button>
                        <div className="flex items-center justify-center">
                      <span className="text-gray-500 mr-2 hover:scale-[.97] hover: duration-75 hover:scale-[1.01 ease-in-out] transition-all">Don't have an account?</span>
                        <Link to="/register" className="text-violet-500 font-medium text-base hover:scale-[.97] hover: duration-75 hover:scale-[1.01 ease-in-out] transition-all">
                          Sign up
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