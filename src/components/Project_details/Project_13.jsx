import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../../components/UI/Scrolling/Back'
import aboutImg from '../../images/repeated purchase.png'
import projectImg from '../../images/Projects/project_13.png'

const Project_13 = () => {
  return (
    <section className='container'>
    <div >
    <BackButton />     

        <div className='about__wrapper'>
            <div >
                <div className='about__img'><img src = {projectImg}></img></div>                

                <h5 className='subtitle_services'>Predicting Repeated Purchases Using Demographic Data </h5>

                <br></br>
                
                <h2 className='subheader'>Introduction: 
                <p className='description about__content-desc'> 
                In today’s highly competitive market, understanding customer behaviour and predicting purchase probability can be the key to business success. 
                In this case study, we will discuss a project where our team was tasked with predicting the probability 
                of repeated purchases based on demographic data and information on the first purchase.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Client and Goal:
                <p className='description about__content-desc'>
                Our client was a leading e-commerce company, which wanted to improve customer retention by identifying the customers most likely to make repeat purchases. 
                The goal of the project was to build a machine learning model that could accurately predict the probability of repeated purchases based on various customer attributes.
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Approach:
                <p className='description about__content-desc'>
                Our team followed a comprehensive approach, which included feature engineering, feature extraction, and model building.
                 We started by analyzing the data to identify the most relevant customer attributes that could impact the probability of repeated 
                 purchases. We then used various feature extraction techniques, such as logistic PCA and convex PCA, 
                 to identify the most important features.
                </p>
                <p className='description about__content-desc'>
                After feature extraction, we imputed missing values and performed data normalization to prepare the data for modelling. 
                We built several machine learning models, including logistic regression, SVM, 
                and neural networks, and evaluated their performance using various metrics such as accuracy, precision, recall, and F1 score.
                </p>
                </h2>  
                <br></br> <br></br>

                <h2 className='subheader'>Results and Recommendations: 
                <p className='description about__content-desc'>
                After evaluating the performance of different models, we selected the best model, which had the highest accuracy, precision, recall, and F1 score.
                We provided the client with a ready-to-use R script, which could be used to predict the probability of repeated purchases for new data.
                </p>
                <p className='description about__content-desc'>
                Our model was able to accurately predict the probability of repeated purchases, which helped the client identify the customers most likely to make repeat purchases. Based on our analysis, 
                we recommended that the client should focus on targeted marketing campaigns to retain these customers and increase their overall customer retention.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Conclusion:    
                <p className='description about__content-desc'>
                In conclusion, our team was able to successfully build a machine learning model to predict the probability of repeated purchases 
                based on demographic data and information on the first purchase. Our model provided the client with valuable insights, 
                which helped them improve their customer retention and increase their overall revenue.
                </p>
                </h2>
                

                
            </div>
            {/* <div className='about__img'>
                <img src={aboutImg} alt="" />
            </div> */}
        </div>
    </div>
</section>

    
  )
}
export default Project_13;
