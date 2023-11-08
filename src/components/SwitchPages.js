import React from "react";
import TitlePage from "../components/TitlePage";
import RouteTitle from "../components/RouteTitle";
import PhotoPlace from "./PhotoPlace";




const SwitchPages = (props) => {

    return(
        <div className="page">
        <TitlePage title={props.title} />      
        
        <div className="pagemargin">
        <RouteTitle title={props.title} />


        <PhotoPlace key={props.index} photos={props.photos} />


        </div>


        </div>
    );
}


export default SwitchPages;