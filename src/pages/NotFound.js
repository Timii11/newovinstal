import React from "react";
import TitlePage from "../components/TitlePage";
import RouteTitle from "../components/RouteTitle";


const NotFound = () => {
    return(
        <div className="page">
        <TitlePage title="Pagina Indisponibila #404" />     

        <div className="pagemargin">
        <RouteTitle title="Pagina Indisponibila #404" />

        <div className="notfoundtext">
            Pagina este indisponibila, va rugam sa reveniti la o pagina valida !
        </div>

        </div>
        </div>
    );
}


export default NotFound;