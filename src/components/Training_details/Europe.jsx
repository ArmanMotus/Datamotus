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
                    <li className='lister'>Kirkpatrick’s four levels of training evaluation.</li>
                    <li className='lister'>Efficient questionnaire design.</li>
                    <li className='lister'>Choice of most important variables.</li>
                    <li className='lister'>Choice of data collection methods.</li>
                    <li className='lister'>Choice of operationalization.</li>
                    <li className='lister'>Variable scales.</li>
                    <li className='lister'>Data Analysis</li>
                </ul> 
                <br></br> <br></br>
                
            
            <div className='about__img_1'>
                {/* <img src={aboutImg} alt="" /> */}
        </div>
    </div>
</section>

    
  )
}
export default Europe;
