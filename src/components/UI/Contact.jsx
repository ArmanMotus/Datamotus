
import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../styles/Contact.css';
import BackButton from './Scrolling/Back';

const contact = () => {
  return (
      <section>
      
      <div className="container">
      <div><BackButton /></div>     
      <div className="contact-container">  
      <div className="map-container">
        <iframe
          src="https://yandex.com/maps/10262/yerevan/house/YE0YcwRhQEIAQFpqfX5xcXVqYw==/?ll=44.532155%2C40.201027&z=17.84"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="1"
        ></iframe>
      </div>
     
      <form className="contact-form">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
      </section>
    
  )
}
export default contact;
