import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import aboutImg from '../../images/study.png'

const Project_8 = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <div className='about__wrapper'>
            <div >
                <h5 className='subtitle_services'>Dashboard for Subject Contests</h5>
                <br></br>
                
                <h2 className='subheader'>Introduction: 
                <p className='description about__content-desc'> 
                Ayb Foundation, a renowned educational organization in Armenia, was in need of a dashboard solution to visualize the results of three school 
                Subject Contests. The company approached a software development company to develop an interactive, web-based dashboard to help them keep track of 
                the results of the Kangaroo (Mathematics), Arjuk (Russian language), and Meghu (Armenian Language) Subject Contests.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Project Details:
                <p className='description about__content-desc'>
                The project was started in May 2020 and was completed in September 2020. The following tasks were accomplished to deliver the solution:
                </p>  
                <ul >
                    <li className='lists'>R Script for Data Cleaning: </li> 
                    <p className='lists'>The first step was to create an R script for data cleaning and preparation. This step was crucial in ensuring that the data was accurate and usable for further analysis.</p> 
                    <li className='lists'>Development of Wireframe:</li> 
                    <p className='lists'> The wireframe was developed in collaboration with the client to ensure that the final product met their requirements. The wireframe was updated based on user feedback to make the final product as user-friendly as possible.</p>
                    <li className='lists'>Development of R Shiny Dashboard:</li> 
                    <p className='lists'> The R shiny dashboard was developed to provide an interactive solution for data visualization. The dashboard was equipped with built-in data cleaning and preparation capabilities to make the analysis process smoother.</p>        
                    <li className='lists'>Interactive Hypotheses Testing Platform:</li> 
                    <p className='lists'>The dashboard also included an interactive hypotheses testing platform that allowed for the comparison of different populations based on different variables such as sex, residence, etc.</p>
                </ul>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Outcome:    
                <p className='description about__content-desc'>
                The project was a success, and the Ayb Foundation was able to efficiently monitor and analyze the results of the contests with the help of the R shiny dashboard. 
                The dashboard was easy to use and provided real-time insights into the performance of students.

                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Conclusion:    
                <p className='description about__content-desc'>
                The development of the Dashboard for contests results project demonstrated the potential of using modern technologies to analyze and visualize data efficiently. 
                The project was a success and delivered the desired outcome for the Ayb Foundation. 
                The dashboard was user-friendly and provided valuable insights into the performance of students in the contests.
                </p>
                </h2>    

            </div>
            <div className='about__img'>
                <img src={aboutImg} alt="" />
            </div>
        </div>
    </div>
</section>

    
  )
}
export default Project_8;
