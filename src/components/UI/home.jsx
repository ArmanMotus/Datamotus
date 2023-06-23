import React, {useState,useEffect} from 'react';
import Slider from 'react-slick';
import {Link, useNavigate} from "react-router-dom";

import "../../styles/hero.css"
import '../../styles/counter.css'
import '../../styles/projects.css'
import '../../styles/about.css'
import '../../styles/team.css'
import '../../styles/testimonial.css';

import heroDarkImg from '../../images/hero-img.png'
import aboutImg from '../../images/about1.jpeg'
import team01 from '../../images/team1.jpg'
import team02 from '../../images/team2.jpg'
import team03 from '../../images/team3.jpg'
import team04 from '../../images/team4.jpeg'
import team05 from '../../images/team5.jpg'

const counterData =[
    {
        number: '70',
        text: 'Clients'
    },
    {
        number: 220,
        text: 'Projects Completed'
    },
    {
        number: 5000,
        text: ' Gigabytes of Data Analysed ',
    }
    
]

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
            icon:'ri-virus-fill',
            title: 'Rapid Nationwide Community Assessment on the Socio-Economic Impact of COVID-19 outbreak',
            link: 'Project_6',
            desc: ''
    },
    

    {
        icon:'ri-community-line',
        title: 'Developing a Real-Time Visualization Tool for Survey Monitoring using R shiny',
        link:'Project_4',
        desc: ''
    },

]

const projectData2 = [
    {
        icon:'ri-bar-chart-2-fill',
        title: 'Development of a Comprehensive Conjoint Analysis Tool',
        link: 'Project_5',
        desc: ''
    },

    {
        icon:'ri-pin-distance-fill',
        title: 'GIZ - Big Data for Urban Planning ',
        link: 'Project_15',
        desc: ''
    },

    {
        icon:'ri-settings-5-line',
        title: 'Developing a Fully Automated Conjoint Analysis Tool for Remote Partners',
        link: 'Project_14',
        desc: ''
    },

    {
        icon:'ri-user-heart-fill',
        title: 'Customer Satisfaction Study for a Major Telecom Company in South-East Asia',
        link: 'Project_16',
        desc: ''
    },

]


const chooseData =[
    {
        icon: 'ri-line-chart-fill',
        title: 'MACHINE LEARNING / STATISTICAL ANALYSIS',
        desc: 'We build systems that can learn from data and we find relationships between variables to predict outcomes for your business.',
        link1: '/services'
    },

    {
        icon: 'ri-store-3-fill',
        title: 'MARKETING RESEARCH AND ANALYTICS',
        desc: 'Traditionally, marketing research and data science have been viewed as separate approaches. But we combine these two research disciplines for more in-depth findings.',
        link1: '/services'

    },

    {
        icon: 'ri-dashboard-fill',
        title: 'DATA VISUALIZATION AND DASHBOARDING',
        desc: 'You don’t need to be a data scientist to understand our findings. We put every outcome of our efforts into easy-to-use and nice dashboards.',
        link1: '/services'

    },

    {
        icon: 'ri-shirt-fill',
        title: 'CORPORATE TRAINING',
        desc: 'We conduct training on R programming and statistical analysis as well as conjoint training. Bring your team or anyone you want with you!',
        link1: '/services'

    },
]

const teamMembers =[
    {
        imgUrl: team01,
        name: 'Habet Madoyan',
        title: 'Data Scientist',
        position: 'Co-Founder, CEO',
        linkedinUrl: 'https://www.linkedin.com/in/habetmadoyanmba/'

    },

    {
        imgUrl: team02,
        name: 'Vahe Movsisyan',
        title: 'Data Scientist',
        position: 'Co-Founder',
        linkedinUrl: 'https://www.linkedin.com/in/vahe-movsisyan-1a2b043b/'

    },
    
    // {
    //     imgUrl: team03,
    //     name: 'Lusine Zilfimian',
    //     title: 'Data Scientist',
    //     position:'Team'
    // },

    // {
    //     imgUrl: team04,
    //     name: 'Tatevik Karapetyan',
    //     title: 'Data Scientist',
    //     position: 'Team'
    // },

    // {
    //     imgUrl: team05,
    //     name: 'Arman Manjian',
    //     title: 'Data Engineer',
    //     position: 'Team'
    // },
    
]



