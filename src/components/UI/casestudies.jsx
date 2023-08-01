import React from 'react'
import '../../styles/casestudies.css';
import BackButton from './Scrolling/Back';
import { useNavigate } from "react-router-dom";

const casestudiesData = [
  { icon: 'ri-bank-fill', title: "Case Study 1", link: 'casestudy1', desc: "Brief description of case study 1" },
];

const Casestudies = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (link) => {
    navigate(link);
  }

  return (
    <section>
      <div className="container">
        <div><BackButton /></div>
        <div className="casestudies__top-content">
          <h6 className="subtitle">Our Case Studies</h6>
        </div>
        <div className="casestudies__item-wrapper">
          {
            casestudiesData.map((study, index) => (
              <div className="casestudies__item" key={index} onClick={() => handleNavigation(study.link)}>
                <span className="casestudies__icon">
                  <i className={study.icon}></i>
                </span>
                <div className="casestudies__title">{study.title}</div>
                <p className="description">{study.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Casestudies;
