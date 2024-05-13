import Sprite from "./images/SpriteWeb.png";
import boAt from "./images/boAt.png";
import codeCards from "./images/codeCards.png";
import designA from "./images/designAgency.png";
import hercules from "./images/Hercules.png";
import hydra from "./images/hydra.png";
import iPhone from "./images/iPhone.png";
import Kclasses from "./images/Kclasses.png";
import Leaf from "./images/Leaf.png";
import oxygen from "./images/oxygen.png";
import snap from "./images/snapchat.png";
import travel from "./images/Travel.png";
import wag from "./images/wag.png";
import X from "./images/X.png";
import Ecommerce from "./images/e-commerce.png";
import Plnd from "./images/palindrome.png";
import Modalcrd from "./images/modalcard.png";
import Dev from "./images/devdetactive.png";
import tictac from "./images/tictactoe.png";
import weatherApp from "./images/weather.png";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { useState } from "react";
import Modal from "./AboutSec/about";
import Nav from "./MobNavbar/mobNav";
import Contact from "./Contact/contact";
import React from "react";
import { useRef } from "react";


function App() {
  const [showModal, setshowModal]= useState(false);
  const [showContact, setshowContact]= useState(false);
  const [showNavbar, setShowNav]= useState(false);
  return (
    <div className="App">
      <div className="NavBar" id="Nav">
        <div  className="LftPrtNav">
        <h2>Newbie.Dev</h2>
        </div>
        <div className="RytPrtNav">
        <a href="#Hero" className="html">HTML/Projects</a>
        <a href="#JsProjects" >JS/Projects</a>
        <a onClick={()=> setshowModal(true)} >About</a>
        <a onClick={()=> setshowContact(true)}  >Contact</a>
        </div>

        <div className="hamburger" >
          <a onClick={()=> setShowNav(true)}><i class="fa fa-solid fa-bars"></i></a>
        </div>
       
      </div>

      {showModal && <Modal onClose={() => setshowModal(false)}/>}
      {showContact && <Contact onClose={() => setshowContact(false)}/>}
      {showNavbar && <Nav onClose={()=>
      setShowNav(false)}/>}
      
     <a href="#Hero" title="Scroll To Top"><div className="ToToparrow" ><i class="fa fa-solid fa-arrow-up"></i></div></a>
      <div className="HeroSection" id="Hero">
      <div className="HeroHeading">
      <h1>HTML/CSS Projects</h1>
      <p>Landing Pages</p>
      </div>
     
     <div className="Cards">
     
      <div className="card">
      <img src={Sprite} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://sprite-sable.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip">
           <span>Sprite UI  Clone</span> 
            <div className="tip"></div>
        </div>
      </div>
   
      <div className="card">
      <img src={boAt} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://bo-at.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipboat">
           <span>boAt UI  Clone</span> 
            <div className="tip"></div>
        </div>
      </div>

      <div className="card">
      <img src={codeCards} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://card-kappa-nine.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipcodecards">
           <span>CodeCards UI  Clone</span> 
            <div className="tip"></div>
        </div>

      </div>

      <div className="card">
      <img src={hydra} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://hydra-roan-two.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltiphydra">
           <span>Hydra UI  Clone</span> 
            <div className="tip"></div>
        </div>

      </div>

      <div className="card">
      <img src={iPhone} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://apple-delta-sooty.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipapple">
           <span>Apple UI  Clone</span> 
            <div className="tip"></div>
        </div>

      </div>
      <div className="card">
      <img src={snap} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://snapchat-ecru.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipsnap">
           <span>Snapchat UI  Clone</span> 
            <div className="tip"></div>
        </div>

      </div>
      <div className="card">
      <img src={wag} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a> 
      </div>
    <div className="link connect">
    <a href="https://wag-two.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipwag">
           <span>Wag! UI  Clone</span> 
            <div className="tip"></div>
        </div>

      </div>
      <div className="card">
      <img src={oxygen} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://oxygen-nine.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipoxygen">
           <span>Oxygen UI  Clone</span> 
            <div className="tip"></div>
        </div>

      </div>
      <div className="card">
      <img src={hercules} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://hercules-one.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipcycle">
           <span>Hercules UI </span> 
            <div className="tip"></div>
        </div>

      </div>
      <div className="card">
      <img src={designA} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://design-a.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipdesignA">
           <span>DesignAgency UI </span> 
            <div className="tip"></div>
        </div>

      </div>
      <div className="card">
      <img src={Leaf} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://leaf-blush.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipLeaf">
           <span>Leaf UI  Clone</span> 
            <div className="tip"></div>
        </div>

      </div>
      <div className="card">
      <img src={travel} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://air-fly-sable.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipAirFly">
           <span>Air Fly UI </span> 
            <div className="tip"></div>
        </div>

      </div>
      <div className="card">
      <img src={X} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://x-fawn-three.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipX">
           <span>X UI  Clone</span> 
            <div className="tip"></div>
        </div>

      </div>
      <div className="card">
      <img src={Kclasses} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://kurtis.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip tooltipKurtis">
           <span>Kurtis Classrom UI </span> 
            <div className="tip"></div>
        </div>

      </div>
     
      </div>
        
       
      </div>

      
<hr></hr>
    <div className="sec2" id="JsProjects">
          <h1>Javascript Projects</h1>
      
          <div className="card">
      <img src={Ecommerce} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://clothiffy.vercel.app/index.html" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip">
           <span>e-commerce website</span> 
            <div className="tip"></div>
        </div>

        <div className="elfttool">
        <p>➡️ It is a e-commerce website made up of Html, Css, Js GSAP. In which you have more than one pages, and login page. </p>
        <hr></hr>
        </div>
       

        <div className="eryttool">
        <p>➡️ In which you have found a product section in the product section you have another product detail section and many more must visit </p>
        <hr></hr>
        </div>
      </div>

      <div className="card">
      <img src={Plnd} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://palindrome-checker-theta.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip">
           <span>Palindrome Checker</span> 
            <div className="tip"></div>
        </div>

        <div className="elfttool">
        <p>➡️ It is a Palindrome checkerApp made up of Html, Css &Js. </p>
        <hr></hr>
        </div>
       

        <div className="eryttool">
        <p>➡️ Js Mini Project.<br></br>
        ➡️ In which you have a input bar   where you can write any string/number.<br></br>
        ➡️ It will check and show palindrome or not </p>
        <hr></hr>
        </div>
      </div>

      <div className="card">
      <img src={Modalcrd} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://palindrome-checker-theta.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip">
           <span>Modal Card</span> 
            <div className="tip"></div>
        </div>

        <div className="elfttool">
        <p>➡️ It is a Modal card  made up of Html, Css & Js. </p>
        <hr></hr>
        </div>
       

        <div className="eryttool">
        <p>
        ➡️ In which you can share your profile card.<br></br>
        ➡️ Click Share my profile a popup will open it shows all social media where you can share your profile. </p>
        <hr></hr>
        </div>
      </div>

      <div className="card">
      <img src={Dev} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://dev-detective-iota-azure.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip">
           <span>DevDetective App</span> 
            <div className="tip"></div>
        </div>

        <div className="elfttool">
        <p>➡️ It is a DevDetective App made up of Html, Css &Js. </p>
        <hr></hr>
        </div>
       

        <div className="eryttool">
        <p>➡️ You have to Enter any Valid github I'd<br></br>
        ➡️ Fetch the data through API & show on dashboard.<br></br>
        ➡️ Customize Light/Dark theme.</p>
        <hr></hr>
        </div>
      </div>

      <div className="card">
      <img src={tictac} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://tic-tac-toe-game-ten-psi.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip">
           <span>TicTacToe Game</span> 
            <div className="tip"></div>
        </div>

        <div className="elfttool">
        <p>➡️ It is a TicTacToe(0,X) game made up of Html, Css &Js. </p>
        <hr></hr>
        </div>
       

        <div className="eryttool">
        <p>➡️ It is a Game <br></br>
        ➡️ one of the Js project.<br></br>
        ➡️ After win Click New Game btn to restart game.<br></br>
        ➡️ TicTacToe(zero ,Kaata)</p>
        <hr></hr>
        </div>
      </div>

      <div className="card">
      <img src={weatherApp} />
      <div className="links">
      <div className="github connect">
      <a href=""><i className="fa fa-brands fa-github"></i>
      <div className="tooltip">Github
      <div className="tip"></div>
      </div></a>
  
    
      </div>
      

    <div className="link connect">
    <a href="https://weather-app-eta-navy-13.vercel.app/" target="_blank"><i className="fa fa-solid fa-link"></i><div className="tooltip Livetooltip">Live 
      <div className="tip"></div>
      </div></a>
    
    </div>
    
      </div>
      <div className="CardTooltip">
           <span>Weather App</span> 
            <div className="tip"></div>
        </div>

        <div className="elfttool">
        <p>➡️ It is a weather App made up of Html, Css &Js. API</p>
        <hr></hr>
        </div>
       

        <div className="eryttool">
        <p>➡️ It has two UI. 
        ➡️ 1. Your Weather 2. Search Weather<br></br>
        ➡️ It will show your current location weather.<br></br>
        ➡️ Or you can search any particular country.</p>
        <hr></hr>
        </div>
      </div>

    </div>
<hr></hr>

    <div className="sec3">
    <div className="sec3head">
    <h1>Thanks For Visiting</h1>
      <h2>We'll be adding More Projects ASAP😊</h2>
    </div>
      

    </div>


    <footer>
    <div className="ftsec">
    <div className="ftlogo">
    <h2>Newbie.Dev</h2>
    <a href="mailto:email@example.com">Send Email <div className="line"></div></a>
    
    
    </div>
    <div className="shortcut">
    <div className="Menu">
    <a href="#Hero">Home<div className="line"></div></a>
      <a href="#Hero">Projects <div className="line"></div></a>
      <a onClick={()=> setshowModal(true)}>About Me <div className="line"></div></a>
      <a onClick={()=> setshowContact(true)}>Contact <div className="line"></div></a>
    </div>

    <div className="socialMedia">
    <a href="https://www.linkedin.com/in/shivanshuyadav89" target='blank'><i className=" fa fa-brands fa-linkedin"></i></a>

<a href="https://twitter.com/ShivansX" target='blank'> <i className="fa fa-brands fa-twitter"></i></a>
    </div>
    

    </div>
   
    </div>
    <div className="Copyright">
    <p>© 2024 Shivanshu All Rights Reserved</p>

    </div>
    </footer>
    </div>
  );
}

export default App;
