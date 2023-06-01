import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import Slider from '../UI/Sliders/Photos_Slider_Byblus'


const Byblos = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lister'>Introduction to R.</li>
                    <li className='lister'>Data structures in R.</li>
                    <li className='lister'>Train, test, and validate the models.</li>
                    <li className='lister'>Importing and exporting data in R.</li>
                    <li className='lister'>Data visualization with R and grammar of graphics.</li>
                    <li className='lister'>Data Manipulations with R and dplyr.</li>
                    <li className='lister'>Creating reproducible research with R markdown</li>
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
export default Byblos;
