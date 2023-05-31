import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from '../UI/Scrolling/Back'
import aboutImg from '../../images/cash_demand.png'
import projectImg from '../../images/Projects/project_2.png'

const Project_1 = () => {
  return (
    <section >
    <div className='container'>
    <div><BackButton /></div>     
        <div className='about__wrapper'>
            <div>
                <div className='about__img'><img src = {projectImg}></img></div>
                <h5 className='subtitle_services'>Using Data Science to Predict Daily Cash Demand for Local Bank's ATM Machines</h5>
                <br></br>
                
                <h2 className='subheader'>Background: 
                <p className='description about__content-desc'> 
                Our local bank was facing a challenge of ensuring their ATM machines were always stocked with 
                enough cash to meet daily customer demand. Predicting this demand is complex, as it is influenced by factors such as holidays, 
                special events, and local economic changes. 
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Objective:
                <p className='description about__content-desc'>
                We were tasked with creating a tool to accurately predict daily cash demand for the bank's ATM machines.
                </p>  
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Data Collection and Preparation:
                <p className='description about__content-desc'>
                We collected historical data on cash withdrawals from the bank's ATMs, 
                including the date, time, and amount of each withdrawal. 
                This data was collected over several years to capture a diverse range of events that could impact daily demand. 
                The data was then cleaned and preprocessed for analysis.
                </p>
                </h2>  
                <br></br> <br></br>

                <h2 className='subheader'>Feature Engineering: 
                <p className='description about__content-desc'>
                 To help our model understand the factors that impact daily cash demand, 
                we created new features from the preprocessed data, including information such as the day of the week, 
                time of day, and average withdrawal amount for each machine. We also incorporated macroeconomic variables such as monetary base, 
                exchange rate, etc, as predictors to our model.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Model Building: 
                <p className='description about__content-desc'>
                 We used Time-Series Forecasting, a statistical method that uses historical data to predict future values in a series, 
                to build our predictive model. The model was trained on the preprocessed data and newly created features using the R programming language.
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Model Evaluation: 
                <p className='description about__content-desc'>
                We evaluated the model's performance using a holdout validation approach, setting aside a portion of the data for testing. 
                We measured the accuracy of our predictions using metrics such as Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE).
                </p>
                </h2>
                <br></br> <br></br>
                
                <h2 className='subheader'>Outcome: 
                <p className='description about__content-desc'>
                The model we built was highly accurate, with a low MAE and RMSE, accurately predicting daily cash demand for the bank's ATM machines.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Product:
                <p className='description about__content-desc'>  
                The final product of our data science project is a standalone application written in R. The application utilizes our predictive model to 
                forecast the daily cash demand for the bank's ATM machines, providing a data-driven solution to ensure their machines are always fully stocked 
                with cash. The team also made a forecast of the demand for different banknote types to assist the bank in ensuring that the ATMs were stocked with 
                the right mix of banknotes.
                </p>
                </h2>
                <br></br> <br></br>

                <h2 className='subheader'>Conclusion    
                <p className='description about__content-desc'>
                This data science case study demonstrates the power of using historical data and advanced predictive modeling techniques to solve real-world problems. 
                Our standalone application provides the local bank with a solution to accurately predict daily cash demand for their ATM machines, 
                improving the customer experience and driving positive results for their business.               
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
export default Project_1;
