import React from "react";
import TitlePage from "../components/TitlePage";
import RouteTitle from "../components/RouteTitle";
import SimpleCard from "../components/ServiceCard";
import "../css/pages/service.css";
import icon1 from "../icon/icon29.svg";
import icon2 from "../icon/icon23.svg";
import icon3 from "../icon/icon26.svg";
import icon4 from "../icon/icon27.svg";
import icon5 from "../icon/icon25.svg";
const Service = () => {

    return(
        <div className="page">
        <TitlePage title="Servicii" />      
        
        <div className="pagemargin">
        <RouteTitle title="Servicii" />



            <div className="serviceplace">
                <SimpleCard title="Instalatie Electrica Medie Tensiune" text={<div>&emsp;Printre serviciile specifice acestor tipuri de instalatii amintim:
                    <ul>
                        <li>&nbsp;Montari de transformatoare de curent si echipamente de medie tensiune.</li>
                        <li>&nbsp;Executare mansoane si capete terminale medie tensiune.</li>
                        <li>&nbsp;Montare, preverificare, testare si punere in functiune instalatii electrice.</li>
                        <li>&nbsp;Executarea instalatiei de impamantare pentru case.</li>
                        <li>&nbsp;Proiectarea, executia si mentenanta retelelor electrice supraterane si subterane de medie tensiune.</li>
                        <li>&nbsp;Montare celule medie tensiune in statii de transformare.</li>
                </ul></div>} icon={icon1} color="#6fabc9" />

                <SimpleCard title="Instalatii Electrice Locuinte" text={<ul>
                    <li>&nbsp;circuite electrice si modificarea instalatiei</li>
                    <li>&nbsp;remedierea instalatiei de iluminat si prize</li>
                    <li>&nbsp;centuri de impamantare</li>
                    <li>&nbsp;montaj tablouri electrice si sigurante</li>
                    <li>&nbsp;montaj aparataj electric</li>
                    <li>&nbsp;montare senzori electrici si crepusculari</li>
                    <li>&nbsp;montare corpuri de iluminat</li>
                    <li>&nbsp;pregatire traseu si montarea dozelor</li>
                </ul>} icon={icon2} color="#8ae897" />
                
                <SimpleCard title="Bransamente Electrice" text="&emsp;Bransamente aeriene si subterane la tensiunea nominala de pana la 20kv. Oferim acest serviciu pentru orice tip de constructii de la cele civile pana la industriale, cat si verificari anuale ale prizei de pamant." icon={icon3} color="#7d8d9c"/>
                <SimpleCard title="Transformatoare De Medie Tensiune" text="&emsp;Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." icon={icon4} color="#5ac6aa"/>
                <SimpleCard title="Garantie" text="&emsp;Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." icon={icon5} color="#846f75"/>
            </div>


        </div>
        </div>
    );
}


export default Service;