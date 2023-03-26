import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'


const Europe = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <h2 className='subheaderTrain'>Short description of the training:</h2> 
                <ul className='description'>
                    <li className='lists'>Kirkpatrick’s four levels of training evaluation.</li>
                    <li className='lists'>Efficient questionnaire design.</li>
                    <li className='lists'>Choice of most important variables.</li>
                    <li className='lists'>Choice of data collection methods.</li>
                    <li className='lists'>Choice of operationalization.</li>
                    <li className='lists'>Variable scales.</li>
                    <li className='lists'>Data Analysis</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
    </div>
</section>

    
  )
}
export default Europe;
