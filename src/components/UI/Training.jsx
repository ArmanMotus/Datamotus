import React from 'react'
import '../../styles/trainings.css'
import { useNavigate} from "react-router-dom";
import '../../styles/projectDet.css';  
import Slider from './Sliders/photos_sliderWVA'

import course1 from '../../images/Byblos.png'
import course2 from '../../images/CRRC.jpeg'
import course3 from '../../images/HMC.png'
import course4 from '../../images/europe.png'
import course5 from '../../images/microsoft.png'
import course6 from '../../images/RA.png'
import course7 from '../../images/world-vision.png'
import course8 from '../../images/digitain.png'
import course9 from '../../images/Ameria.png'
import course10 from '../../images/VIVA.png'

const Trainings = () => {

  const history = useNavigate()
    const handleSomething = (link) =>{
    history(link)
}

  return (
      <section className="courses">
        
        <div className='container'>
           <div className='about__wrapper'>
              <div className='about_content'>
                <h5 className='subtitle_train'> Our Trainings </h5>
        <p className='description about__content-desc'>
        Welcome to Datamotus, your one-stop destination for data science and machine learning training solutions. 
        Our corporate training programs are designed to equip your staff with the latest skills in data analytics using the R programming language. 
        Our experienced trainers have conducted numerous successful training sessions for various organizations, including Byblos Bank, CRRC Armenia, and the Council of Europe.'
        </p>
        <p className='description about__content-desc'>
        Our comprehensive training modules cover all aspects of data analysis, from data structures, visualization, and manipulation to statistical analysis and machine learning. 
        Our focus on reproducible research ensures that your staff can create quality research outputs. 
        Contact us today to learn more about our customized training solutions for your organization.
        </p>
        </div>
            </div>
                </div>  
        <div className="container courses__container">
            <article className="course"  onClick={(e) => handleSomething('/trainings/Byblos')}>
              <div className="course__image">
                  <img src={course1} width={250} height={200} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
              Data Science and Analytics with R,
              Byblos Bank, Yerevan Armenia
              </p>
              <a link ='' className='btn btn-primary'>March 2021</a>
            </article>
             
            <article className="course" onClick={(e) => handleSomething('/trainings/CRRC')}>
              <div className="course__image">
                  <img src={course2} width={250} height={200} alt="" />
              </div>
              <h4> CRRC Armenia</h4>
              <p>
              Data Analytics With R
              </p>
              <a link ='' className='btn btn-primary'>October 2021-December 2021</a>
            </article>

            <article className="course" onClick={(e) => handleSomething('/trainings/HMC')}>
              <div className="course__image">
                  <img src={course3} width={250} height={250} alt="" />
              </div>
              <h4>HMC SNCO</h4>
              <p>
              Financed by  GiZ (Deutsche Gesellschaft für Internationale Zusammenarbeit) 
              for the staff of “Hydrometeorology and Monitoring Center” state non-commercial organization (HMC SNCO)
              </p>
              <a link ='' className='btn btn-primary'>September -October 2021</a>
            </article>

            <article className="course" onClick={(e) => handleSomething('/trainings/Europe')}>
              <div className="course__image">
                  <img src={course4} width={250} height={250} alt="" />
              </div>
              <h4>Council of Europe</h4>
              <p>
                Design of Training Evaluation Frameworks, Council of Europe Tbilisi and Yerevan Office staff members
              </p>
              <a link ='' className='btn btn-primary'>November 2020 / January 2021</a>
            </article>

            <article className="course" onClick={(e) => handleSomething('/trainings/Microsoft')}>
              <div className="course__image">
                  <img src={course5}  width={200} height={200} alt="" />
              </div>
              <h4>Microsoft Innovation Center in Armenia</h4>
              <p>
              Data Science Bootcamp / Organized by Microsoft Innovation Center in Armenia
              </p>
              <a link ='' className='btn btn-primary'></a>
            </article>

            <article className="course" onClick={(e) => handleSomething('/trainings/RA')}>
              <div className="course__image">
                  <img src={course6} style={{height:200, width:200 }} alt="" />
              </div>
              <h4>International Republican Institute (Armenia), Parliament and Government of RA</h4>
              <p>
              Data Visualization
              </p>
              <a link ='' className='btn btn-primary'>February 2020</a>
            </article>

            <article className="course" onClick={(e) => handleSomething('/trainings/WVA')}>
              <div className="course__image">
                  <img src={course7} style={{height:150, width:250, margin:-30 }} alt="" />
              </div>
              <h4> World Vision Armenia</h4>
              <p>
              Training on R programming
              </p>
              <a link ='' className='btn btn-primary'>January 2019</a>
            </article>

            <article className="course" onClick={(e) => handleSomething('/trainings/Digitain')}>
              <div className="course__image">
                  <img src={course8} style={{height:250, width:250, margin:-80}} alt="" />
              </div>
              <h4>Digitain</h4>
              <p>
              Conjoint Analysis with R
              </p>
              <a link ='' className='btn btn-primary'>January-March 2019</a>
            </article>

            <article className="course" onClick={(e) => handleSomething('/trainings/Ameria')}>
              <div className="course__image">
                  <img src={course9} style={{height:100, width:250, margin:-30}} alt="" />
              </div>
              <h4>Ameriabank</h4>
              <p>
              Conjoint Analysis with R
              </p>
              <a link ='' className='btn btn-primary'>October - November 2018</a>
            </article>

            <article className="course" onClick={(e) => handleSomething('/trainings/VIVA')}>
              <div className="course__image">
                  <img src={course10} style={{height:15, width:250, margin:12}} alt="" />
              </div>
              <h4>Vivacell</h4>
              <p>
              Conjoint Analysis with R
              </p>
              <a link ='' className='btn btn-primary'>May - June 2018</a>
            </article>
            
        </div>
        {/* < Slider/> */}

      </section>

  )
}
export default Trainings;
