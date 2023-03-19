import React from 'react'
import '../../styles/projectDet.css';  


const Project_3 = () => {
  return (
    <section >
    <div className='container'>
        <div className='about__wrapper'>
            <div className='about_content'>
                <h5 className='subtitle'>Improving Lawyer's Work Behavior with Data Analysis</h5>
                <br></br>
                
                <h2 className='subheader'>Background: 
                <p className='description about__content-desc'> 
                The legal industry is a fast-paced and ever-changing environment that requires lawyers to handle vast amounts of 
                information on a daily basis. With the increasing demand for efficiency and productivity, 
                it has become essential for lawyers to find ways to manage their workload more effectively. 
                In this case study, we will look at how data analysis was used to understand the working behavior of lawyers and assist them in finding relevant information quickly, 
                ultimately increasing their productivity. 
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Objective:
                <p className='description about__content-desc'>
                The project aimed to analyze lawyers' email exchange data to understand their work behavior. 
                The team of data analysts extracted useful information from the emails, 
                including recurrent document numbers, names, domains, and more. 
                The data was then analyzed using various techniques, including descriptive analysis, 
                cluster analysis, network analysis, and gap analysis.
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Data Visualization:
                <p className='description about__content-desc'>
                One of the key objectives of the project was to visualize the data in a meaningful way. 
                To achieve this, the team used a combination of descriptive analysis and data visualization techniques to create an interactive dashboard. 
                The dashboard allowed the lawyers to view their email exchange data in a graphical format, making it easier to understand and identify trends.
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
                
                <h2 className='subheader'>Topic Modeling: 
                <p className='description about__content-desc'>
                The cluster analysis of email titles was performed using topic modeling techniques such as Latent Dirichlet Allocation 
                and Non Negative Matrix Factorization. These techniques were used to identify the topics and themes discussed in the email titles, 
                making it easier for lawyers to categorize and locate relevant information.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Network Analysis:
                <p className='description about__content-desc'>
                Network analysis was performed using N-grams for text mining. This helped the team to understand the relationships 
                between different email exchanges, making it easier to identify patterns and trends in the data.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Project Clustering: 
                <p className='description about__content-desc'>
                The team executed projects clustering using tools such as DTM and Name Entity Recognition. 
                This helped to categorize the emails based on their content, making it easier for lawyers to find relevant information quickly.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Gap Analysis:
                <p className='description about__content-desc'>  
                A gap analysis was performed based on email exchange frequency. 
                This helped the team to identify areas where lawyers could improve their workflow and be more efficient in their day-to-day operations.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Conclusion:     
                <p className='description about__content-desc'>
                This case study highlights how data analysis can be used to improve the work behavior of lawyers. By analyzing their email exchange data, 
                the team was able to identify trends, relationships, and patterns that helped to increase the lawyers' productivity and efficiency. 
                The interactive dashboard created for the lawyers provides a visual representation of the data, making it easier for them to understand and identify areas for improvement. 
                The project was a success, and the results demonstrate how data analysis can be used to drive positive outcomes in the legal industry.              
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
export default Project_3;
