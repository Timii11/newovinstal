import React from "react";
import TitlePage from "../components/TitlePage";
import RouteTitle from "../components/RouteTitle";
import ProjectCard from "../components/ProjectCard";
import "../css/pages/projects.css";

import pram from "../imagefirstpage/pram.jpg";
import retele from "../imagefirstpage/retele.jpg";
import locuinte from "../imagefirstpage/locuinte.jpg";
import industriale from "../imagefirstpage/industriale.jpg";
import stradal from "../imagefirstpage/stradal.jpg";
import fotovoltaice from "../imagefirstpage/fotovoltaice.jpg";

const Projects = () => {

    return(
        <div className="page">
        <TitlePage title="Proiecte" />     

        <div className="pagemargin">
        <RouteTitle title="Proiecte" />

        <ProjectCard  link="showprojects/pram" direction="right" img={pram} title="Verificari PRAM" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" subtext="Vezi mai mult" />
        <ProjectCard  link="showprojects/retele" direction="left" img={retele} title="Proiectare si executie retele subterane si aeriene de joasa si medie tensiune, posturi de transformare, bransamente electrice" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" subtext="Vezi mai mult" />
        <ProjectCard  link="showprojects/locuinte" direction="right" img={locuinte} title="Proiectare si executie instalatii electrice interioare si exterioare pentru cladiri civile (case de locuit,blocuri)" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" subtext="Vezi mai mult" />
        <ProjectCard  link="showprojects/industriale" direction="left" img={industriale} title="Proiectare si executie instalatii electrice interioare si exterioare industriale (hale)" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" subtext="Vezi mai mult" />
        <ProjectCard  link="showprojects/stradal" direction="right" img={stradal} title="Proiectare si executie iluminat stradal" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" subtext="Vezi mai mult" />
        <ProjectCard  link="showprojects/fotovoltaice" direction="left" img={fotovoltaice} title="Proiectare si executie sisteme de panouri fotovoltaice" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" subtext="Vezi mai mult" />

    </div>

        </div>
    );
}

export default Projects