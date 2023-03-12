

import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../images/about1.jpeg'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const chooseData =[
    {
        icon: 'ri-line-chart-fill',
        title: 'MACHINE LEARNING / STATISTICAL ANALYSIS',
        desc: 'We build systems that can learn from data and we find relationships between variables to predict outcomes for your business.'
    },

    {
        icon: 'ri-store-3-fill',
        title: 'MARKETING RESEARCH AND ANALYTICS',
        desc: 'Traditionally, marketing research and data science have been viewed as separate approaches. But we combine these two research disciplines for more in-depth findings.'
    },

    {
        icon: 'ri-dashboard-fill',
        title: 'DATA VISUALIZATION AND DASHBOARDING',
        desc: 'You don’t need to be a data scientist to understand our findings. We put every outcome of our efforts into easy-to-use and nice dashboards.'
    },

    {
        icon: 'ri-shirt-fill',
        title: 'CORPORATE TRAINING',
        desc: 'We conduct training on R programming and statistical analysis as well as conjoint training. Bring your team or anyone you want with you!'
    },
]

const About = ({theme}) => {
  return (
    

    <section >
       
        <div className='container'>
            <div className='about__wrapper'>
                <div className='about_content'>
                    <h5 className='subtitle'>About us</h5>
                    {/* <h2></h2> */}
                    {/* <h2 className='highlight'></h2> */}
                    <p className='description about__content-desc'>
                        At Datamotus, we do data mining and statistical analysis. Our vision is to help marketers, decision-makers, entrepreneurs and businesses, in general, make data-driven decisions and thus boost sales.
                        Every company generates a certain amount of data. Big companies with complex processes generate huge data which they sometimes ignore. However, companies could achieve competitive advantage by using data. They could use it to either improve internal processes or boost marketing and sales efforts.
                        Datamotus is here to offer a range of data mining and statistical analysis services. We know how to plan, implement and finalize data mining projects starting from defining your business problem up to deploying the model. Additionally, we offer corporate training as part of our services to help you master the data more efficiently and proactively.
                        At Datamotus, we have a dedicated team of professionals working in the sphere of Business Analytics, Statistical Methods and Software Engineering. We operate in a rapid learning environment, and we try to always be in tune with the most recent developments in data mining and machine learning industries.
                    </p>
                    
                    {/* <div className='choose__item-wrapper' id = 'services'>
                        {chooseData.map((item,index)=>(
                            <div className="choose__us-item">
                                <span className="choose__us-icon">
                                    <i class={item.icon}></i>
                                </span>
                                <div>
                                    <h4 className="choose__us-title">{item.title}</h4>
                                    <p className="description_about">
                                        {item.desc}
                                    </p>
                                    <div className='about_learn_button'>
                                        <button className='about_btn'>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
                {/* <div className='about__img'>
                    <img src={aboutImg} alt="" />
                </div> */}
            </div>
        </div>

        

</section>

    

  )
}

export default About
