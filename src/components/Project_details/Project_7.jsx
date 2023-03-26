import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'


const Project_7 = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <div className='about__wrapper'>
            <div className='about_content'>
                <h5 className='subtitle'> Development and Validation of a Proxy Tool to Pre-Screen Offenders for Risk to Reoffend</h5>
                <br></br>
                
                <h2 className='subheader'>Client: 
                <p className='description about__content-desc'> 
                Project Harmony-International, Armenia
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Dates:
                <p className='description about__content-desc'>
                April 2019 – January 2020
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Description:
                <p className='description about__content-desc'>
                The goal of this project was to help Project Harmony-International in Armenia to better assess the risk of reoffending among probationers. 
                To achieve this goal, the following tasks were undertaken:
                </p>  
                <ul >
                    <li className='lists'>Development of the Sampling Methodology: </li> 
                    <p className='lists'> The first step was to develop a sampling methodology that would allow for a representative sample of probationers 
                    to be selected for the study. This was done to ensure that the results of the study would be generalizable to the larger population of probationers in Armenia.</p>
                    <li className='lists'>Descriptive Analysis and Inferential Statistics:</li> 
                    <p className='lists'> Descriptive analysis and inferential statistics were used to reveal the factors that affect the risk of reoffending among probationers. 
                    This was done by analyzing data collected from the selected sample of probationers.</p>
                    <li className='lists'>Development of the Proxy Tool:</li> 
                    <p className='lists'>Based on the findings from the descriptive analysis and inferential statistics, a proxy tool was developed to score probationers on their risk 
                    of reoffending. The tool was designed to be simple and easy to use, allowing probation officers to quickly and accurately assess the risk of reoffending for each probationer.</p>        
                    <li className='lists'>Development of the Validation Strategy:</li> 
                    <p className='lists'> In order to ensure that the proxy tool was accurate and reliable, a validation strategy was developed. This included a thorough assessment of the tool's 
                    validity, reliability, and predictive accuracy.</p>
                    <li className='lists'>Validation of the Tool and Recommendations: </li> 
                    <p className='lists'>The final step was to validate the tool and provide recommendations for its use. The results of the validation showed that the proxy tool was effective 
                    in accurately predicting the risk of reoffending among probationers. Based on these results, recommendations were made for the implementation and use of the tool in practice.
</p>    
                </ul>
                </h2>
                <br></br> <br></br>

                
            </div>
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
            </div>
        </div>
    </div>
</section>

    
  )
}
export default Project_7;
