import React from "react";
import "../css/components/background.css";

const Background = (props) => {

    return(
        <div className="background" style={{backgroundImage:`url(${props.backimg})`}}>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        </div>
    );

}

export default Background;