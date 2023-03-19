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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course2} width={250} height={250} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course3} width={250} height={250} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course4} width={250} height={250} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course5}  width={250} height={250} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course6} style={{height:250, width:250 }} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course7} style={{height:150, width:250, margin:-30 }} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course8} style={{height:250, width:250, margin:-80}} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course9} style={{height:250, width:250, margin:-80}} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            <article className="course">
              <div className="course__image">
                  <img src={course10} style={{height:20, width:250, margin:30}} alt="" />
              </div>
              <h4>Byblos Bank</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed repellendus, 
                impedit ullam accusamus porro possimus reprehenderit praesentium
              </p>
              <a link ='' className='btn btn-primary'>Learn More</a>
            </article>
            
        </div>
      </section>

  )
}
export default trainings;
