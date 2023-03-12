import React from 'react';
import { useState } from 'react';

import './pagesStyle.css';


const GenReport = () => {
  
  
  
  
  const [link, setLink] = useState('') 
  console.log(link);
  

  function handleSubmit(link, parameters){
    return null
  }

  return (
    <div>
      <div className='flex w-12/12 h-screen bg-white dark:bg-secondary-dark-bg rounded-3xl p-8 pt-9 m-10 mt-2 shadow-lg  overflow-y-auto lg:flex-wrap lg:flex md:flex-col md:flex- sm:flex-col sm:flex-nowrap xs:flex-col flex-col'>
        <div className='w-full flex-nowrap items-center justify-center'>
          <div className='flex-row'>
            
            <div className='w-10/12 h-9/12 flex-row m-5 relative'>

              <h1 className = "text-3xl font-bold mb-16">📝 Generate Report</h1>

            </div>


        
            <div className='flex-row'>

            <p className='font-medium text-lg text-gray-700'>
              Ready to research? A report will give sit amet consectetur adipisicing elit. Voluptas, debitis amet excepturi labore.
              </p>

              <div className='h-full flex justify-center items-center'>
                <div className="col-span-3 sm:col-span-2 mt-24 w-10/12 ">
                  <label htmlFor="company-website" className="block text-xl font-semibold text-gray-900 ml-1 mb-2">Insert link below</label>
                  <div className="mt-2 flex rounded-md shadow-sm ">
                    {/* <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-lg lg:h-16 ">http://</span>
                    <input 
                    type="text" 
                    name="company-website" 
                    value={link}
                    id="company-website" 
                    className="flex-1 rounded-none rounded-r-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg lg:h-16" 
                    placeholder="www.example.com"
                    onChange={e => setLink(e.target.value)}
                    
                    /> */}
                    <input 
                    type="text" 
                    name="company-website" 
                    value={link}
                    id="company-website" 
                    className="flex-1 rounded-l-md rounded-none border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg lg:h-16" 
                    placeholder="www.example.com"
                    onChange={e => setLink(e.target.value)}
                    
                    />
                    <button 
                    className="inline-flex items-center rounded-r-md rounded-none border-l-0 border-2 px-3 text-lg lg:h-16  lg:w-1/12 justify-center font-semibold bg-slate-50 active:scale-[.95] active: duration-300 hover:scale-[1.03] hover:shadow-sm ease-in-out transition-all hover:bg-green-400 hover:text-white"
                    // value={something2}
                    onClick={handleSubmit}
                    >
                      Search
                      </button>
                  </div>
                </div>
              </div>




              <div>
                
              </div>




            </div>


          </div>

        </div>
      </div>  
      </div>
  )
}

export default GenReport