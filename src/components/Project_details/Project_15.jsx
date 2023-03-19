import React from 'react'
import '../../styles/projectDet.css';  


const Project_15 = () => {
  return (
    <section >
    <div className='container'>
        <div className='about__wrapper'>
            <div className='about_content'>
                <h5 className='subtitle'> GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit) - Big Data for Urban Planning </h5>
                <br></br>
                
                <h2 className='subheader'>Client Overview: 
                <p className='description about__content-desc'> 
                GIZ is a German development agency that provides services in the field of international development cooperation. 
                One of their projects involved the development of a concept paper and Terms of Reference (ToR) 
                for using big data in urban planning in Minsk, Tbilisi, and Yerevan.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Project Description:
                <p className='description about__content-desc'>
                The project aimed to analyze the current situation of big data usage, available resources, databases, and systems in Minsk, Tbilisi, and Yerevan in the context of urban planning. 
                The main tasks of the project included developing a concept paper on the usage of big data for urban planning and developing ToR for a big data platform and its piloting stage using GSM data.
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Challenges Faced:
                <p className='description about__content-desc'>
                One of the primary challenges was the lack of available data and resources for big data usage in urban planning in the three cities. 
                Additionally, developing a concept paper and ToR for a big data platform required the team to be knowledgeable in urban planning and big data.
                </p>
                </h2>  
                <br></br> <br></br>

            


                <h2 className='subheader'>Approach and Solution: 
                <p className='description about__content-desc'>
                The team first conducted an analysis of the current situation in each city regarding the usage of big data in urban planning. 
                This analysis provided insight into available resources and data sources that could be used in the project. 
                The team then developed a concept paper on the usage of big data in urban planning that included information on the benefits of 
                using big data, challenges faced in implementation, and a framework for the development of a big data platform.
                </p>
                <p className='description about__content-desc'>
                Next, the team developed ToR for the big data platform and its piloting stage using GSM data. 
                This involved outlining the technical requirements for the platform, such as data collection, 
                data processing, and data visualization, as well as providing information on the expected outcomes and timelines for the pilot stage.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Results:    
                <p className='description about__content-desc'>
                The project resulted in a well-documented concept paper and ToR for the development of a big data platform for urban planning in Minsk, 
                Tbilisi, and Yerevan. The team identified available data sources and resources that could be used in the project and outlined the technical 
                requirements for the big data platform. The project provided a roadmap for the development and implementation of the big data platform in the three cities.
                </p>
                </h2>

                
            </div>
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
            </div>
        </div>
    </div>
</section>

    
  )
}
export default Project_15;
