import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'


const Byblos = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lists'>Introduction to R.</li>
                    <li className='lists'>Data structures in R.</li>
                    <li className='lists'>Train, test, and validate the models.</li>
                    <li className='lists'>Importing and exporting data in R.</li>
                    <li className='lists'>Data visualization with R and grammar of graphics.</li>
                    <li className='lists'>Data Manipulations with R and dplyr.</li>
                    <li className='lists'>Creating reproducible research with R markdown</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
    </div>
</section>

    
  )
}
export default Byblos;
