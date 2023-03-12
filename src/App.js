
import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/UI/home';
import Projects from './components/UI/Projects';
import About from './components/UI/About';
import Services from './components/UI/Services';
import Trainings from './components/UI/Training';
import Blog from './components/UI/blog';
import Contact from './components/UI/Contact'

function App() {

  const [theme, setTheme] = useState('')

  const toggleTheme = ()=>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{document.body.className = theme},[theme])

  return (
    <>    
    
                {/* <Route path='/' element={<Home theme={theme} toggleTheme={toggleTheme}/>} /> */}
                {/* <Route path='about' element={<About />} />
                <Route path='posts' element={<Posts />} /> */}
                        {/* <Header theme={theme} toggleTheme={toggleTheme} /> */}
      <section>
        <Header theme={theme} toggleTheme={toggleTheme} />
      </section>
      <Routes>
        <Route exact path="/datamotus" element={<Home theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/datamotus/projects" element={<Projects theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/about" element={<About theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/services" element={<Services theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/trainings" element={<Trainings theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/contact" element={<Contact theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <section>
        <Footer />
      </section>          
      
    </>  
     
    
    
      
      
      
  );
}

export default App;
