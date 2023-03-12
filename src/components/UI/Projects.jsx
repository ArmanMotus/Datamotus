import React from 'react'
import '../../styles/projects.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const projectData =[
    {
        icon:'ri-shield-star-fill',
        title: 'STUDY ON WILLINGNESS TO PAY PRICE PREMIUM',
        desc: ''
    },
   
    {
        icon:'ri-shield-star-fill',
        title: 'ANALYSIS OF HIGHER EDUCATION STUDY RESULTS',
        desc: ''
    },

    {
        icon:'ri-shield-star-fill',
        title: 'PREDICTING PROBABILITY OF REPEATED PURCHASE',
        desc: ''
    },

    {
        icon:'ri-shield-star-fill',
        title: 'CUSTOMER CHURN MODELING FEASIBILITY STUDY',
        desc: ''
    },

]

const projectData2 = [
    {
        icon:'ri-shield-star-fill',
        title: 'CUSTOMER SATISFACTION STUDY',
        desc: ''
    },

    {
        icon:'ri-shield-star-fill',
        title: 'CASH DEMAND FORECASTING',
        desc: ''
    },

    {
        icon:'ri-shield-star-fill',
        title: 'MARKETING MIX EFFECTIVENESS',
        desc: ''
    },

    {
        icon:'ri-shield-star-fill',
        title: 'PREDICTIVE MODEL FOR AN HR PORTAL',
        desc: ''
    },

]

const Projects = () => {
  return (
    <section >
        
        <div className='container'>
            <div className='project__top-content'>
                <h6 className='subtitle'>Our Projects</h6>
                {/* <h2></h2> */}
                {/* <h2 className='highlight'></h2> */}
            </div>
            <div className="project__item-wrapper">
               {
                projectData.map((item,index)=>(
                    <div className="projects__item" key={index}>
                    <span className="projects__icon">
                    <i class={item.icon}></i> 
                    </span>
                    <h3 className="project__title">{item.title}</h3>
                    <p className="description">{item.desc}</p>
                </div>
                ))
               }
            </div>
            <div className="project__item-wrapper2">
               {
                projectData2.map((item,index)=>(
                    <div className="projects__item" key={index}>
                    <span className="projects__icon">
                    <i class={item.icon}></i> 
                    </span>
                    <h3 className="project__title">{item.title}</h3>
                    <p className="description">{item.desc}</p>
                </div>
                ))
               }
            </div>
        </div>
   
</section>
    
  )
}

export default Projects