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
                  <h5 className='subtitle_services'>AI-Driven Market Segmentation: Discovering Intelligent Profiling for Effective Market Segmentation </h5>
                  <br></br>
  
                  {/* Background */}
                  <h2 className='subheader'>Description: 
                  <p className='description about__content-desc'> 
                  Discover the power of AI-driven market segmentation with Datamotus' latest case study. Dive deep into the world of intelligent profiling and understand how effective market segmentation can revolutionize your business approach. 
                  Leveraging advanced technologies like LLM, this case study showcases the seamless integration of ChatGPT with marketing analytics, offering businesses a competitive edge in understanding and targeting their audience.
                  </p>
                  </h2>
                  <br></br> <br></br>
  
                  {/* Other headers and descriptions go here */}
  
                  {/* Conclusion */}
                  {/* <h2 className='subheader'>Other    
                  <p className='description about__content-desc'>
                  Conclusion of the case study.
                  </p>
                  </h2>
   */}
                  {/* Download Button */}
                  <div style={{ marginTop: "20px" }}>
                      <a href={`${process.env.PUBLIC_URL}/AI-Driven-Seg-Presentation.pdf`} 
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