

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
                   
                    <p className='description about__content-desc'>
                    Welcome to Datamotus, a leading data science company that specializes in statistical analysis, machine learning, computer vision, and natural language processing services.
                    </p>
                    <br></br>
                    <p className='description about__content-desc'>
                    Our vision is to help businesses make data-driven decisions and boost sales by leveraging their data. With our range of data analytics services, we can help you optimize your operations, improve your marketing efforts, and achieve your business goals.
                    </p>
                    <br></br>
                    <p className='description about__content-desc'>
                    Our team of experts has extensive experience in machine learning, deep learning, and other advanced analytics techniques. We provide end-to-end support for data analytics projects, from defining the business problem to deploying the model, to help businesses gain valuable insights from their data.
                    </p>
                    <br></br>
                    <p className='description about__content-desc'>
                    In addition to our data analytics services, we offer computer vision and natural language processing solutions that can help businesses analyze and understand visual and text data more effectively. Our team has experience building image recognition models, object detection models, and natural language processing models, as well as analyzing and classifying text data for sentiment analysis, topic modeling, and more.
                    </p>
                    <br></br>
                    <p className='description about__content-desc'>
                    At Datamotus, we are committed to staying up-to-date with the latest developments in data analytics, machine learning, and other advanced analytics techniques. Our team operates in a rapid learning environment and strives to always be in tune with the most recent developments in the industry.
                    </p>
                    <br></br>
                    <p className='description about__content-desc'>
                    If you're looking for a data science partner that can help you unlock the full potential of your data, look no further than Datamotus. Contact us today to learn more about our services and how we can help you achieve your business goals.
                    </p>
                </div>
                <div className='about__img'>
                    {/* <img src={aboutImg} alt="" /> */}
                </div>
            </div>
        </div>
    </section>
    

    

  )
}

export default About
