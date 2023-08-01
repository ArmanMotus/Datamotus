import React from 'react'
import BackButton from '../UI/Scrolling/Back';
import '../../styles/caseStudiesDet.css';

const Casestudy_1 = () => {
    return (
      <section >
      <div className = 'container'>
      <div><BackButton /></div>     
          <div className='about__wrapper'>
              <div>
                  <h5 className='subtitle_services'>Title of Case Study 1</h5>
                  <br></br>
  
                  {/* Background */}
                  <h2 className='subheader'>Description: 
                  <p className='description about__content-desc'> 
                  Description of the background for Case Study 1.
                  </p>
                  </h2>
                  <br></br> <br></br>
  
                  {/* Other headers and descriptions go here */}
  
                  {/* Conclusion */}
                  <h2 className='subheader'>Other    
                  <p className='description about__content-desc'>
                  Conclusion of the case study.
                  </p>
                  </h2>
  
                  {/* Download Button */}
                  <div style={{ marginTop: "20px" }}>
                      <a href={`${process.env.PUBLIC_URL}/USA_Connecticut.pdf`} 
                         download 
                         className='back-button'>
                          <span className='back-icon'></span>
                          Download PDF
                      </a>
                  </div>
                  
              </div>
          </div>
      </div>
  </section>
    )
  }
  export default Casestudy_1;