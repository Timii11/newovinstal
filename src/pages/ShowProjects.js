import React from "react";
import SwitchPages from "../components/SwitchPages";
import NotFound from "./NotFound";
import {useParams} from "react-router-dom";
import {fotovoltaice} from "../projects-json/fotovoltaice";
import {industriale} from "../projects-json/industriale";
import {locuinte} from "../projects-json/locuinte";
import {pram} from "../projects-json/pram";
import {retele} from "../projects-json/retele";
import {stradal} from "../projects-json/stradal"



const ShowProjects = () => {

    const {param} = useParams();
    const pages = ['fotovoltaice','industriale','locuinte','pram','retele','stradal'];
    return( 
            {
                'null':<NotFound/>,
                'fotovoltaice':<SwitchPages  title="Proiectare si executie sisteme de panouri fotovoltaice" photos={fotovoltaice} />,
                'industriale':<SwitchPages title="Proiectare si executie instalatii electrice interioare si exterioare industriale (hale)" photos={industriale} />,
                'locuinte':<SwitchPages  title="Proiectare si executie instalatii electrice interioare si exterioare pentru cladiri civile (case de locuit,blocuri)" photos={locuinte} />,
                'pram':<SwitchPages  title="Verificari PRAM" photos={pram} />,
                'retele':<SwitchPages  title="Proiectare si executie retele subterane si aeriene de joasa si medie tensiune, posturi de transformare, bransamente electrice" photos={retele} />,
                'stradal':<SwitchPages title="Proiectare si executie iluminat stradal" photos={stradal} />
            }[pages.includes(param)?param:'null']
    );
  
}


export default ShowProjects;