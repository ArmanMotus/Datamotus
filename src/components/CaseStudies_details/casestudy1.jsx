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
                  <h5 className='subtitle_services'>Bank customers clustering based on transaction categories</h5>
                  <br></br>
  
                  {/* Background */}
                  <h2 className='subheader'>Description: 
                  <p className='description about__content-desc'> 
                  In our latest case study, we delve into the transformative power of cluster analysis in the banking sector. Through a meticulous analysis, we've explored how segmenting bank customers based on transactional behaviors and demographics can significantly enhance profitability and refine marketing strategies. This comprehensive study not only reveals insightful patterns and trends but also provides actionable strategies for financial institutions. By harnessing the potential of data-driven insights, banks can offer more personalized services, attract new customers, and promote specific products more effectively. 
                  Dive into our findings to discover how modern data analytics can revolutionize customer engagement and drive business growth..
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
                      <a href={`${process.env.PUBLIC_URL}/Bank customers clustering based on transaction categories.pdf`} 
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