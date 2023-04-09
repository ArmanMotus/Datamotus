import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import aboutImg from '../../images/bootcamp.png'

const Project_10 = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <div className='about__wrapper'>
            <div className='about__content'>
                <h5 className='subtitle'> Microsoft Innovation Center </h5>
                <h5 className='subtitle'>Data Science Bootcamp </h5>'
                <br></br>
                
                <h2 className='subheader'> 
                <p className='description about__content-desc'> 
                The Microsoft Innovation Center in Armenia approached us to conduct a six-month data science bootcamp for their students. 
                The aim was to provide students with the knowledge and skills to work on real-world machine learning projects. 
                We were tasked with developing an entry exam, creating a curriculum based on Student Learning Outcomes (SLO), 
                developing lectures and learning materials, and supervising student projects.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>
                <p className='description about__content-desc'>
                We began by creating an entry exam to ensure that students had a foundational understanding of programming and statistics. 
                After evaluating the results of the exam, we developed SLOs and assessment methods. 
                The SLOs were based on the core concepts and skills required for data science and machine learning.                
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>
                <p className='description about__content-desc'>
                Using the SLOs, we developed a comprehensive curriculum that covered the following topics:</p> 
                <ul>
                    <li className='lists'>Introduction to R programming for Data Science.</li>
                    <li className='lists'>Introduction to Python for Data Science.</li>
                    <li className='lists'>Supervised and Unsupervised Machine Learning with Python/R. </li>
                    <li className='lists'>Data Visualization with R and Python.</li>

                </ul>
                
                
                <p className='description about__content-desc'>We developed learning materials for each topic, including lecture slides, exercises, and project assignments.</p>
                
                </h2>  
                <br></br> <br></br>

                <h2 className='subheader'> 
                <p className='description about__content-desc'>
                To ensure that students could apply their knowledge to real-world projects, we provided project supervision and guidance. 
                Students were required to develop a machine learning project of their own choosing, based on their interests and skills. 
                We provided feedback and guidance throughout the project development process, ensuring that each project met the required standards.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>    
                <p className='description about__content-desc'>
                Over the course of the six-month bootcamp, students gained the skills and knowledge required to work on real-world machine learning projects. 
                At the end of the bootcamp, we held a final project presentation day, where students presented their projects to a panel of industry experts.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>    
                <p className='description about__content-desc'>
                The success of the bootcamp was due to the comprehensive curriculum and project supervision. 
                The students gained a deep understanding of the core concepts and skills required for data science and machine learning. 
                They were able to apply their knowledge to real-world projects, providing them with valuable experience and skills. 
                The final project presentation day was a success, 
                with each student demonstrating their understanding of machine learning concepts and their ability to apply them in practice.
                </p>
                </h2>

                <br></br> <br></br>

                <h2 className='subheader'>    
                <p className='description about__content-desc'>
                This bootcamp is an example of our capability to provide comprehensive corporate training in data science. 
                Our curriculum development and project supervision ensure that students gain the skills and knowledge required for real-world machine learning projects. 
                We can tailor our training programs to meet the specific needs of companies, ensuring that their employees gain the skills required to succeed in their roles.

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
export default Project_10;
