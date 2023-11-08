import React from "react";
import TitlePage from "../components/TitlePage";
import RouteTitle from "../components/RouteTitle";
import Timeline from "../components/Timeline";

const About = () => {

    return(
        <div className="page">
        <TitlePage title="Despre" />      
        
        <div className="pagemargin">
        <RouteTitle title="Despre" />

        <p className="text">
        &emsp;OVINSTAL ELECTRIC este o companie electrica autorizata, asigurata si acreditata. Oferim o manopera de calitate superioara alaturi de servicii profesionale si prietenoase. Fie ca aveti nevoie de un apel de serviciu pentru depanarea unei lumini sau de un echipaj pentru a face fata unui proiect de constructie complet, puteti avea incredere in noi. In afaceri din 2010, am crescut in mod constant prin clienti multumiti de proiectele noastre si intentionam sa continuam acest model.
        </p>

        <Timeline/>
        </div>


        </div>
    );
}


export default About;