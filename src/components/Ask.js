import React from "react";
import ButtonSolid from "./ButtonSolid"
import '../css/components/ask.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Ask = (props) => {
return(
    <div className="ask">
    <h1>{props.title}</h1>
    <ButtonSolid link={props.link} textlink={props.textlink} />
</div>
);
}

export default Ask;