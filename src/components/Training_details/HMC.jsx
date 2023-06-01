import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'


const HMC = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lister'>Introduction to R programming language.</li>
                    <li className='lister'>Data structures in R.</li>
                    <li className='lister'>Importing and exporting data in R.</li>
                    <li className='lister'>Data visualization with R and grammar of graphics.</li>
                    <li className='lister'>Univariate and multivariate statistics with R.</li>
                    <li className='lister'>Time series analysis with R.</li>
                    <li className='lister'>Creating reproducible research with R markdown</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img_1'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
    </div>
</section>

    
  )
}
export default HMC;
