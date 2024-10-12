import React, { useState, useEffect } from 'react';
import ScrollToTop from './components/UI/Scrolling/Scroll';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import BackButton from '../src/components/UI/Scrolling/Back';
import ReactGA from 'react-ga';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/UI/home';
import Projects from './components/UI/Projects';
import About from './components/UI/About';
import Services from './components/UI/Services';
import Trainings from './components/UI/Training';
import Blog from './components/UI/blog';
import Article_1 from './components/Blog_details/Blog1';
import Article_2 from './components/Blog_details/Blog2';
import Article_3 from './components/Blog_details/Blog3';
import Article_4 from './components/Blog_details/Blog4';
import Article_5 from './components/Blog_details/Blog5';
import Article_6 from './components/Blog_details/Blog6';
import Contact from './components/UI/Contact';
import Casestudies from './components/UI/casestudies';
import Casestudy_1 from './components/CaseStudies_details/casestudy1';
import Casestudy_2 from './components/CaseStudies_details/casestudy2';
import Project_2 from './components/Project_details/Project_2';
import Project_3 from './components/Project_details/Project_3';
import Project_4 from './components/Project_details/Project_4';
import Project_5 from './components/Project_details/Project_5';
import Project_6 from './components/Project_details/Project_6';
import Project_7 from './components/Project_details/Project_7';
import Project_8 from './components/Project_details/Project_8';
import Project_9 from './components/Project_details/Project_9';
import Project_10 from './components/Project_details/Project_10';
import Project_11 from './components/Project_details/Project_11';
import Project_12 from './components/Project_details/Project_12';
import Project_13 from './components/Project_details/Project_13';
import Project_14 from './components/Project_details/Project_14';
import Project_15 from './components/Project_details/Project_15';
import Project_16 from './components/Project_details/Project_16';
import Armstat from './components/Training_details/Armstat';
import Byblos from './components/Training_details/Byblos';
import CRRC from './components/Training_details/CRRC';
import HMC from './components/Training_details/HMC';
import Europe from './components/Training_details/Europe';
import Microsoft from './components/Training_details/Microsoft';
import RA from './components/Training_details/RA';
import WVA from './components/Training_details/WVA';
import Digitain from './components/Training_details/Digitain';
import Ameria from './components/Training_details/Ameria';
import VIVA from './components/Training_details/VIVA';

ReactGA.initialize('G-8GV87DJL6E'); // Initialize Google Analytics

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme(theme === '' ? 'light-theme' : '');
  };

  // Track page views including the hash (for pages with fragments)
  useEffect(() => {
    const pagePath = location.pathname + location.search + location.hash;
    ReactGA.pageview(pagePath);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/projects" element={<Projects theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/about" element={<About theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/services" element={<Services theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/trainings" element={<Trainings theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/contact" element={<Contact theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/casestudies" element={<Casestudies theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/casestudies/casestudy1" element={<Casestudy_1 />} />
        <Route path="/casestudies/casestudy2" element={<Casestudy_2 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/Optimization_Modeling_for_Store_Product_Clustering_and_EOQ_Determination" element={<Article_1 />} />
        <Route path="/blog/Weighted_Least_Square" element={<Article_2 />} />
        <Route path="/blog/Shapley_Value_Regression" element={<Article_3 />} />
        <Route path="/blog/Changes_in_air_pollution" element={<Article_4 />} />
        <Route path="/blog/Outlier_Detection_in_Air_Pollution_Data" element={<Article_5 />} />
        <Route path="/blog/Propensity_Score_Matching" element={<Article_6 />} />
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
        <Route path="/trainings/armstat" element={<Armstat />} />
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
