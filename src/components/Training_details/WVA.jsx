import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'


const WVA = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lists'>Introduction to R programming for Statistical Analysis: Data Structures, Data types, basic operations.</li>
                    <li className='lists'>Data Visualization with ggplot2.</li>
                    <li className='lists'>Statistical Analysis of survey results: Regression and hypothesis testing.</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
    </div>
</section>

    
  )
}
export default WVA;
