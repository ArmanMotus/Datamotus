import React from 'react'
import '../../styles/trainings.css'

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



const trainings = () => {
  return (
      <section className="courses">
        <h5 className='subtitle_train'> Our Trainings </h5>
        <div className="container courses__container">
            <article className="course">
              <div className="course__image">
                  <img src={course1} width={250} height={250} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
              Data Science and Analytics with R,
              Byblos Bank, Yerevan Armenia
              
              </p>
              <a link ='' className='btn btn-primary'>March 2021</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course2} width={250} height={250} alt="" />
              </div>
              <h4> CRRC Armenia</h4>
              <p>
              Data Analytics With R
              </p>
              <a link ='' className='btn btn-primary'>October 2021-December 2021</a>
            </article>
            <article className="course">
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
            <article className="course">
              <div className="course__image">
                  <img src={course4} width={250} height={250} alt="" />
              </div>
              <h4>Council of Europe</h4>
              <p>
                Design of Training Evaluation Frameworks, Council of Europe Tbilisi and Yerevan Office staff members
              </p>
              <a link ='' className='btn btn-primary'>November 2020 / January 2021</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course5}  width={250} height={250} alt="" />
              </div>
              <h4>Microsoft Innovation Center in Armenia</h4>
              <p>
              Data Science Bootcamp / Organized by Microsoft Innovation Center in Armenia
              </p>
              <a link ='' className='btn btn-primary'></a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course6} style={{height:250, width:250 }} alt="" />
              </div>
              <h4>International Republican Institute (Armenia), Parliament and Government of RA</h4>
              <p>
              Data Visualization
              </p>
              <a link ='' className='btn btn-primary'>February 2020</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course7} style={{height:150, width:250, margin:-30 }} alt="" />
              </div>
              <h4> World Vision Armenia</h4>
              <p>
              Training on R programming
              </p>
              <a link ='' className='btn btn-primary'>January 2019</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course8} style={{height:250, width:250, margin:-80}} alt="" />
              </div>
              <h4>Digitain</h4>
              <p>
              Conjoint Analysis with R
              </p>
              <a link ='' className='btn btn-primary'>January-March 2019</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course9} style={{height:250, width:250, margin:-80}} alt="" />
              </div>
              <h4>Ameriabank</h4>
              <p>
              Conjoint Analysis with R
              </p>
              <a link ='' className='btn btn-primary'>October - November 2018</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course10} style={{height:20, width:250, margin:30}} alt="" />
              </div>
              <h4>Vivacell</h4>
              <p>
              Conjoint Analysis with R
              </p>
              <a link ='' className='btn btn-primary'>May - June 2018</a>
            </article>
            
        </div>
      </section>

  )
}
export default trainings;
