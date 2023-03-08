import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { Ecommerce} from './pages';

import { useStateContext } from './contexts/ContextProvider';


import './App.css';
import Dashboard from './pages/Dashboard';
import {Login} from "./components/Login"
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';

const App = () => {
  const {activeMenu} = useStateContext();

  
  
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        
            

            <div>
              <Routes>

                {/* Dashbboard */}
                <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} />
                <Route path="/ecommerce" element={<Ecommerce/>} />

                
                {/* Pages */}
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>}  />
                {/* <Route path="/orders" element='test' />
                <Route path="/employees" element='test' />
                <Route path="/customers" element={<Customers/>} /> */}

                {/* Apps */}
                {/* <Route path="/kankan" element='test' />
                <Route path="/editor" element='test' />
                <Route path="/calendar" element='test' />
                <Route path="/color-picker" element='test' /> */}

                {/* Charsts  */}
                {/* <Route path="/line" element='test' />
                <Route path="/area" element='test' />
                <Route path="/bar" element='test' />
                <Route path="/pie" element='test' />
                <Route path="/financial" element='test' />
                <Route path="/color-mapping" element='test' />
                <Route path="/pymarid" element='test' />
                <Route path="/stacked" element='test' /> */}
              </Routes>
            </div>


      
        </BrowserRouter>
      </AuthProvider>
 
    </div>
  )
}

export default App;