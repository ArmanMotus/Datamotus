import React from 'react'
import '../../../styles/testimonial.css';
import Slider from 'react-slick';
import img1 from '../../../images/MIC/1.png'
import img2 from '../../../images/MIC/2.png'
import img3 from '../../../images/MIC/3.png'
import img4 from '../../../images/MIC/4.png'
import img5 from '../../../images/MIC/5.png'
import img6 from '../../../images/MIC/6.png'
import img7 from '../../../images/MIC/7.png'
import img8 from '../../../images/MIC/8.png'
import img9 from '../../../images/MIC/9.png'
import img10 from '../../../images/MIC/10.png'
import img11 from '../../../images/MIC/11.png'

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
                <h6 className="subtitle"></h6>
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
                <div>
                        <img src={img9} alt=" " className="slider-image"/>
                </div>
                <div>
                        <img src={img10} alt=" " className="slider-image"/>
                </div>
                <div>
                        <img src={img11} alt=" " className="slider-image"/>
                </div>
                


             </Slider>
            </div>
        </div>
  </section>
    
  )
}

export default slid


