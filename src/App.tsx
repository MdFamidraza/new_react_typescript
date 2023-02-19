import React from 'react';
import './App.css';
import Login from '../src/components/feature/Login/Login'
import Createpassword from "../src/components/feature/Createpassword/Createpassword"
import {Routes,Route } from 'react-router-dom';
const App: React.FC= ()=> {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/createpassword' element={<Createpassword/>}/>

      </Routes>
     
    
    </div>
  );
}

export default App;
