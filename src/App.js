import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from './components/UI/Scrolling/Scroll';
import ReactGA from 'react-ga';

// Import your components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/UI/home';
import Projects from './components/UI/Projects';
import About from './components/UI/About';
import Services from './components/UI/Services';
import Trainings from './components/UI/Training';
import Blog from './components/UI/blog';
import Contact from './components/UI/Contact';
import Casestudies from './components/UI/casestudies';
import Article_1 from './components/Blog_details/Blog1';
import Article_2 from './components/Blog_details/Blog2';
import Article_3 from './components/Blog_details/Blog3';
import Article_4 from './components/Blog_details/Blog4';
import Article_5 from './components/Blog_details/Blog5';
import Article_6 from './components/Blog_details/Blog6';
import Casestudy_1 from './components/CaseStudies_details/casestudy1';
import Casestudy_2 from './components/CaseStudies_details/casestudy2';
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

// Import your styles
import './App.css';

// Initialize Google Analytics with your tracking ID
ReactGA.initialize('G-8GV87DJL6E'); // Replace with your actual Google Analytics tracking ID

// Hook to track page views using Google Analytics
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Send a page view event whenever the URL changes
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

function App() {
  const [theme, setTheme] = useState('');

  // Toggle between themes (light/dark or default)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === '' ? 'light-theme' : ''));
  };

  // Call the hook to track page views
  usePageTracking();

  return (
    <>
      {/* Scroll to top on page change */}
      <ScrollToTop />

      {/* Header component with theme toggling */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Define the routes for different components */}
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
        {/* Add other project and training routes as needed */}
      </Routes>

      {/* Footer component */}
      <Footer />
    </>
  );
}

// Root component to wrap everything inside the Router
function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
