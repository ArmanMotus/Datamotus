import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import Slider from '../UI/Sliders/Photos_slider_IRI'


const RA = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lister'>Types of variables.</li>
                    <li className='lister'>Visualization of numeric variables.</li>
                    <li className='lister'>Visualization of categorical variables.</li>
                    <li className='lister'>Visualization of the relationship between numeric and categorical variables, categorical variables, numeric variables.</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img_1'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
        <Slider />

    </div>
</section>

    
  )
}
export default RA;
