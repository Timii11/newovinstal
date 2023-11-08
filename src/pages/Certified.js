import React from "react";
import TitlePage from "../components/TitlePage";
import RouteTitle from "../components/RouteTitle";
import log1 from "../certified/log1.png";
import log2 from "../certified/log2.png";
import log3 from "../certified/log3.png";
import log4 from "../certified/log4.png";
import certified1 from "../certified/certificatisocalitate.png";
import certified2 from "../certified/certificatisomediu.png";
import certified3 from "../certified/atestatc1a.png";
import certified4 from "../certified/atestatc2a.png";
import "../css/pages/certified.css"

const Certified = () => {

    return(
        <div className="page">
        <TitlePage title="Certificate" />      
        
        <div className="pagemargin">
        <RouteTitle title="Certificate" />

        <p className="text">
        &emsp;Suntem dedicati dezvoltarii sistemului de management integrat si operarii acestuia. Scopul este de a controla si imbunatati continuu performanta in domeniul calitatii mediului, energiei si sigurantei conform certificatelor de mai jos:
        </p>

        <div className="logos">
            <img src={log1} />
            <img src={log2} />
            <img src={log3} />
            <img src={log4} />
        </div>


    	<div className="certified-img">
			<img src={certified1} />
			<img src={certified2} />
			<img src={certified3} />
			<img src={certified4} />
		</div>




        </div>


        </div>
    );
}


export default Certified;