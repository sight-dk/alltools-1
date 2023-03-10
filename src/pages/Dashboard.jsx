import React, { useEffect, useState } from 'react';
import { earningData, SparklineAreaData, ecompi, users } from '../data/dummy';
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import { Button } from '../components';

const Dashboard = () => {
  <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api');
      const {results} = await res.json();
      setData(results);
      
    };
    fetchData();
  }, []);
  
  
  return (
    <div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl p-8 pt-9 m-10 mt-2 h-screen w-full relative shadow-lg'>
          {/* Welcome text */}

          {/* Top */}
          <div className='absolute top-0 left-0 p-24 bg-gray-800 p-2 w-full rounded-t-3xl pb-30 flex'>


            {/* Left side */}
            <div className='w-3/4 flex-wrap justify-between'>


            <p className='font-serif text-9xl text-white text-shadow-lg'>Hey,</p>

            {/* const {item.name.first} = firstName

            {(data.map((item,index)=>{
              //  const [gender, name] = item;
              return(
                <>
                <div className="font-mono font-bold text-9xl mt-5" key={index}>
                <p>
                {item.name.first}
                <span className='font-normal'>.</span>
                </p>
                </div>
                </>
                )
              }))} */}
              
              <div className="font-display font-semibold text-9xl mt-5 opacity-100 text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500">    
                  <Typewriter
                  options={{
                    strings: ['Riccardo.'],  
                    autoStart: true,
                    loop: true,
                    pauseFor: '2500'
                  }}/>
                  {/* <p className='font-normal'>.</p> */}
              </div>
            
                  </div>

              {/* Right side */}
              <div className='w-1/4'>
                {/* <Button 
                // bgColor='white'
                gradient='bg-gradient-to-r from-gray-100 to-gray-300'
                color='black'
                borderRadius='lg'
                text='View your reports'
                className='font-bold'
                
                /> */}
              </div>

          </div>

          {/* Bottom */}

          <div>

          </div>

        </div>
      </div>  
      </div>
    
  )
}

export default Dashboard