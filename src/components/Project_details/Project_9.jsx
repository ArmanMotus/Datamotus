import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'


const Project_9 = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <div className='about__wrapper'>
            <div className='about__content'>
                <h5 className='subtitle'> Deployment and Implementation of LMS System for GIZ</h5>
                <br></br>
                
                <h2 className='subheader'>Client: 
                <p className='description about__content-desc'> 
                GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit) Dates: January 2019 – April 2019

                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Dates:
                <p className='description about__content-desc'>
                May 2021 – December 2022
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Background:
                <p className='description about__content-desc'>
                GIZ engaged with BehaviouralStrategy LLC to develop and implement a Learning Management System (LMS) for their employees and partners. 
                The project aimed to improve the efficiency of GIZ's training and knowledge management processes.
                </p>
                </h2>  
                <br></br> <br></br>

            


                <h2 className='subheader'>Tasks: 
                <p className='description about__content-desc'>
                Requirements Analysis: BehaviouralStrategy LLC conducted a thorough requirements analysis 
                to understand the specific needs and requirements of GIZ for the LMS system. 
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Prototyping:    
                <p className='description about__content-desc'>
                Based on the requirements analysis, the team created a prototype of the LMS solution that would meet the specific needs of GIZ. 
                The prototype was reviewed and approved by the client before moving to the next stage.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Deployment and Setup:    
                <p className='description about__content-desc'>
                The team deployed and set up the Moodle LMS on the server of the Ministry Of Territorial Administration And Infrastructure Of RA.
                 The deployment process was completed within the specified timeline and budget.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Training:    
                <p className='description about__content-desc'>
                BehaviouralStrategy LLC organized trainings on Moodle usage and functionality for state and municipality employees to ensure that they could effectively use the new system. 
                The training sessions were well received and received positive feedback from the participants.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Backstopping Support:    
                <p className='description about__content-desc'>
                The team provided backstopping support to ensure that the LMS was functioning optimally and to address any issues that arose during the implementation process.
                </p>
                </h2>

                
            </div>
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
            </div>
        </div>
    </div>
</section>

    
  )
}
export default Project_9;
