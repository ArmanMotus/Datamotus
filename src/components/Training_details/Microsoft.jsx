import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import Slider from '../UI/Sliders/Photos_Slider_MIC'


const Microsoft = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lister'>R for Data Science.</li>
                    <li className='lister'>Python for Data Science.</li>
                    <li className='lister'>Data visualization with R and Python.</li>
                    <li className='lister'>Machine Learning with R.</li>
                    <li className='lister'>Machine Learning with Python.</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img_1'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>

        <Slider/>
    </div>
</section>

    
  )
}
export default Microsoft;
