import React from "react";
import { NavLink } from "react-router-dom";
import '../css/components/buttonsolid.css'

const ButtonSolid = (props) => {
return(<NavLink className="buttonsolid" to={"/" + props.link}>{props.textlink}</NavLink>);
}

export default ButtonSolid;