
import React, {useState,useEffect} from 'react';
import ScrollToTop from './components/UI/Scrolling/Scroll';
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
import Project_1 from './components/Project_details/Project_1'
import Project_2 from './components/Project_details/Project_2'
import Project_3 from './components/Project_details/Project_3'
import Project_4 from './components/Project_details/Project_4'
import Project_5 from './components/Project_details/Project_5'
import Project_6 from './components/Project_details/Project_6'
import Project_7 from './components/Project_details/Project_7'
import Project_8 from './components/Project_details/Project_8'
import Project_9 from './components/Project_details/Project_9'
import Project_10 from './components/Project_details/Project_10'
import Project_11 from './components/Project_details/Project_11'
import Project_12 from './components/Project_details/Project_12'
import Project_13 from './components/Project_details/Project_13'
import Project_14 from './components/Project_details/Project_14'
import Project_15 from './components/Project_details/Project_15'
import Project_16 from './components/Project_details/Project_16'
import Byblos from './components/Training_details/Byblos';
import CRRC from './components/Training_details/CRRC';
import HMC from './components/Training_details/HMC';
import Europe from './components/Training_details/Europe';
import Microsoft from './components/Training_details/Microsoft';
import RA from './components/Training_details/RA';
import WVA from './components/Training_details/WVA';
import Digitain from './components/Training_details/Digitain';

import Ameria from './components/Training_details/Ameria';
import VIVA from './components/Training_details/VIVA'

function App() {

  const [theme, setTheme] = useState('')

  const toggleTheme = ()=>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{document.body.className = theme},[theme])

  return (      
  
    <>   
          
        <ScrollToTop />

        <Header theme={theme} toggleTheme={toggleTheme} />
        
      
      <Routes>
      

        <Route path="/datamotus" element={<Home theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/projects" element={<Projects theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/about" element={<About theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/services" element={<Services theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/trainings" element={<Trainings theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/contact" element={<Contact theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects/Project_1" element={<Project_1 />} />
        <Route path="/projects/Project_2" element={<Project_2 />} />
        <Route path="/projects/Project_3" element={<Project_3 />} />
        <Route path="/projects/Project_4" element={<Project_4 />} />
        <Route path="/projects/Project_5" element={<Project_5 />} />
        <Route path="/projects/Project_6" element={<Project_6 />} />
        <Route path="/projects/Project_7" element={<Project_7 />} />
        <Route path="/projects/Project_8" element={<Project_8 />} />
        <Route path="/projects/Project_9" element={<Project_9 />} />
        <Route path="/projects/Project_10" element={<Project_10 />} />
        <Route path="/projects/Project_11" element={<Project_11 />} />
        <Route path="/projects/Project_12" element={<Project_12 />} />
        <Route path="/projects/Project_13" element={<Project_13 />} />
        <Route path="/projects/Project_14" element={<Project_14 />} />
        <Route path="/projects/Project_15" element={<Project_15 />} />
        <Route path="/projects/Project_16" element={<Project_16 />} />
        <Route path="/datamotus/Project_1" element={<Project_1 />} />  
        <Route path="/datamotus/Project_2" element={<Project_2 />} />  
        <Route path="/datamotus/Project_3" element={<Project_3 />} />  
        <Route path="/datamotus/Project_4" element={<Project_4 />} />  
        <Route path="/datamotus/Project_5" element={<Project_5 />} />  
        <Route path="/datamotus/Project_14" element={<Project_14 />} />  
        <Route path="/datamotus/Project_15" element={<Project_15 />} />  
        <Route path="/datamotus/Project_16" element={<Project_16 />} /> 
        <Route path="/trainings/Byblos" element={<Byblos />} /> 
        <Route path="/trainings/CRRC" element={<CRRC />} /> 
        <Route path="/trainings/HMC" element={<HMC />} /> 
        <Route path="/trainings/Europe" element={<Europe />} /> 
        <Route path="/trainings/Microsoft" element={<Microsoft />} /> 
        <Route path="/trainings/RA" element={<RA />} /> 
        <Route path="/trainings/WVA" element={<WVA />} /> 
        <Route path="/trainings/Digitain" element={<Digitain />} /> 
        <Route path="/trainings/Ameria" element={<Ameria />} /> 
        <Route path="/trainings/VIVA" element={<VIVA />} /> 

      </Routes>

        <Footer />
    

    </>  
    
    
      
      
      
  );
}

export default App;
