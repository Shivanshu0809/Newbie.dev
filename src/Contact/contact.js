import React, {useEffect, useRef } from 'react'
import "./contact.css";
import 'font-awesome/css/font-awesome.min.css';

function Contact({onClose}){
    const contactRef =useRef();
    const closeContact =(e) =>{
        if(contactRef.current ===e.target){
            onClose();
        }
    }

    return (
    <div ref={contactRef} onClick={closeContact} className='ModalContact'>
      <div className='contact'>
      <div className='heading'>
      <span onClick={onClose}>X</span>
      <h1>Get in Touch</h1>

      <i class=" fa fa-solid fa-user"></i>
      
      </div>
      
      
      <div className='SocialLinks'> 
     
      <a href="https://www.linkedin.com/in/shivanshuyadav89" target='blank'><i className=" fa fa-brands fa-linkedin"></i></a><hr></hr>

     <a href="https://twitter.com/ShivansX" target='blank'> <i className="fa fa-brands fa-twitter"></i></a>
      </div>
    

      </div>
        </div>
    );
}
export default Contact;
