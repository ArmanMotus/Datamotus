
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
