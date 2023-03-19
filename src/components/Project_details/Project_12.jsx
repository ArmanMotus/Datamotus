import React from 'react'
import '../../styles/projectDet.css';  


const Project_12 = () => {
  return (
    <section >
    <div className='container'>
        <div className='about__wrapper'>
            <div className='about_content'>
                <h5 className='subtitle'>  Local Telecom Company </h5>
                <br></br>
                
                <h2 className='subheader'>Assignment: 
                <p className='description about__content-desc'> 
                Develop a churn prediction model using machine learning.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Tasks: 
                <p className='description about__content-desc'>
                <ul>
                    <li>Conduct descriptive analysis of customer behavior and churn.</li>
                    <li>Apply machine learning models to predict the probability of customer churn.</li>
                    <li>Train, test, and validate the models.</li>
                    <li>Provide a ready-to-go model to the customer.</li>
                    <li>Provide a ready-to-go model to the customer.</li>
                    <li>Produce a report on the performance of the applied machine learning models.</li>
                    
                </ul> 
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Description:
                <p className='description about__content-desc'>
                Our team worked with a local telecom company to develop a churn prediction model using machine learning. 
                By analyzing customer behavior and churn, we identified key factors that were predictive of whether a customer was likely to churn. 
                We then used several machine learning models to predict the probability of churn for each customer. 
                After training, testing, and validating the models, 
                we provided the client with a ready-to-go model that they could use to predict churn in real time.
               
               </p>
                </h2>  
                <br></br> <br></br>

                <h2 className='subheader'>Outcome:
                <p className='description about__content-desc'>
                Our churn prediction model was able to accurately identify customers who were likely to churn, 
                giving the telecom company the ability to proactively reach out to those customers and offer incentives to stay. 
                By using the model, the company was able to reduce their churn rate by 15%, resulting in significant cost savings and increased customer retention. 
                Our report provided detailed insights into the performance of each machine learning model, 
                helping the client to understand how the model was making its predictions and identify areas for further improvement.
               
               </p>
                </h2>  
                <br></br> <br></br>

                
            </div>
            <div className='about__img'>
                {/* <img src={aboutImg} alt="" /> */}
            </div>
        </div>
    </div>
</section>

    
  )
}
export default Project_12;
