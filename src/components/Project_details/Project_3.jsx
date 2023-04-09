import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../UI/Scrolling/Back'


const Hexact = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <div className='about__wrapper'>
            <div className='about__content'>
                <h5 className='subtitle_services'>Unlocking the Power of Product Usage Data with Marketing and Product Analytics</h5>
                <br></br>
                
                <h2 className='subheader'>Background: 
                <p className='description about__content-desc'> 
                Hexact LLC was looking to understand the trends in their product usage and identify opportunities to improve the customer experience. 
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Objective:
                <p className='description about__content-desc'>
                Our team was tasked with analyzing the product usage data of Hexact to reveal trends and insights that could inform business decisions.                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Data Collection and Preparation:
                <p className='description about__content-desc'>
                We collected product usage data from Hexact, which was then cleaned and preprocessed for analysis.
                </p>
                </h2>  
                <br></br> <br></br>

                <h2 className='subheader'>Behavior Analysis: 
                <p className='description about__content-desc'>
                We analyzed the behavior of Hexact users, studying the differences between active and passive users. 
                This helped us understand which products and automations were most in demand and in which countries.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Product Demand: 
                <p className='description about__content-desc'>
                We explored the products that are required by both ordinary users and different industries, 
                giving Hexact valuable insights into their target markets.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Automation Credit Usage: 
                <p className='description about__content-desc'>
                We investigated how customers use automations credits, providing Hexact with a deeper understanding of their customers' needs and behaviors.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Referral Sources: 
                <p className='description about__content-desc'>
                We identified the websites that users referred from, giving Hexact valuable information on their marketing strategies and potential areas for improvement.                
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Churn Rate Analysis:
                <p className='description about__content-desc'>  
                We analyzed the behavior of dissatisfied users to understand the reasons for the churn rate. 
                This information is valuable in reducing the churn rate and improving customer satisfaction.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Outcome:
                <p className='description about__content-desc'>  
                The project was a success, providing Hexact with valuable insights into their customers' behavior and product usage. 
                This information was used to inform business decisions, improve the customer experience, and drive growth for the company.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Conclusion:     
                <p className='description about__content-desc'>
                This case study demonstrates the importance of data-driven decision-making in the business world. 
                Our analysis of Hexact's product usage data provided valuable insights that were used to drive positive results for the company.              
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
export default Hexact;
