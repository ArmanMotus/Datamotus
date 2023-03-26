import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'


const RA = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lists'>Types of variables.</li>
                    <li className='lists'>Visualization of numeric variables.</li>
                    <li className='lists'>Visualization of categorical variables.</li>
                    <li className='lists'>Visualization of the relationship between numeric and categorical variables, categorical variables, numeric variables.</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
    </div>
</section>

    
  )
}
export default RA;
