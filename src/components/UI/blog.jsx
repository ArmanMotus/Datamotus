import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

import '../../styles/blog.css'
const articles = [
  {
    id: 1,
    title: 'Optimization Modeling for Store Product Clustering and EOQ Determination',
    content: 'The *objective* of this study is to develop a robust optimization solution that enables the determination of an optimal replenishment for managing store products....',
    date: 'July 10, 2023 ', // Replace with the actual date
    link: 'Optimization_Modeling_for_Store_Product_Clustering_and_EOQ_Determination',

  },
  {
    id: 2,
    title: 'Weighted Least Square',
    content: 'Nowadays, having a business implies owning a website. The primary aim of a website is to ...',
    date: 'February 2, 2021', // Replace with the actual date
    link: 'Weighted_Least_Square',

  },
  {
    id: 3,
    title: 'Shapley Value Regression',
    content: 'Shapley value regression can deal with multicollinearity that is frequently encountered in marketing research that uses rating scale data. The article studies Shapley Value decomposition from the game theory as a method of discovering the relative importance of predictors in order to understand the key drivers of successful restaurant business.',
    date: 'December 20, 2020', // Replace with the actual date
    link: 'Shapley_Value_Regression',

  },
  {
    id: 4,
    title: 'Changes in air pollution',
    content: 'It is hard to eliminate the health effects of the toxic contaminators on health. Air pollutants can be the cause of death from stroke, lung cancer, childhood cancer, and another heart disease. Apart from affecting our health, a decrease in the level of air quality is causing long-term environmental damage by driving climate change, which is itself a danger for people and their health. In the article, changes in the quality of air are detected using historical data of four types of air pollutants - carbon dioxide, sulfur dioxide, particulate matter and concentration of ozone in the air...',
    date: 'January 9, 2020', // Replace with the actual date
    link: 'Changes_in_air_pollution',

  },
  {
  id: 5,
  title: 'Outlier Detection in Air Pollution Data',
  content: 'On a daily basis, economical, technological and political changes cause air pollution, which is currently one of the most pressing environmental...',
  date: 'November 15, 2019', // Replace with the actual date
  link: 'Outlier_Detection_in_Air_Pollution_Data',

  },

  {
    id: 6,
    title: 'Propensity Score Matching',
    content: 'The research question is whether playing chess is correlated with the improvement in logical thinking...',
    date: 'November 15, 2019', // Replace with the actual date
    link: 'Propensity_Score_Matching',

    }
];


const Blog = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className='blog-container'>
      {articles.map((article) => (
        <div  className="article-card"
          key={article.id}
          onClick={() => navigate(article.link)} // Use navigate to go to the article's link
        >
          <div>
            <h2>{article.title}</h2>
              <p><em>{article.date}</em></p> {/* Display the date in italic */}
                <p>{article.content}</p>
                  <button className="read-more-btn">Read More</button> {/* Add Read More button */}
           </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;






