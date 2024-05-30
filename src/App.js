import React, { useState } from 'react'
import Navbar from './Navbar'
import Alerts from './Alerts'
import TextUtils from './TextUtils'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Router,
} from "react-router-dom";
import About from './About';
function App() {
  const [mode,setMode]=useState('light');
  const modechanger=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      document.title="TextUtils in dark mode";
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title="TextUtils should be Installed";
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title="TextUtils in light mode";
    }
  }
  return (
    <div>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} modechanger={modechanger}/>
      <Alerts/>
      <Routes>
        <Route path="/" element={<TextUtils heading="Enter you text here"/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
      
      

      
    </div>
  )
}
export default App;
