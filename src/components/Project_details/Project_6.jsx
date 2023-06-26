import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import aboutImg from '../../images/rapid_covid.png'
import projectImg from '../../images/Projects/project_6.png'

const Project_6 = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <div className='about__wrapper'>
            <div >
                <div className='about__img'><img src = {projectImg}></img></div>                
                <h5 className='subtitle_services'>Rapid Nationwide Community Assessment on the Socio-Economic Impact of COVID-19 outbreak</h5>
                <br></br>
                
                <h2 className='subheader'>Background: 
                <p className='description about__content-desc'> 
                In response to the outbreak of COVID-19, UNDP, UNAID, and UNFPA collaborated to carry out a nationwide survey of 3,000 households in Armenia. 
                The goal of the survey was to understand the socio-economic impact of the pandemic on the community. 
                The survey was carried out between May and September 2020 and involved several key tasks, including:
                </p>
                <ul className = 'lister'>
                    <li  className='description about__content-desc'>Adaptation of the UN WOMEN questionnaire to fit the Armenian context, based on a pilot study.</li> 
                    <li  className='description about__content-desc'>Development of a sampling methodology and sample.</li> 
                    <li  className='description about__content-desc'>Deployment of the questionnaire on the Kobotoolbox platform.</li> 
                    <li  className='description about__content-desc'>Online training for 40 interviewers on the usage of Kobotoolbox and data collection in general.</li> 
                    <li  className='description about__content-desc'>Quality check of the collected data.</li> 
                    <li  className='description about__content-desc'>Analysis of the results and report generation.</li> 
                    <li  className='description about__content-desc'>Development of an interactive online tool/dashboard for data analysis and visualization of future surveys. </li>
                </ul>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Data Analysis and Visualization:
                <p className='description about__content-desc'>
                The online tool/dashboard was designed with several key features to facilitate data analysis and visualization, including:
                </p> 
                <ul className = 'lister'>
                    <li  className='description about__content-desc'>Connection to Kobotoolbox either via API or direct input of data extracted from the platform.</li> 
                    <li  className='description about__content-desc'>Basic data cleaning capabilities.</li> 
                    <li  className='description about__content-desc'>User interface based on user inputs.</li> 
                    <li  className='description about__content-desc'>Ability to generate PDF reports with given user specifications.</li> 
                </ul>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Outcome:    
                <p className='description about__content-desc'>
                The survey results provided valuable insights into the socio-economic impact of COVID-19 on the Armenian community, 
                enabling UNDP, UNAID, and UNFPA to better understand the challenges faced by the community and implement appropriate response measures.
                The development of the online tool/dashboard also ensured that future surveys could be easily conducted and analyzed in a timely and effective manner.

                </p>
                </h2>


                
            </div>
            {/* <div className='about__img'>
                <img src={aboutImg} alt="" />
            </div> */}
        </div>
    </div>
</section>

    
  )
}
export default Project_6;
