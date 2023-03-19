import React from 'react'
import '../../styles/projectDet.css';  


const Project_11 = () => {
  return (
    <section >
    <div className='container'>
        <div className='about__wrapper'>
            <div className='about_content'>
                <h5 className='subtitle'> Developing a Predictive Model to Measure the Impact of Marketing Channels on attracting new visitors to website </h5>
                <br></br>
                
                <h2 className='subheader'>Assignment:
                <p className='description about__content-desc'> 
                Develop a Bayesian structural time series predictive model to assess the effectiveness and impact of different marketing advertisement 
                channels on the number of new visitors to the company's website.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Tasks: 
                <p className='description about__content-desc'>
                <ul>
                    <li>Data collection, cleaning, and preparation for analysis.</li>
                    <li>Development of a Bayesian structural time series model.</li>
                    <li>Measurement of the impact of three distinct marketing channels (TV, Outdoor, Print media)</li>
                    <li>Developing a tool to measure the value of the target without advertisement.</li>
                    
                </ul> 
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Challenge:
                <p className='description about__content-desc'>
                Our client wanted to measure the impact of their marketing channels (TV, Outdoor, Print media) on website visitors. 
                The client needed a tool that would help them measure the effectiveness of their advertising campaigns and help them 
                allocate their advertising budget more effectively.
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Solution:
                <p className='description about__content-desc'>
                To help our client measure the impact of their advertising campaigns, we developed a Bayesian structural time series model. 
                This model allowed us to measure the impact of three distinct marketing channels (TV, Outdoor, Print media) on the number of new 
                visitors to the company's website. By using the Bayesian approach, we were able to incorporate prior knowledge into the model, 
                which allowed us to develop more accurate predictions.
                </p>
                <p className='description about__content-desc'>
                To develop this model, we collected data on the number of new visitors to the company's website over a period of one year. 
                We then cleaned and prepared the data for analysis. We developed a Bayesian structural time series model that allowed us to estimate 
                the effect of each marketing channel on the number of new visitors to the website.
                </p>
                <p className='description about__content-desc'>
                To measure the value of the target without advertisement, we developed a tool that would help our client answer the question
                 "What would be the value of your target, if you haven't done advertisement?" This tool allowed our client to see the impact of 
                 their advertising campaigns on website visitors and helped them allocate their advertising budget more effectively.
                </p>
                </h2>  
                <br></br> <br></br>

                <h2 className='subheader'>Outcome:    
                <p className='description about__content-desc'>
                Our predictive model provided our client with valuable insights into the effectiveness of their advertising campaigns. 
                By using the Bayesian approach, we were able to incorporate prior knowledge into the model, which allowed us to develop more accurate predictions. 
                Our tool provided our client with a better understanding of the impact of their advertising campaigns on website visitors, 
                and helped them allocate their advertising budget more effectively.
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
export default Project_11;
