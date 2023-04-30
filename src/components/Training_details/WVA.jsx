import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import Slider from '../UI/Sliders/photos_sliderWVA'


const WVA = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lister'>Introduction to R programming for Statistical Analysis: Data Structures, Data types, basic operations.</li>
                    <li className='lister'>Data Visualization with ggplot2.</li>
                    <li className='lister'>Statistical Analysis of survey results: Regression and hypothesis testing.</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
        < Slider/>

    </div>
    
</section>

    
  )
}
export default WVA;
