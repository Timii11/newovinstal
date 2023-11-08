import React from "react";
import '../css/components/routetitle.css';

const RouteTitle = (props) => {
return(
   <div className="routetitle">
       <h1>{props.title}</h1>
   </div>
);
}

export default RouteTitle;