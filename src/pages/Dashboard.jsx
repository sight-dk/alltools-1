import React from 'react'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { Navbar, Footer, Sidebar, ThemeSettings} from '.././components';
import { Ecommerce} from '.././pages';

import { useStateContext } from '.././contexts/ContextProvider';




const Dashboard = () => {
  const {activeMenu} = useStateContext();

  return (
   
    
    <div className='flex relative dark:bg-main-dark-bg'>
      
      <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
        
        <TooltipComponent content='Settings' position='Top'>
          <button type="button" className='text-3xl p-2 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius: '50%'}}>
            <FiSettings type="Button" />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className='flex-none w-72 sidebar dark:bg-secondary-dark-bg bg-white'>
          <Sidebar />
        </div>
      ) : (
        <div className='w-0'>
          <Sidebar />
        </div>
      )}
      <div className={"flex-1 dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}"
        
        }>
          <div className='md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
      
      </div>
    </div>  
  </div>



  )
  
}

export default Dashboard