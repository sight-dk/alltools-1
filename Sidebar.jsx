import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links, linksComing } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import Typewriter from 'typewriter-effect';

import '../pages/pagesStyle.css';

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize} = useStateContext();
  
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }
  
  
  const activeLink = 'ml-6 flex items-center gap-2 pl-4 pt-2 pb-2 rounded-lg font-semibold text-white text-md m-2 bg-gradient-to-r from-green-300 to-blue-500 ease-out duration-500 shadow-2xl ';
  
  const normalLink = 'ml-6 flex items-center gap-2 pl-4 pt-2 pb-2 rounded-lg font-semibold text-black text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 active:scale-[.98] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all ';
  
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
      <div className='flex justify-between items-center mt-15'>
        <Link to="/Dashboard" onClick={() => handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-3xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          {/* <SiShopware />  */}
          <div className="ml-4 w-5 h-5 bg-gradient-to-tr from-green-300 to-blue-500 rounded-full animate-bounce"></div> 
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500'>AllTools</span>
          {/* <span className='pb-2 rotate-12'>🔨</span> */}
          {/* <img src={require("../../src/data/AT Logo.png")} style={{width: 75, height: 75}} className='ml-2'/>  */}
        </Link>
        
      </div>
      <div className='mt-10'>
        {links.map((item) => (
              <div key={item.title}>
          <p className='text-gray-400 m-3 mt-4 uppercase'>
            {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink to={`/${link.dest}`} key={link.name} onClick={(handleCloseSideBar)} className={({isActive} ) => isActive ? activeLink : normalLink}>
                
                {link.icon} 
                <span className='capitalize '>{link.name} </span>
              </NavLink>
              
            ))}
              
            
          </div>
        ))}
        



        <div className='mr-3 pb-3'>
        {linksComing.map((item) => (
              <div key={linksComing.dest}>
          <p className='ml-3 mr-3 mt-8 uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500'>{item.title}</p>      
          <p className='text-gray-400 italic ml-10 mr-3 mt-2 uppercase'>
          <Typewriter
            options={{
              strings: [item.title2, item.title3],
              autoStart: true,
              loop: true,
            }}
          />
            </p>                       
          </div>
        ))}

        </div>

        

        
        
      </div>
      </>) }
    </div>
  )
}

export default Sidebar