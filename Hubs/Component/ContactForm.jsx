import React from "react";
import "../Style/Contact.css";

const ContactForm = () => {
  return (
    <div className="mainhading ">
        <h2 className=" heading6  mt-5"> Contact us</h2>
        <div className="mainCotainer">
    <div className="form-container">
      <form>
        <div className="input-group">
          <input type="text" required />
          <label>  <i className="bi bi-person-fill icon"></i>  Your Name</label>
        </div>
        <div className="input-group">
          <input type="email" required />
          <label>     <i className="bi bi-envelope-fill icon"></i> Your Email</label>
        </div>
        
         <div className="input-group">
          <input type="text" required />
          <label>    <i className="bi bi-telephone-fill"></i> Phone number</label>
        </div>

        <div className="input-group">
          <input type="text" required />
          <label> <i className="bi bi-tag-fill icon"></i> Subject</label>
        </div>

        <div className="input-group">
          <textarea required></textarea>
          <label>   <i className="bi bi-chat-left-dots-fill icon"></i> Your Message</label>
        </div>

        <button type="submit" className="btn">Send</button>
      </form>
    </div>



     
      <div className="contact-info me-5">
        <h2>Our Contact Info</h2>
        <p >
          <strong>Phone:</strong> <a href="tel:+918236017178" style={{textDecoration:"none",color:'black'}}>+91 9045556369</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:dhakarpureveda@gmail.com" style={{textDecoration:"none",color:'black'}}>ChauhanHerbs1201@gmail.com</a>
        </p>
        <p>
          <strong>Address:</strong> Shop No. 18, SS Plaza, Maharaja Surajmal Marg,
          Chipiyana Buzurg, Sec. 16B, Greater Noida (W), UP, India 201008
        </p>

        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.295573878582!2d77.46379997492742!3d28.61715798423286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff5d9c2c6f5%3A0x23fbe8762a66b5b7!2sTech%20Zone%20IV%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701094571642!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      </div>


    
    </div>



  );
};

export default ContactForm;