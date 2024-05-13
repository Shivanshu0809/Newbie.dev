import './mobNav.css';
import Modal from "../AboutSec/about";
import '../AboutSec/about.css';
import Contact from "../Contact/contact";
import { useState } from 'react';
import React, {useEffect, useRef } from 'react'
function Nav({onClose}){
  const [showModal, setshowModal]= useState(false);
const [showContact, setshowContact]= useState(false);

    const modalRef =useRef();
    const closeModal =(e) =>{
        if(modalRef.current ===e.target){
    onClose();
        }
    }
    return(
<div className="Mobilenavigation" ref={modalRef} onClick={closeModal}>

<div className="MobNavbar">
<div className='MobNavbartop'>
  <h2>Newbie.Dev</h2>
  <span onClick={onClose}>X</span>
</div>
  <a href="#Hero" >HTML/Projects <div></div></a>

  <a href="#JsProjects" >JS/Projects<div></div></a>
  <a onClick={()=> setshowModal(true)}  >About<div></div></a>
  <a onClick={()=> setshowContact(true)}  >Contact<div></div></a>

</div>
 {showModal && <Modal onClose={() => setshowModal(false)}/>}
 {showContact && <Contact onClose={() => setshowContact(false)}/>}

</div>

    )
}
export default Nav;