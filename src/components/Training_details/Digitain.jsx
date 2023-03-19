import React from 'react'
import '../../styles/projectDet.css';  


const Digitain = () => {
  return (
    <section >
    <div className='container'>
        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lists'>Introduction to R programming and Statistical learning.</li>
                    <li className='lists'>Design of Experiments.</li>
                    <li className='lists'>Analysis of the experiment results: Hypothesis testing.</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
    </div>
</section>

    
  )
}
export default Digitain;
