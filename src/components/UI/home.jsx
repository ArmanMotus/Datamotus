import React, {useState,useEffect} from 'react';
import Slider from 'react-slick';

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

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const counterData =[
    {
        number: '5K',
        text: 'Clients'
    },
    {
        number: 350,
        text: 'Projects Completed'
    },
    {
        number: 5000,
        text: ' Gigabytes of Data Analysed ',
    }
    
]

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

const teamMembers =[
    {
        imgUrl: team01,
        name: 'Habet Madoyan',
        title: 'Data Scientist',
        position: 'Co-Founder, CEO'
    },

    {
        imgUrl: team02,
        name: 'Vahe Movsisyan',
        title: 'Data Scientist',
        position: 'Co-Founder'
    },
    
    {
        imgUrl: team03,
        name: 'Lusine Zilfimian',
        title: 'Data Scientist',
        position:'Team'
    },

    {
        imgUrl: team04,
        name: 'Tatevik Karapetyan',
        title: 'Data Scientist',
        position: 'Team'
    },

    {
        imgUrl: team05,
        name: 'Arman Manjian',
        title: 'Data Engineer',
        position: 'Team'
    },
    
]

const Hero = ({theme}) => {
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
                        <h2>DATA MINING AND </h2>
                        <h2>MACHINE LEARNING</h2>
                        <h3 className='highlight'>WE TURN DATA INTO ACTIONABLE INSIGHTS FOR YOUR BUSINESS </h3>
                    </div>
                    <p className='description'> </p>
                    <div className='hero__btns'>
                        <button className='primary__btn'>Contact us</button>
                        <button className='secondary__btn'>Discover more</button>
                    </div>
                </div>
                <div className='hero__img'>
                    <img src={heroDarkImg} alt="hero-img" />
                </div>
            </div>
        </div>
    
    {/* counter section */}
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
    
    {/*About section  */}

    <section >
        <div className='container'>
            <div className='about__wrapper'>
                <div className='about_content'>
                    <h5 className='subtitle'>About us</h5>
                    {/* <h2></h2> */}
                    {/* <h2 className='highlight'></h2> */}
                    <p className='description about__content-desc'>
                    The company was founded in 2014 by two data scientists.
                    <br></br>
                    Habet Madoyan (co-founder, CEO) is a Data Science program chair and Assistant Professor at the College of Science and Engineering at the American University of Armenia. He holds a Ph.D. in Economics, Emphasis in Management from the National Academy of Sciences of RA: Institute of Economics and a Master’s degree in Business Administration, Emphasis on database marketing from the University of Missouri, Columbia – Crosby MBA Program.
                    <br></br>
                    Vahe Movsisyan is the co-founder of Datamotus as well as Mychoice (Singapore). He holds a Ph.D. in Economics (Concentration: Mathematical statistics and Econometrics) from the Moscow State University of Economics, Statistics, and Informatics. Vahe, too, has got extensive experience in teaching. Up until now, he is a Visiting Lecturer of Applied Statistics and Data Mining courses at the American University of Armenia.
                    </p>
                    
                    <div className='choose__item-wrapper'>
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
                    </div>
                </div>
                <div className='about__img'>
                    <img src={aboutImg} alt="" />
                </div>
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
                        </div>
    
                        <div className="team__details">
                            <h4>{item.name}</h4>
                            <p className="description">{item.title}</p>
                            <p className="description">{item.position}</p>
    
                            <div className="team__member-social">
                                <span>
                                    <i class="ri-linkedin-line"></i>
                                </span>
                                <span>
                                    <i class="ri-twitter-line"></i> 
                                </span>
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
             </Slider>
            </div>
        </div>
    </section>

 
  

</section>
 
 
 );
}

export default Hero
