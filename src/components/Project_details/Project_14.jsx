import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import aboutImg from '../../images/conjoint.png'
import projectImg from '../../images/Projects/project_14.png'

const Project_14 = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <div className='about__wrapper'>
            <div >
                <div className='about__img'><img src = {projectImg}></img></div>                

                <h5 className='subtitle_services'> Developing a Fully Automated Conjoint Analysis Tool</h5>
                <br></br>
                
                <h2 className='subheader'>Objective: 
                <p className='description about__content-desc'> 
                Develop a web-based tool for the design and analysis of conjoint surveys with partners in Singapore and India.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Tasks: 
                <p className='description about__content-desc'>
                <ul>
                    <li>Automating the conjoint design tool using Orthogonal Main Effects Design and Mix-and-Match Design for alternative and choice sets.</li>
                    <li>Automating the analysis of conjoint survey results using Hierarchical Bayesian, Monte Carlo-Markov Chain models.</li>
                    <li>Integration of the solution with the web interface.</li>
                    <li>Design and setup of the interface.</li>
                    <li>Writing R codes to produce necessary visualizations.</li>
                    <li>Developing a fully documented R package.</li>
                </ul> 
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Challenges:
                <p className='description about__content-desc'>
                The major challenge of the project was to develop a fully automated web-based tool for the design and analysis of conjoint surveys. 
                The tool needed to be flexible enough to accommodate different types of surveys and generate accurate results within a short time frame. 
                The team also faced challenges in integrating the solution with the web interface and ensuring that the final product was user-friendly.                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Solutions:
                <p className='description about__content-desc'>
                To address these challenges, the team developed a modular approach to the design and analysis of conjoint surveys. 
                The tool was developed using Orthogonal Main Effects Design and Mix-and-Match Design to accommodate different types of surveys. 
                The team also implemented Hierarchical Bayesian and Monte Carlo-Markov Chain models to automate the analysis of conjoint survey results.
                </p>
                <p className='description about__content-desc'>
                The project was completed within the stipulated timeline and budget. 
                The client was provided with a fully automated web-based tool for the design and analysis of conjoint surveys. 
                The tool was able to generate accurate results within a short time frame, enabling the client to make data-driven decisions.
                The tool was also integrated with a web interface, making it user-friendly and accessible.
                </p>
                </h2>  
                <br></br> <br></br>

            


                
                <h2 className='subheader'>Conclusion:    
                <p className='description about__content-desc'>
                This project demonstrated the team's ability to develop a fully automated web-based tool for the design and analysis of conjoint surveys. 
                The tool was developed using Orthogonal Main Effects Design and Mix-and-Match Design to accommodate different types of surveys. 
                The team also implemented Hierarchical Bayesian and Monte Carlo-Markov Chain models to automate the analysis of conjoint survey results. 
                The final product was a user-friendly and intuitive web-based tool that enabled the client to make data-driven decisions.
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
export default Project_14;