const Hero = ({theme}) => {

    const history = useNavigate()
    const handleSomething = (link) =>{
    history(link)   
};

const handleServices = (link1) =>{
history(link1)   
};



    const settings = {
        dots: false,
        Infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
  return (
    
    
    
// hero section
<section className='hero__section' >
        <div className='container'>
            <div className='hero__wrapper'>
                <div className='hero__content'>
                    <div>
                        <h2>DATA MINING AND 
                        MACHINE LEARNING</h2>
                        <h3 className='highlight'>WE TURN DATA INTO ACTIONABLE INSIGHTS FOR YOUR BUSINESS </h3>
                    </div>
                    <p className='description'> </p>
                    <div className='hero__btns'>
                        <Link to="/contact">
                        <button className='primary__btn'>Contact us</button>
                        </Link>
                        <Link to="/about">
                        <button className='secondary__btn'>Discover more </button>
                        </Link>
                    </div>
                </div>
                <div className='hero__img'>
                    <img src={heroDarkImg} alt="hero-img" />
                </div>
            </div>
        </div>
    
    { /* counter section */ }
    <section className='counter'>
         <div className="container">
            <div className="counter__wrapper">
            
                {
                    counterData.map((item,index)=>(
                        <div className="counter__item" key ={index}>
                            <h3 className="counter__number">{item.number}</h3>
                            <h4 className="counter__title">{item.text}</h4>
                        </div>
                    ))
                }
            
            </div>
        </div>        
    </section>

{/* Project section */}
    
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
                    <div className="project__title">
                        {item.title}
                    </div>
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
                    <div className="project__title">{item.title}</div>
                    <p className="description">{item.desc}</p>
                </div>
                ))
               }
            </div>
        </div>
    </section>
    
    {/*About section  */}

    <section >
        <div className='container'>
            <div className='about__wrapper'>
                <div className='about_content'>
                    <h5 className='subtitle'>About us</h5>
                   
                    <p className='description__about__content-desc'>
                    Welcome to Datamotus, a leading data science company that specializes in statistical analysis, machine learning, computer vision, and natural language processing services.
                    </p>
                    <br></br>
                    <p className='description__about__content-desc'>
                    Our vision is to help businesses make data-driven decisions and boost sales by leveraging their data. With our range of data analytics services, we can help you optimize your operations, improve your marketing efforts, and achieve your business goals.
                    </p>
                    <br></br>
                    <p className='description__about__content-desc'>
                    Our team of experts has extensive experience in machine learning, deep learning, and other advanced analytics techniques. We provide end-to-end support for data analytics projects, from defining the business problem to deploying the model, to help businesses gain valuable insights from their data.
                    </p>
                    <br></br>
                    <p className='description__about__content-desc'>
                    In addition to our data analytics services, we offer computer vision and natural language processing solutions that can help businesses analyze and understand visual and text data more effectively. Our team has experience building image recognition models, object detection models, and natural language processing models, as well as analyzing and classifying text data for sentiment analysis, topic modeling, and more.
                    </p>
                    <br></br>
                    <p className='description__about__content-desc'>
                    At Datamotus, we are committed to staying up-to-date with the latest developments in data analytics, machine learning, and other advanced analytics techniques. Our team operates in a rapid learning environment and strives to always be in tune with the most recent developments in the industry.
                    </p>
                    <br></br>
                    <p className='description__about__content-desc'>
                    If you're looking for a data science partner that can help you unlock the full potential of your data, look no further than Datamotus. Contact us today to learn more about our services and how we can help you achieve your business goals.
                    </p>
                    
                    <div className='choose__item-wrapper'>
                        {chooseData.map((item,index)=>(
                            <div className="choose__us-item_1">
                                <span className="choose__us-icon">
                                    <i class={item.icon}></i>
                                </span>
                                <div className="choose_us-title_1">
                                    <h4 >{item.title}</h4>
                                    <p >
                                        {item.desc}
                                    </p>
                                    <div className='about_learn_button'>
                                        <button className='about_btn' onClick={(e) => handleServices(item.link1)} >Learn More  </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className='about__img'>
                    <img src={aboutImg} alt="" />
                </div> */}
            </div>
        </div>
    </section>
    
    {/* Team section */}
    
    <section className='our__team'>
        <div className="container">
            <div className="team__content">
                <h6 className="subtitle">Our Team</h6>
                <h2>
                     Meet with <span className='highlight'>our team</span>
                </h2>
            </div>

            <div className='team__wrapper'>
                {
                    teamMembers.map((item,index)=>(
                        <div className="team__item" key={index}>
                        <div className="team__img">
                            <img src={item.imgUrl} alt="" />
                        
    
                        <div className="team__details">
                            <h4>{item.name}</h4>
                            <p className="description">{item.title}</p>
                            <p className="description">{item.position}</p>
    
                            <div className="team__member-social">
                                 <a href={item.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <i className="ri-linkedin-line" ></i>
                                    </span>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>  
                    ))
                }
            </div>    
        </div>
    </section>
    
    {/* Testemonial section */}

    <section>
            <div className="container">
             <div className="slider__content-top">
                <h6 className="subtitle">What our clients say</h6>
                <h2>
                    Trusted by more than{" "} 
                    <span className="highlight">500 customers</span>
                </h2>
             </div>
            
            <div className="slider__wrapper">
            <Slider {...settings}>
                <div className='slider__item'>
                    <p className="description">"I had an opportunity to attend a training that was tailored by Datamotus for Ameriabank. 
                    Main theme of the training was Conjoint analysis, but we also had introductory sessions on R programming language. 
                    The training was extremely practical and our team was equipped with good ground for designing and conducting a conjoint analysis on our own."
                    </p>
                <div className='customer__details'>
                    <div>
                        <h5 className="customer__name">Hovhannes Toroyan</h5>
                        <p className='description'>Head of Strategy & Research at Ameriabank CJSC</p>
                    </div>
                </div>
                </div>

                <div className='slider__item'>
                    <p className="description">"I would like to tell you what an indispensable asset Datamotus has been to Duxton Consulting Group. 
                    What started out as a single job that you did for us, has grown into a productive and profitable relationship. 
                    Beyond the working partnership, what has evolved is a strong personal relationship. 
                    We really enjoy working with you guys! We always know that however bad our briefing is, 
                    and no matter how short the time frame, you’ll respond in a positive, pleasant manner. 
                    On behalf of all of us at Duxton Consulting Group, can I say what a pleasure and privilege it is to work with the Datamotus team."
                    </p>
                <div className='customer__details'>
                    

                <div>
                  <h5 className="customer__name">Alan Fairnington</h5>
                  <p className='description'>Managing Partner at Duxton Consulting Group</p>
                </div>
                </div>
                </div>

                <div className='slider__item'>
                    <p className="description">"Datamotus has conducted a series of training on statistics for our team. 
                    Due to professional and detailed delivery of training topics, we have enhanced our theoretical knowledge on statistics, as well as gained new skills in conducting inferential statistics. 
                    They have not only presented the theory, but also provided practical consultancy. 
                    As a result we managed to identify, discuss, analyze and find solutions for problems that arise during our work."
                    </p>
                <div className='customer__details'>
                    <div>
                        <h5 className="customer__name">Kristine Ter-Abrahamyan</h5>
                        <p className='description'>Senior Design, Monitoring and Evaluation Officer at World Vision Armenia</p>
                    </div>
                </div>
                </div>

                <div className='slider__item'>
                    <p className="description">"Our partnership with Datamotus has been truly transformative for our business. Their expertise in data science and machine learning allowed us to unlock the power of our product usage data, revealing valuable insights into our customers' behavior and needs. Thanks to their analysis,
                    we were able to make informed business decisions that have significantly improved our customer experience and driven growth for our company."
                    </p>
                <div className='customer__details'>
                    <div>
                        <h5 className="customer__name">Armen Avakian</h5>
                        <p className='description'>Co-Founder & CBDO at Hexact inc</p>
                    </div>
                </div>
                </div>

                <div className='slider__item'>
                    <p className="description">"The Dashboard for Ayb's Subject Contests project delivered by Datamotus exceeded our expectations. 
                    We were impressed with their technical expertise and attention to detail throughout the development process. 
                    The R Shiny dashboard they created was intuitive and user-friendly, enabling us to easily track and analyze the performance of students across different categories. 
                    It has become an invaluable tool for us in monitoring the progress of our Subject Contests. 
                    We highly recommend Datamotus for their exceptional data science and dashboard development services.</p>
                <div className='customer__details'>
                    <div>
                        <h5 className="customer__name">Sona Koshetsyan</h5>
                        <p className='description'>Executive Director at Ayb Educational Foundation</p>
                    </div>
                </div>
                </div>

                <div className='slider__item'>
                    <p className="description">"Datamotus did an excellent job in developing and delivering the six-month data science bootcamp for our students at the Microsoft Innovation Center. 
                    The curriculum was well-structured and covered a wide range of topics, from programming to machine learning and data visualization. 
                    The project supervision and guidance provided to the students were invaluable in helping them apply their knowledge to real-world projects. 
                    Highly recommend Datamotus for their expertise in data science and their ability to deliver comprehensive corporate training programs.</p>
                <div className='customer__details'>
                    <div>
                        <h5 className="customer__name">Artashes Vardanyan</h5>
                        <p className='description'> Director at Microsoft Innovation center</p>
                    </div>
                </div>
                </div>

             </Slider>
            </div>
        </div>
    </section>
</section>

 
  

 
 
 );
}

export default Hero
