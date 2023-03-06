import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { Ecommerce} from './pages';

import { useStateContext } from './contexts/ContextProvider';


import './App.css';
import Dasbboard from './pages/Dashboard';
import Login from "./components/Login"

const App = () => {
  const {activeMenu} = useStateContext();

  
  return (
   
    <div className = "flex w-full h-screen">
      
      <div className = "w-full flex items-center justify-center lg:w-1/2">
        <Login />
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
        <div className = "w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"></div>
        <div className = "w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>

      </div>
      

    </div>
    

  )
}

export default App;