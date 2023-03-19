import React from 'react'
import '../../styles/projectDet.css';  


const Microsoft = () => {
  return (
    <section >
    <div className='container'>
        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lists'>R for Data Science.</li>
                    <li className='lists'>Python for Data Science.</li>
                    <li className='lists'>Data visualization with R and Python.</li>
                    <li className='lists'>Machine Learning with R.</li>
                    <li className='lists'>Machine Learning with Python.</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
    </div>
</section>

    
  )
}
export default Microsoft;
