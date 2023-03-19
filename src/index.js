import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App';
import ScrollToTop from "./components/UI/Scrolling/Scroll";


ReactDOM.render(
  <Router >
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("root")
);

