import * as React from 'react'
import { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate, useLocation } from 'react-router-dom'

export const Login = () => {
    const[user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/dashboard'


    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace: true})
        
    }


    return (
        
           
        <div className = "flex w-full h-screen">
            
            <div className = "w-full flex items-center justify-center lg:w-1/2 bg-main-bg">
            <div className='bg-white px-10 py-20 rounded-2xl drop-shadow-md border-1 border-grey-200 w-10/12 h-8/12'>
          
                <h1 className = "text-3xl font-semibold">Welcome Back</h1>
                <p className='font-medium text-lg text-gray-500 mt-4'>Welcome Back, please enter your details</p>
                <div className='mt-8'>
                    <div>
                        <label className='text-15 font-medium'>Email</label>
                        <input
                            onChange={e => setUser(e.target.value)}
                            type = "text"
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4 bg-transparent'
                            placeholder = "Enter your email"
                        ></input>

                        <label className='text-15 font-medium'>Password</label>
                        <input
                            type = "text"
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 bg-transparent text-12'
                            placeholder = "Enter your password"
                        ></input>   

                    </div>
                    <div className = 'mt-8 flex justify-between items-center'>
                        <div>
                            <input 
                                type = "checkbox"
                                className=''
                                id = 'remember'

                            />
                            <label className = "ml-2 font-medium text-base" for = "remember">Remember for 30 days</label>

                        </div>
                        <button className = "ml-2 font-medium text-base text-violet-500"> Forgot password? </button>
                    </div>
                    <div className = "mt-8 flex flex-col gap-y-4">
                        <button onClick = {handleLogin} className='active:scale-[.97] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all py-3 rounded-md bg-gradient-to-tr from-green-300 to-blue-500 drop-shadow-md text-white text-14 font-bold'> Sign In </button>


                        
                        
                        <button className='active:scale-[.97] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all flex py-3 rounded-md border-2 items-center justify-center gap-2 text-14'>
                        
                            <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"/><path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"/><path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"/><path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"/></svg>
                            Sign in with Google 
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white'>
           
            <div class="w-60 h-60 bg-gradient-to-tr from-green-300 to-blue-500 rounded-full animate-bounce"></div> 
            <div className = "w-1/2 h-1/2 absolute bottom-1 bg-white/10 backdrop-blur"></div>
            {/* <div class="flex justify-between relative inline-block">
            
              
            <div className = "object-right">
                <img className="img-fluid bg-blend-screen " 
                    src={`${process.env.PUBLIC_URL}/assets/loginimage.png`} 
                    alt="logo"/>
            </div>

            <div className = "w-full h-full absolute bottom-0 bg-white/10 backdrop-blur-sm"></div>
            </div>
            <h1 class="flex text-8xl font-semibold text-purple-600">
                <span class="animate-waving-hand">👋🏻</span>  

            </h1> */}
            </div>

          
            
            
            

        </div>
  
        
    )
}