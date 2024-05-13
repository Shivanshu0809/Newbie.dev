
import Image from "./shivuimg.jpg"
import './about.css';
import React, {useEffect, useRef } from 'react'


function Modal({onClose}){
    const modalRef =useRef();
    const closeModal =(e) =>{
        if(modalRef.current ===e.target){
            onClose();
        }
    }

    return (
    
       
        <div ref={modalRef} onClick={closeModal} className='Modal'>
        <div className="ownerModal">

        
        <span onClick={onClose}>X</span>
        <img src={Image} loading="lazy"></img>
        <h3>Owner</h3>
        <p>Hello! My Name is Shivanshu Yadav, I am a FrontEnd Developer, Open for Freelance, It is a Projects website Where beginner could come and take some ideas About FrontEnd Projects, And Make sure do it by himself, When beginner unable to do it by himself then he must go for source code which is available on github, If You want to design/Develop Your website Contact me Without any hesitation It may be *free for You <br></br>Happy Coding!😊</p>

        <div className='languages'>
        <span>#html</span>
        <span>#css</span>
        <span>#javascript</span>
        <span>#React</span>
        <span>#Figma</span>
        <span>#Tailwind</span>
        <span>#GSAP</span>
        </div>
        </div>
        </div>
    );
}
export default Modal;