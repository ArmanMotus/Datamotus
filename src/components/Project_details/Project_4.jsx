import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'


const Project_4 = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <div className='about__wrapper'>
            <div className='about__content'>
                <h5 className='subtitle'>Developing a Real-Time Visualization Tool for Survey Monitoring </h5>
                <h5 className='subtitle'>using R shiny</h5>

                <br></br>
                
                <h2 className='subheader'>Background: 
                <p className='description about__content-desc'> 
                The project was executed over a period of October 2020 to October 2021 and involved the development of a tailored application to allow enumerators 
                to submit panel data collected on a monthly basis, either online or offline, using a variety of devices such as smartphones, iPads, 
                Android tablets, or computers. 
                The application was designed to be user-friendly and intuitive, making it easy for enumerators to submit their data accurately and efficiently
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Objective:
                <p className='description about__content-desc'>
                The goal of the project was to develop a visualization tool for survey monitoring 
                to support their efforts in monitoring and evaluating the well-being of families and children in Libya.
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Data Visualization:
                <p className='description about__content-desc'>
                The project involved the development of an online tool/dashboard to visualize survey results. 
                The tool provided real-time monitoring and visualization of the results, enabling UNICEF to quickly and effectively 
                analyze and act on the data collected. The tool was integrated with kobotoolbox, a widely used survey questionnaire platform, 
                via API, allowing for seamless data transfer between the two systems.
                </p>
                </h2>  
                <br></br> <br></br>

                <h2 className='subheader'>Data Analysis: 
                <p className='description about__content-desc'>
                The project involved the development of functionality that triangulated the survey data with the qualitative results 
                of interviews based on text mining and natural language programming techniques. 
                This provided a more comprehensive view of the data collected and allowed for deeper insights into the well-being of families and children in Libya.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Weighting Strategy:     
                <p className='description about__content-desc'>
                The project also involved the development of a weighting strategy for the sampling among Libyan households, ensuring that the results accurately reflected the population being studied.              
                Finally, our team provided training to the survey enumerators, equipping them with the necessary skills and knowledge to effectively carry out their work.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Outcome:    
                <p className='description about__content-desc'>
                The end result of this project was a powerful visualization tool that provided UNICEF with valuable insights into the well-being of families and 
                children in Libya. The tool was instrumental in improving the efficiency of the data collection and analysis 
                process and provided UNICEF with the information they needed to make informed decisions and take effective action.
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
export default Project_4;
