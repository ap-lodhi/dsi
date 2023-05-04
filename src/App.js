
import { Route, Router, Routes } from 'react-router-dom';
import  Navbar from './Componets/Navbar';
import { Services } from './pages/Services';
import { Technology } from './pages/Technology';
import { About } from './pages/About';
import { Client } from './pages/Client';
import { Partner } from './pages/Partner';
import IoIosArrowDown from "react-icons"

function App() {
  return (
    <>
    <Navbar/> 
  
      <Routes>

        <Route path='/services' element={<Services/>}></Route>
        <Route path='/product' element={<Services/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/client' element={<Client/>}></Route>
        <Route path='/partner' element={<Partner/>}></Route>
      </Routes>
    
    </>
  );
}

export default App;
