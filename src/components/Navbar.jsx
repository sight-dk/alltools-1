import React, {useEffect, useState} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar4.jpg';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ( {title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type="button" onClick={customFunc} className="relative text-xl rounded-full p-3 hover:bg-light-gray text-green-300">
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2 '
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { 
    activeMenu, setActiveMenu, 
    isClicked, setIsClicked, 
    handleClick,
    screenSize, setScreenSize 
  } = useStateContext();
    
  useEffect (() => {
    const handleResize = () => setScreenSize (window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } 
    else {
        setActiveMenu(true);
      }
  }, [screenSize]);
  
  return (
    <div className='flex justify-between pd-2 md:mx-3 relative'>
      <NavButton title='Menu' customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color='green-300' icon={<AiOutlineMenu />}  />
    
    <div className='flex'>

      

      <TooltipComponent content='Profile' position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-3 hover:bg-light-gray rounded-lg justify-between' 
        onClick={() => handleClick('userProfile')}>
          <img src="src/data/avatar4.jpg" className='rounded-full w-8 h-8'/>
          <p className='flex' position='BottomCenter'>
          <span className='text-gray-400 text-14'>Hi, </span> {' '} 
          <span className='text-gray-400 font-bold ml-1 text-14'> Michael</span>
          <MdKeyboardArrowDown className='text-gray-400 text-20' />
          </p>
        </div>

      </TooltipComponent>

      {isClicked.chat && <UserProfile />}
    </div>
    
    </div>
  )
}

export default Navbar;