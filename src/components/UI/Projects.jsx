import React from 'react'
import '../../styles/projects.css'
import BackButton from './Scrolling/Back'

import { useNavigate} from "react-router-dom";

const projectData =[
    {
        icon:'ri-bank-fill',
        title: "Using Data Science to Predict Daily Cash Demand for Local Bank's ATM Machines",
        link: 'Project_2',
        desc: ''
    },
   
    {
        icon:'ri-bar-chart-grouped-fill',
        title: 'Unlocking the Power of Product Usage Data with Marketing and Product Analytics',
        link: 'Project_3',
        desc: ''
    },


    {
        icon:'ri-community-line',
        title: 'Developing a Real-Time Visualization Tool for Survey Monitoring using R shiny',
        link:'Project_4',
        desc: ''
    },

    {
        icon:'ri-bar-chart-2-fill',
        title: 'Development of a Comprehensive Conjoint Analysis Tool',
        link: 'Project_5',
        desc: ''
    },

]

const projectData2 = [
    

    {
        icon:'ri-virus-fill',
        title: 'Rapid Nationwide Community Assessment on the Socio-Economic Impact of COVID-19 outbreak',
        link: 'Project_6',
        desc: ''
    },

    {
        icon:'ri-user-follow-line',
        title: 'Development and Validation of a Proxy Tool to Pre-Screen Offenders for Risk to Reoffend',
        link: 'Project_7',
        desc: ''
    },

    {
        icon:'ri-book-mark-fill',
        title: 'Dashboard for Subject Contests',
        link: 'Project_8',
        desc: ''
    },

    {
        icon:'ri-database-2-line',
        title: 'Light Deployment and Implementation of LMS System for GIZ',
        link: 'Project_9',
        desc: ''
    },

]

const projectData3 = [
    

    {
        icon:'ri-windows-fill',
        title: 'Microsoft Innovation Center Data Science Bootcamp ',
        link: 'Project_10',
        desc: ''
    },

    {
        icon:'ri-dashboard-2-line',
        title: 'Developing a Predictive Model to Measure the Impact of Marketing Channels on attracting new visitors to website',
        link: 'Project_11',
        desc: ''
    },

    {
        icon:'ri-sim-card-2-line',
        title: 'Development of a Churn Prediction Model Using Machine Learning',
        link: 'Project_12',
        desc: ''
    },

    {
        icon:'ri-team-line',
        title: 'Predicting Repeated Purchases Using Demographic Data',
        link: 'Project_13',
        desc: ''
    },

]

const projectData4 = [
    

    {
        icon:'ri-settings-5-line',
        title: 'Developing a Fully Automated Conjoint Analysis Tool',
        link: 'Project_14',
        desc: ''
    },

    {
        icon:'ri-pin-distance-fill',
        title: 'GIZ - Big Data for Urban Planning ',
        link: 'Project_15',
        desc: ''
    },

    {
        icon:'ri-user-heart-fill',
        title: 'Customer Satisfaction Study for a Major Telecom Company in South-East Asia',
        link: 'Project_16',
        desc: ''
    },

]



const Projects = () => {
    const history = useNavigate()
    const handleSomething = (link) =>{
    history(link)
}
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
                    <div className="projects__item" key={index} onClick={(e) => handleSomething(item.link)}>
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
                    <div className="projects__item" key={index} onClick={(e) => handleSomething(item.link)}>
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
                projectData3.map((item,index)=>(
                    <div className="projects__item" key={index} onClick={(e) => handleSomething(item.link)}>
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
                projectData4.map((item,index)=>(
                    <div className="projects__item" key={index} onClick={(e) => handleSomething(item.link)}>
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