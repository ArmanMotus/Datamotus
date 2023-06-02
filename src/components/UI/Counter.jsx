

import React from 'react'
import '../../styles/counter.css'

const counterData =[
    {
        number: '70',
        text: 'Clients'
    },
    {
        number: 220,
        text: 'Projects Completed'
    },
    {
        number: 5000,
        text: ' Gigabytes of Data Analysed ',
    }
    
]

const Counter = () => {
  return (
    
    <section className='container'>
        <div className="counter">
            <div className="counter__wrapper">
                
                {
                    counterData.map((item,index)=>(
                        <div className="counter__item" key ={index}>
                            <h3 className="counter__number">{item.number}</h3>
                            <h4 className="counter__title">{item.text}</h4>
                        </div>
                    ))
                }
                
            </div>
        </div>        
    </section>




  )
}

export default Counter
