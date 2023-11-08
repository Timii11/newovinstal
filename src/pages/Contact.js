import React,{useState} from "react";
import TitlePage from "../components/TitlePage";
import RouteTitle from "../components/RouteTitle";
import Particles from 'react-particles-js';
import ContactCard from "../components/ContactCard";
import FloatingLabel from "floating-label-react";
import "floating-label-react/styles.css";
import "../css/pages/contact.css";
import {GoLocation} from '@react-icons/all-files/go/GoLocation';
import {FiPhone} from '@react-icons/all-files/fi/FiPhone';
import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail';


const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mesaje,setMesaje] = useState("");
 
    return(
        <div className="page">
        <TitlePage title="Contact" />      
        
        <div className="pagemargin">
        <RouteTitle title="Contact" />


      <div className="contactplace">

        <div className="particlesplace">
        <Particles  style={{ position: "relative"}} height="500px" width="900px"   params={{"particles": {"number": {"value": 50},"size": {"value": 3}},"interactivity": {"events": {"onhover": {"enable": true,"mode": "grab"}}}}} />   
        </div>

        <div className="contactrows">
        <ContactCard  textcolor="black" icon={<GoLocation size="50px"/>} fontsize="20px" title="Adresa" text="Oradea, str. Ceyrat, nr. 35A, bl. WR6, ap. SC3"  />
        <ContactCard  textcolor="black" icon={<FiPhone size="50px"/>} fontsize="20px" title="Telefon" text="(+40) 743 954 660" link="tel:0743954660"/>
        <ContactCard  textcolor="black" icon={<AiOutlineMail size="50px"/>} fontsize="20px" title="Mail" text="office@ovinstalelectric.ro" link="mailto:office@ovinstalelectric.ro"/>
        </div>

        <div className="contactform">
          <FloatingLabel style={{outline:"none",borderBlockColor:"black"}} id="name"  name="name"  placeholder="Nume"  type="text"  value={name} onChange={e=>setName(e.currentTarget.value)}/>
          <FloatingLabel style={{outline:"none",borderBlockColor:"black"}} id="email"  name="email"  placeholder="Email"  type="email"  value={email} onChange={e=>setEmail(e.currentTarget.value)} />
          <FloatingLabel style={{outline:"none",borderBlockColor:"black"}} id="mesaje"  name="mesaje"  placeholder="Mesaj"  type="text"  value={mesaje} onChange={e=>setMesaje(e.currentTarget.value)}/>
          <div className="alignleft"><button className="send">Trimite</button></div>
        </div>
        
      </div>


      
      <iframe title="sometitle" className="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.05977407682!2d21.92829479464045!3d47.03905786936084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4746472e82f2dc6d%3A0x44af5244fe04c812!2sPanouri%20Fotovoltaice%20-%20Ovinstal%20Electric!5e0!3m2!1sro!2sro!4v1695754083701!5m2!1sro!2sro" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



        
        </div>
        </div>
    );
}


export default Contact;