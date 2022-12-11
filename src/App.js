// import { useEffect, useState } from 'react';
import './App.css';
// import ItemQuotes from './components/ItemQuotes';
import Navbar from './components/Navbar';
// import photo from './img.jpg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './Content';
import Home from './components/Home';
import Self from './components/Self';
function App() {
   return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home key='home' category='home'/>} />
          <Route exact path="/content" element={<Content key='content' category='content' />} />
          {/* <Route exact path="/self-improve" element={<Self key='self-improve' category='self-improve' />} /> */}
        
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

