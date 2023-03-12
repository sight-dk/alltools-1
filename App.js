import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { CopyAnalysis, Ecommerce, FindAds, GenReport, ViewCopies, ViewReports, WriteCopy} from './pages';

import { useStateContext } from './contexts/ContextProvider';


import './App.css';
import Dashboard from './pages/Dashboard';


const App = () => {
  const {activeMenu} = useStateContext();

  

  return (

    // askæl
    
    <div>

      
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            {/* <TooltipComponent content='Settings' position='Top'>
              <button type="button" className='text-3xl p-2  hover:shadow-xl hover:bg-light-gray text-white bg-gradient-to-r from-green-300 to-blue-500 ' style={{borderRadius: '50%'}}>
                <FiSettings type="Button" />
              </button>
            </TooltipComponent> */}
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

          <div>
            <Routes>

              {/* Dashboard */}
              <Route path="/" element={<Dashboard/>} />
              <Route path="/Dashboard" element={<Dashboard/>} />


              {/* Reports */}
              <Route path="/genreport" element={<GenReport/>} />
              <Route path="/viewreports" element={<ViewReports/>} />

              {/* CopyWriting */}
              <Route path="/writecopy" element={<WriteCopy/>} />
              <Route path="/viewcopies" element={<ViewCopies/>} />
              <Route path="/copyanalysis" element={<CopyAnalysis/>} />
              

              {/* Facebook & Instagram  */}
              <Route path="/FindAds" element={<FindAds/>} />
            </Routes>
          </div>
          </div>

      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;