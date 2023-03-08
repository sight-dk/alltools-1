import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Radio from '@mui/joy/Radio';








const WriteCopy = () => {



  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, {replace: true})    
  }

  const [compName, setCompName] = useState('')
  const [link, setLink] = useState('')
  const [product, setProduct] = useState('')
  const [keywords, setKeywords] = useState('')
  const [usp, setUsp] = useState('')
  const [tov, setTov] = useState('')
  const [hook, setHook] = useState(false)
  const [emojis, setEmojis] = useState(false)
  const [simple, setSimple] = useState(false)
  

  return (
    <div>
      
      <div className='grid-rows-2'>

        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl p-8 pt-9 m-10 mt-2 h-screen w-12/12 relative drop-shadow-lg grid-rows-2'>   
          <div>

        

          <h1 className = "text-3xl font-bold m-10">✍️ Write a new copy</h1>

        {/* Left side */}
          <div className='w-5/12 m-10 flex-row'>
              <p className='font-medium text-lg text-gray-700'>
                  Let our
                  
                  <span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500'> AI </span> 
                  write your ad copy. Tell us more, and get 
                  <span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500'> better results</span>.
              </p>

              <div className='mt-8'>
                  <div className='flex-col'>
                    {/* Company name */}
                    <div>
                        <div>
                          <label className='text-15 font-md'>Company name</label>
                        </div>
                        <div>
                          <input
                              onChange={e => setCompName(e.target.value)}
                              
                              type = "text"
                              className='w-full border-2 border-gray-100 rounded-md p-4 mt-1 h-12 mb-4 bg-transparent'
                              placeholder = "Enter company name"
                          ></input>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <div>
                          <label className='text-15 font-md'>Tell us something about the product</label>
                        </div>
                        <div>
                            <textarea
                            type="text"
                            value={product}
                            onChange={e => setProduct(e.target.value)}
                            placeholder="E.g. 'Our eco-friendly training t-shirt is made out of the softest material.'
                            The more you write the, better the ad copy will be."
                            className="w-6/12 border-2 border-gray-100 rounded-md p-4 mt-1 lg:w-full lg:h-3/12 mb-4 bg-transparent text-area"
                            >
                            </textarea>

                        </div>
                    </div>


                    {/* Keywords */}
                    <div>
                        <div>
                          <label className='text-15 font-md'>Write keywords</label>
                        </div>
                        <div>
                          <input
                              onChange={e => setKeywords(e.target.value)}
                              
                              type = "text"
                              className='w-full border-2 border-gray-100 rounded-md p-4 mt-1 h-12 mb-4 bg-transparent'
                              placeholder = "E.g. 'sweatproof, comfort, stay-put fit'"
                          ></input>
                        </div>
                    </div>

                    {/* USP */}
                    <div>
                      <div>
                        <label className='text-15 font-md'>Do you want to include USPs?</label> {/* Evt add en help tool der forklarer USPs */}
                      </div>
                      <div>
                        {/* <RadioGroup>
                          <Radio value='test'/>
                          <Radio value='test2'/>
                        </RadioGroup> */}
                      </div>
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



                  </div>

                  <div className = "mt-8 flex-col gap-y-4 grid justify-items-end">
                      <button onClick = {handleLogin} className='active:scale-[.97] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all py-3 rounded-md bg-gradient-to-tr from-green-300 to-blue-500 drop-shadow-md text-white text-24 font-bold w-3/12'> Submit </button>               
                      
                  </div>
              </div>
          </div>


        {/* Right side */}
        <div className='w-5/12'>

              <div>
                <label className='text-15 font-md'>Tell us something about the product</label>
              </div>
                    <div>
                        <textarea
                        type="text"
                        value={product}
                        onChange={e => setProduct(e.target.value)}
                        placeholder="E.g. 'Our eco-friendly training t-shirt is made out of the softest material.'
                        The more you write the, better the ad copy will be."
                        className="w-6/12 border-2 border-gray-100 rounded-md p-4 mt-1 lg:w-full lg:h-3/12 mb-4 bg-transparent text-area"
                        >
                        </textarea>
                    </div>



        </div>
      </div>                    
      </div>


      </div>
      
      </div>  
  )
}

export default WriteCopy