import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import aboutImg from '../../images/customer_satisfaction_for_telecom.png'

const Project_16 = () => {
  return (
    <section >
    <div className='container'>
    <BackButton />     

        <div className='about__wrapper'>
            <div className='about__content'>
                <h5 className='subtitle_services'>Customer Satisfaction Study for a Major Telecom Company in South-East Asia </h5>
                <br></br>
                
                <h2 className='subheader'>Overview: 
                <p className='description about__content-desc'> 
                A major telecom company in South-East Asia hired our team to conduct a customer satisfaction study to evaluate its current 
                services and gain insight on areas for improvement. Our team participated in the methodology development and designed the questionnaire,
                providing support in the sample size calculation. After data collection, statistical analysis was conducted to calculate the Customer 
                Satisfaction Index (CSI) and identify factors affecting customer satisfaction. The results were used to develop a list of customer 
                satisfaction Key Performance Indicators (KPIs) to inform the company's CRM strategy.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Challenges:
                <p className='description about__content-desc'>
                The telecom company faced stiff competition in the region and wanted to improve customer satisfaction to retain existing customers and attract new ones. 
                Our team needed to develop a methodology that would yield accurate results and provide insights that could inform the company's CRM strategy.                
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Solutions:
                <p className='description about__content-desc'>
                Our team developed a comprehensive methodology that included the design of a questionnaire, sample size calculation, and statistical analysis. 
                The questionnaire covered several aspects of the company's services, including call quality, network coverage, customer service, and billing.
                To ensure the accuracy of the results, our team carefully calculated the sample size required for the study.
                </p>

                <p className='description about__content-desc'>
                After the data collection, we analyzed the results to calculate the CSI and identify factors affecting customer satisfaction. 
                We provided the telecom company with a list of KPIs to track customer satisfaction over time and inform the company's CRM strategy.
                </p>
                </h2>  
                <br></br> <br></br>

                <h2 className='subheader'>Results:    
                <p className='description about__content-desc'>
                The survey results revealed several areas for improvement, including call quality, network coverage, and customer service. 
                By focusing on these areas, the telecom company was able to improve customer satisfaction and reduce customer churn. 
                The list of KPIs provided by our team allowed the company to track customer satisfaction over time and measure the impact of its CRM strategy.
                </p>
                </h2>

                
            </div>
            <div className='about__img'>
                <img src={aboutImg} alt="" />
            </div>
        </div>
    </div>
</section>

    
  )
}
export default Project_16;
