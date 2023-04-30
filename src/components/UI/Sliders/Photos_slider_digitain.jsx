import React from 'react'
import '../../../styles/testimonial.css';
import Slider from 'react-slick';
import img1 from '../../../images/Digitain/1.jpg'
import img2 from '../../../images/Digitain/2.jpg'
import img3 from '../../../images/Digitain/3.jpg'
import img4 from '../../../images/Digitain/4.jpg'
import img5 from '../../../images/Digitain/5.jpg'
import img6 from '../../../images/Digitain/6.jpg'
import img7 from '../../../images/Digitain/7.jpg'

const slid = ({theme}) => {

    const settings = {
        dots: false,
        Infinite: true,
        speed: 2500,
        autoplay: true,
        autoplaySpeed:1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
  return ( <section>
            <div className="container">
             <div >
                
                {/* <h2>
                    Trusted by more than{" "} 
                    <span className="highlight">500 customers</span>
                </h2> */}
             </div>
            {/* <img src={aboutImg} alt="" /> */}
            <div className="slider-container">
            <Slider {...settings}>
                <div>
                        <img src={img1} alt=" " className="slider-image"/>
                </div>
                <div>
                        <img src={img2} alt=" " className="slider-image"/>
                </div>
                <div>
                        <img src={img3} alt=" " className="slider-image"/>
                </div>
                <div>
                        <img src={img4} alt=" " className="slider-image"/>
                </div>
                <div>
                        <img src={img5} alt=" " className="slider-image"/>
                </div>
                <div>
                        <img src={img6} alt=" " className="slider-image"/>
                </div>
                <div>
                        <img src={img7} alt=" " className="slider-image"/>
                </div>
        
             </Slider>
            </div>
        </div>
  </section>
    
  )
}

export default slid


