import React from 'react'
import './footer.css'


const quickLinks01 =[
    {
        path: '#',
        display: 'Phone: +374 (43) 055 047'
    },
    {
        path: '#',
        display: 'Emial: info@datamotus.com'
    },
    {
        path: '#',
        display: '0069, Yerevan - Armenia'
    },
    {
        path: '#',
        display: 'Karapet Ulneci 58/1, 6th floor'
    },
    
]

const social =[
    {
        path: <a href='https://www.facebook.com/datamotus/' ><i class="ri-facebook-box-fill"></i></a> ,
        display: <a href='https://www.linkedin.com/company/datamotus-llc/'><i class="ri-linkedin-box-fill"></i></a>
    },
    
]

const Footer = () => {
  return ( <footer className="footer" >
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>DATAMOTUS</h2>
                <p className='description'>Grow with us</p>

                <p className="small__text description">©2023 Datamotus. All rights reserved.</p>
            </div>
            {/* className="footer__quick-links" */}
            <div >
                <h3 className="quick__link-title">Contact us</h3>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item,index)=>(
                            <li className="quick__link-item" key={index}>
                                <a>{item.display}</a>
                                
                            </li>
                        ))
                    }
                    
                </ul>
                
                <ul className="quick__links">
                    {
                        social.map((item,index)=>(
                            <div className="quick__link-item-social" key={index}>
                                {item.path}{item.display}
                            </div>
                        ))
                    }
                    
                </ul>
            </div>


                    

        </div>
    </div>
  </footer>

  
    
  )
}

export default Footer
