import React from 'react'
import '../../../styles/testimonial.css';
import Slider from 'react-slick';
import img1 from '../../../images/IRI/1.png'
import img2 from '../../../images/IRI/2.png'
import img3 from '../../../images/IRI/3.png'
import img4 from '../../../images/IRI/4.png'
import img5 from '../../../images/IRI/5.png'
import img6 from '../../../images/IRI/6.png'
import img7 from '../../../images/IRI/7.png'
import img8 from '../../../images/IRI/8.png'

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
                <div>
                        <img src={img8} alt=" " className="slider-image"/>
                </div>
        
             </Slider>
            </div>
        </div>
  </section>
    
  )
}

export default slid


