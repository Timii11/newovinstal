import React from "react";
import { NavLink } from "react-router-dom";
import "../css/components/projectcard.css";


const ProjectCard = (props) =>{

    return(
        <div className={"magnific-img " + props.direction}>
        <NavLink to={props.link}>
            <img src={props.img} />
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.tex}</p>
                <p>{props.subtext}</p>
            </div>
        </NavLink>
    </div>
    );

}


export default ProjectCard;