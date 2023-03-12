
import React from 'react'
import '../../styles/team.css'
import team01 from '../../images/team1.jpg'
import team02 from '../../images/team2.jpg'
import team03 from '../../images/team3.jpg'
import team04 from '../../images/team4.jpeg'
import team05 from '../../images/team5.jpg'



const teamMembers =[
    {
        imgUrl: team01,
        name: 'Habet Madoyan',
        title: 'Data Scientist',
        position: 'Co-Founder, CEO'
    },

    {
        imgUrl: team02,
        name: 'Vahe Movsisyan',
        title: 'Data Scientist',
        position: 'Co-Founder'
    },
    
    {
        imgUrl: team03,
        name: 'Lusine Zilfimian',
        title: 'Data Scientist',
        position:'Team'
    },

    {
        imgUrl: team04,
        name: 'Tatevik Karapetyan',
        title: 'Data Scientist',
        position: 'Team'
    },

    {
        imgUrl: team05,
        name: 'Arman Manjian',
        title: 'Data Engineer',
        position: 'Team'
    },
    
]



const Team = () => {
  return (
    <section className='our__team'>
        <div className="container">
            <div className="team__content">
                <h6 className="subtitle">Our Team</h6>
                <h2>
                     Meet with <span className='highlight'>our team</span>
                </h2>
            </div>

            <div className='team__wrapper'>
                {
                    teamMembers.map((item,index)=>(
                        <div className="team__item" key={index}>
                        <div className="team__img">
                            <img src={item.imgUrl} alt="" />
                        </div>
    
                        <div className="team__details">
                            <h4>{item.name}</h4>
                            <p className="description">{item.title}</p>
                            <p className="description">{item.position}</p>
    
                            <div className="team__member-social">
                                <span>
                                    <i class="ri-linkedin-line"></i>
                                </span>
                                <span>
                                    <i class="ri-twitter-line"></i> 
                                </span>
                            </div>
                        </div>
                    </div>  
                    ))
                }
            </div>    
        </div>
    </section>
  )
}

export default Team
