import React from "react";
import { NavLink } from "react-router-dom";
import '../css/components/buttonborder.css'

const ButtonBorder = (props) => {
return(<NavLink className="buttonborder" to={"/" + props.link}>{props.textlink}</NavLink>);
}

export default ButtonBorder;