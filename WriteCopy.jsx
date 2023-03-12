import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const { Configuration, OpenAIApi } = require("openai");
// import { generatePrompts } from './utils/openai';

import './pagesStyle.css';





const WriteCopy = () => {  

  const [compName, setCompName] = useState('')
  const [link, setLink] = useState('')
  const [product, setProduct] = useState('')
  const [keywords, setKeywords] = useState('')
  const [usp, setUsp] = useState('')
  const [tov, setTov] = useState('')
  const [hook, setHook] = useState(false)
  const [emojis, setEmojis] = useState('')
  const [simple, setSimple] = useState(false)
  const [copyInput, setCopyInput] = useState('')
  const [copyOutput, setCopyOutput] = useState('')
  const [includeUsp, setIncludeUsp] = useState(false) 
  const [cta, setCta] = useState(true)
  const [simplification, setSimplification] = useState(true)
  const [uspToCopy, setUspToCopy] = useState('')
  const [textareaOpen, setTextareaOpen] = useState(false);

  
 

  function handleRadioChange(e) {
    if (e.target.name === 'include-usp') {
      setIncludeUsp(true);
      setTextareaOpen(true);
    } else if (e.target.name === 'no-usp') {
      setIncludeUsp(false);
      if (textareaOpen) {
        setUspToCopy(usp);
      } if (!textareaOpen) {
        setUspToCopy('No USPs included');
      }
      
      else {
        setUspToCopy('No USPs included');
      }
      setTextareaOpen(false);
      setUsp('');
    }
  }
  
  function handleTextareaChange(e) {
    setUsp(e.target.value);
    if (uspToCopy == '') {
      setUspToCopy('No USPs included');
    } else if (includeUsp) {
      setUspToCopy(usp);
    }
  }

  function generateCopy(compName, product, keywords, uspToCopy, tov, hook, emojis, simple, includeUsp) {
    const copyString = `Write a ${tov} ad copy for the following product to run on ${compName} based on these parameters:\n\nProduct: ${product}\n\nUnique Selling Points: ${uspToCopy}\n\nHook: ${hook}\n\nEmojis: ${emojis}\n\nCall to action: ${cta}\n\nSimplify: ${simplification}\n\n`;
  
    return copyString;
  }  

  

  const handleGenerateCopy = () => {
      
    const copyString = generateCopy(compName, product, keywords, uspToCopy, tov, hook, emojis, simple, includeUsp);
    setCopyOutput(copyString);
  };
  
  console.log("copyOutput = ", { copyOutput });

  function AiPrompt() {
  
    const aiPrompt = async (copyInput) => {
      
      const configuration = new Configuration({
        apiKey: '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',
      });
      const openai = new OpenAIApi(configuration);

      const response = await openai.createCompletion({
        engine: 'text-davinci-003',
        prompt: inputPrompt,
        temperature: 0.5,
        maxTokens: 350,
        topP: 1,
        frequencyPenalty: 0,
        presencePenalty: 0,
        bestOf: 1
      });
  
      const text = response.data.choices[0].text;
      console.log(text);
      setPrompt((prev) => prev + text);
    };
  
    
    const handleSubmit = (e) => {
      e.preventDefault();
      aiPrompt(copyInput);
    };


    setCopyOutput(aiPrompt);
  }

  return (

    
    <div>
      
      <div className = "flex w-12/12 lg:h-screen bg-white dark:bg-secondary-dark-bg rounded-3xl p-8 pt-9 m-10 mt-2 shadow-lg  overflow-y-auto lg:flex-wrap lg:flex md:flex-col md:flex- sm:flex-col sm:flex-nowrap xs:flex-col flex-col">
            
            
            <div className = "w-full flex-nowrap items-center justify-center lg:w-1/2">
              
            <div className='w-10/12 h-9/12'>

              
            
          
              <div className='flex-row m-5'>
              <h1 className = "text-3xl font-bold mb-16">✍️ Write a new copy</h1>
              <p className='font-medium text-lg text-gray-700'>
                  Let our
                  
                  <span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500'> AI </span> 
                  write your ad copy. Tell us more, and get 
                  <span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500'> better</span>
                  <span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500'> results</span>.
              </p>

              <div className='mt-4'>
                  <div className='flex-col'>
                    {/* Company name */}
                    <div>
                        <div>
                          <label className='text-15 font-md font-semibold'>What is the name of company?</label>
                        </div>
                        <div>
                          <input
                              onChange={e => setCompName(e.target.value)}
                              
                              type = "text"
                              className='w-full border border-gray-200 rounded-md p-4 mt-1 h-12 mb-4 bg-transparent placeholder:italic'
                              placeholder = "Enter company name"
                          ></input>
                        </div>
                    </div>

                    {/* // Product  */}
                    <div>
                        <div>
                          <label className='text-15 font-md font-semibold'>Tell us something about the product <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500'>*</span></label>
                        </div>
                        <div>
                            <textarea
                            type="text"
                            value={product}
                            onChange={e => setProduct(e.target.value)}
                            placeholder="E.g. 'Our eco-friendly training t-shirt is made out of the softest material.'
                            The more you write the, better the ad copy will be."
                            className="w-6/12 border border-gray-200 rounded-md p-4 mt-1 lg:w-full lg:h-3/12 mb-4 bg-transparent text-area placeholder:not-italic"
                            rows='3'
                            >
                            </textarea>

                        </div>
                    </div>


                    {/* // Keywords */}
                    <div>
                        <div>
                          <label className='text-15 font-md font-semibold'>Write some <span className='font-extrabold'>keywords</span> about the product</label>
                        </div>
                        <div>
                          <input
                              onChange={e => setKeywords(e.target.value)}
                              
                              type = "text"
                              className='w-full border border-gray-200 rounded-md p-4 mt-1 h-12 mb-4 bg-transparent placeholder:italic'
                              placeholder = "E.g. 'sweatproof, comfort, stay-put fit'"
                          ></input>
                        </div>
                    </div>




                    {/* // USP */}
                    <div className='mb-4'>
                    <label className='text-15 font-md font-semibold'>Do you want to include USPs?</label>
                        <div className='flex mt-2'>
                        
                          <div className="flex items-center h-12 pl-4 w-1/2 mr-2 border border-gray-200 rounded-md dark:border-gray-700 transition ease-in-out hover:scale-105 duration-300">
                            <input
                              id="no-usp-radio"
                              type="radio"
                              name="no-usp"
                              className='w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                              onChange={handleRadioChange}
                              checked={!includeUsp}
                            />
                            <label htmlFor="no-usp-radio" className="w-full py-4 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">
                            No, let's keep it <span className='font-bold'>simple</span>
                            </label>
                          </div>
                          <div className="flex items-center h-12 pl-4 w-1/2 ml-2 border border-gray-200 rounded-md dark:border-gray-700 transition ease-in-out hover:scale-105 duration-300">
                            <input
                              id="include-usp-radio"
                              type="radio"
                              name="include-usp"
                              className='w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                              onChange={handleRadioChange}
                              checked={includeUsp}
                            />
                            <label htmlFor="include-usp-radio" className="w-full py-4 ml-2 text-md font-medium text-gray-900 dark:text-gray-300 ">
                              Yes, let's <span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500'>spice</span> it up 👍 
                            </label>
                          </div>
                        </div>
                        {includeUsp && (
                          <div>
                            <div className='mt-3'>
                              <label className='text-15 font-md font-semibold'>Write your USPs</label>
                            </div>
                            <div>
                              <textarea
                                onChange={handleTextareaChange}
                                value={usp}
                                className='w-full border border-gray-200 rounded-md p-4 mt-1 mb-4 bg-transparent placeholder-italic'
                                placeholder="Your unique selling points, e.g. '1 day delivery, free shipping on orders above $49'"
                              ></textarea>
                            </div>
                          </div>
                        )}
                      </div>


                      {/* Tone of voice and emojis */}


                      <div className='mb-5'>
                        <label htmlFor="tov" className="text-15 font-md font-semibold dark:text-white">Choose the tone of voice</label>
                        <select 
                        id="tov" 
                        className="bg-transparent border border-gray-200 text-gray-900 text-md rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-12" 
                        onChange={(e) => setTov(e.target.value)}
                        >
                          <option value="Let us choose">Let us choose 🙋‍♂️</option>
                          <option value="Bold">Bold 🌩</option>
                          <option value="Motivational">Motivational 🙌</option>
                          <option value="Scientific">Scientific 👨‍🔬</option>
                          <option value="Formal">Formal 🤵</option>
                        </select>
                      </div>



                        {/* Emojis */}
                      {/* <div className='mt-5 '>
                        <ul class="grid w-full">
                            <li>
                                <input defaultChecked type="checkbox" id="react-option" value="" class="hidden peer" required=""/>
                                <label for="react-option" class="inline-flex items-center align-center w-full p-5 text-black bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="flex items-center justify-between">
                                        <div class="w-full font-semibold text-xl mr-3">Let's include the neccesary emojis</div>
                                        <p className='text-6xl ml-1'>😌 </p>
                                    </div>
                                </label>
                            </li>
                        </ul>
                      </div> */}


{/* // Til emojis */}
                      
                      

                    <h3 className="mt- mb-1 font-semibold text-15 text-gray-900 dark:text-white">Emojis?</h3>
                    <ul className="grid w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="emojis-no" name="hosting" value="no" className="hidden peer" required onChange={(e) => setEmojis(e.target.value)} />
                        <label htmlFor="emojis-no" className="inline-flex items-center align-center w-full p-5 text-black bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 peer-checked:text-blue-500 hover:text-gray-600 dark:peer-checked:text-gray-300  hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  transition ease-in-out hover:scale-105 duration-300">
                          <div className="flex items-center overflow-hidden  lg:min-h-24 lg:min-w-24 h-24">
                            <div className="w-full font-semibold text-md mr-3">Lets <span className='font-extrabold'>not</span> add emojis</div>
                            <p className='text-6xl ml-3'>🤷‍♂️</p>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="emojis-yes" name="hosting" value="yes" className="hidden peer" onChange={(e) => setEmojis(e.target.value)} />
                        <label htmlFor="emojis-yes" className="inline-flex items-center justify-between w-full p-5 text-black bg-transparent border-1  border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700  transition ease-in-out hover:scale-105 duration-300">
                          <div className="flex items-center lg:min-h-24 lg:min-w-24 overflow-hidden h-24">
                            <div className="w-full font-semibold text-md mr-3">Yes, let's include the necessary emojis</div>
                            <p className='text-6xl ml-1'>😌</p>
                          </div>
                        </label>
                      </li>
                    </ul>


                     
                




                  </div>

                  <div className = "mt-8 flex-col gap-y-4 grid justify-items-end">
                      <button onClick={handleGenerateCopy} className='active:scale-[.97] active: duration-300 hover:scale-[1.01 ease-in-out] transition-all py-3 rounded-md bg-gradient-to-tr from-green-300 to-blue-500 shadow-md text-white text-24 font-bold w-3/12 ease-in-out hover:scale-105'> Submit </button>               
                      
                  </div>
              </div>
          </div>

            </div>
            </div>
            <div className=' flex-wrap h-full lg:w-1/2 md:w-full sm:w-full bg-white'>


              <div className='mt-24 pt-6'>
              <label className='font-bold text-xl pt-2'>AI Output</label>

              <div className=''>
                <textarea
                className='block mt-3 p-2.5 w-full text-md text-gray-a900 bg-transparent rounded-lg border-2 border-gray-200 focus:ring-blue-500 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:italic '
                rows='16'
                placeholder='Our AI will output your ad copy here.'
                value={copyOutput}
                />

                  {/* <div className = "mt-8 flex-col gap-y-4 grid ">
                      <button onClick={handleGenerateCopy} className=' items-start active:scale-[.97] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all py-3 rounded-md  shadow-md text-white text-24 font-bold w-3/12 '> Save </button>               
                      <button onClick={handleGenerateCopy} className=' items-end active:scale-[.97] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all py-3 rounded-md bg-black shadow-md text-white text-24 font-bold w-3/12 '> Submit </button>               
                      
                  </div> */}
                  <div className = "mt-8 flex-col gap-y-4 grid justify-items-end">
                      
                      
                  </div>


                

              {/* <form onSubmit={AiPrompt}>
                    <textarea
                      value={copyOutput}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Generated prompt will appear here"
                    />
                    <button type="submit">Generate Prompt</button>
                  </form> */}

                {/* Todo: implementer copy button */}

              </div>

              </div>

            </div>
        </div>

      
      </div>  
  )
}

export default WriteCopy