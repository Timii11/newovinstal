import React,{useState,useRef,useEffect} from "react";
import Background from "../components/Background";
import SimpleTitle from "../components/SimpleTitle";
import SimpleCard from "../components/SimpleCard";
import GalleryCard from "../components/GalleryCard";
import BackgroundCount from "../components/BackgroundCount";
import VisibilitySensor from 'react-visibility-sensor';
import ButtonBorder from "../components/ButtonBorder";
import Ask from "../components/Ask";
import TitlePage from "../components/TitlePage";
import backimg1 from "../imagefirstpage/back1.jpg";
import backimg2 from "../imagefirstpage/back2.jpg";
import poanourifotovoltaice from "../imagefirstpage/panourifotovoltaice.jpg"
import retelejoasatensiune from "../imagefirstpage/retelejoasatensiune.jpg"
import retelemedietensiune from "../imagefirstpage/retelemedietensiune.jpg"
import icon1 from "../icon/icon26.svg";
import icon2 from "../icon/icon23.svg";
import icon3 from "../icon/icon29.svg";
import videoo from "../video/2.mp4";
import "../css/pages/home.css"



const Home = () => {

    const videoRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        if (isVisible) {
          videoRef.current.play();
        } else {
          if (videoRef.current.play) {
            videoRef.current.pause();
          }
        }
      }, [isVisible]);


    return(
        <div className="page">
            <TitlePage title="Acasă" />

            <Background title="OVINSTAL ELECTRIC" subtitle="Expertul tau in instalatii electrice" backimg={backimg1}/>
            <SimpleTitle title="Serviciile Noastre" subtitle="Mai mult decat niste simple servicii."/>
            
            <div className="simplecardplace">
            <SimpleCard title="Bransamente Electrice" text="Some textaaaaaaaaaaaaaaa aaaaaaaaaaaaa" image={icon1} link="#" textlink="MAI MULTE SERVICII"/>
            <SimpleCard title="Instalatie Electrica Locuinte" text="Some textaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa" image={icon2} link="#" textlink="MAI MULTE SERVICII"/>
            <SimpleCard title="Instalatie Electrica Medie Tensiune" text="Some textaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa" image={icon3} link="#" textlink="MAI MULTE SERVICII"/> 
            </div>

            <VisibilitySensor  onChange={(isVisible) => setIsVisible(isVisible)}>
            <div className="videocontent">
            <video  loop ref={videoRef} controls controlsList="nodownload" muted>
            <source src={videoo} type='video/mp4' />
            </video>
            </div>
            </VisibilitySensor>

            <BackgroundCount backimg={backimg2} title="Nu Suntem Doar O Alta Companie De Instalatii Electrice" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" subtitle="Cateva informatii despre OVINSTAL ELECTRIC in cifre:"/>
            <SimpleTitle title="Proiectele Noastre" subtitle="Cateva dintre proiectele noastre extraordinare pentru clientii nostri."/>
           
            <div className="vertical-line"/>

            <div className="gallerycardplacewrap">
            <div className="gallerycardplace">
            <GalleryCard img={poanourifotovoltaice} title="Panouri Fotovoltaice" />
            <GalleryCard img={retelejoasatensiune} title="Instalatii De Joasa Tensiune" />
            <GalleryCard img={retelemedietensiune} title="Instalatii De Medie Tensiune" />
            </div>
            <ButtonBorder link="projects" textlink="MAI MULTE PROIECTE"/>
            </div>

            <Ask title="Esti pregatit sa lucrezi cu noi ?" link="contact" textlink="CONTACTEAZA-NE" />
           

        </div>
    );

}

export default Home;