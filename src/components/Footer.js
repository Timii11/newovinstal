import React from 'react';
import "../css/components/footer.css"
import ContactCard from "./ContactCard";
import { NavLink } from 'react-router-dom';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaInstagramSquare} from '@react-icons/all-files/fa/FaInstagramSquare';
import {FaGooglePlusSquare} from '@react-icons/all-files/fa/FaGooglePlusSquare';
import {GoLocation} from '@react-icons/all-files/go/GoLocation';
import {FiPhone} from '@react-icons/all-files/fi/FiPhone';
import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail';



const Footer=()=>{
    return(
    <footer>       
<div className="footercontent">

        <div className="about">
		<h3>Despre</h3>
		<p>Expertul tau in instalatii electrice.Servicii de proiectare si executie instalatii electrice 0,4-20 KV</p>
        <div className="icons">
        <ContactCard textcolor="white"  icon={<FaFacebookSquare size="35px"/>}  fontsize="20px" title="" text="" link="https://www.facebook.com/Ovinstal-Electric-256215611098793" />
        <ContactCard  textcolor="white"  icon={<FaInstagramSquare size="35px"/>}  fontsize="20px" title="" text="" />
        <ContactCard  textcolor="white"  icon={<FaGooglePlusSquare size="35px"/>}  fontsize="20px" title="" text=""  />
		</div>
        </div>


			<div className="explore">
				<h3>Exploreaza</h3>
                <ul>
                    <li><NavLink to="/about" activeClassName="active">Despre</NavLink></li>
                    <li><NavLink to="/certified" activeClassName="active">Certificate</NavLink></li>
                    <li><NavLink to="/service" activeClassName="active">Servicii</NavLink></li>
                    <li><NavLink to="/projects/all" activeClassName="active">Proiecte</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
			</div>

			<div className="infocontact">
			<h3>Informatii Contact</h3>
            <ContactCard textcolor="white"  icon={<GoLocation size="25px"/>}  fontsize="15px" title="Adresa" text="Oradea, str. Ceyrat, nr. 35A, bl. WR6, ap. SC3"  />
            <ContactCard textcolor="white"  icon={<FiPhone size="25px"/>}  fontsize="15px" title="Telefon" text="(+40) 743 954 660" link="tel:0743954660"/>
            <ContactCard textcolor="white"  icon={<AiOutlineMail size="25px"/>}  fontsize="15px" title="Mail" text="office@ovinstalelectric.ro" link="mailto:office@ovinstalelectric.ro"/>
            </div>




            </div>
            </footer>     
    )
};

export default Footer;