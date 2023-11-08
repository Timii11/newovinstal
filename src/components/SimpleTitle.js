import React from "react";
import "../css/components/simpletitle.css";

const SimpleTitle = (props) => {

    return(
        <div className="simpletitle">
        <h3>{props.title}<a>.</a></h3>
        <p>{props.subtitle}</p>
        </div>
    );

}

export default SimpleTitle;