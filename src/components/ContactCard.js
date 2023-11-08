import React from "react";
import "../css/components/contactcard.css"

const ContactCard = (props) => {


    return(
        
            <a target="_blank" className="contactcard" style={{color:props.textcolor}} href={props.link}>        

                {props.icon}
       
            <div className="text">
            <h2 style={{fontSize:props.fontsize}}>{props.title}</h2>
            <p style={{fontSize:props.fontsize}}>{props.text}</p>
            </div>
            </a>
        

    );


}


export default ContactCard;