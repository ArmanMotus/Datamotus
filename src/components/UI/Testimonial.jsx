import React from 'react'
import '../../styles/testimonial.css';
import Slider from 'react-slick';


const Testimonial = ({theme}) => {

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
  return ( <section>
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
    
  )
}

export default Testimonial


