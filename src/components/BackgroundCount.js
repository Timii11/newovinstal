import React from "react";
import Count from "./Count";
import "../css/components/backgroundcount.css";
import {BsClockFill} from "@react-icons/all-files/bs/BsClockFill";
import {GiCoffeeCup} from "@react-icons/all-files/gi/GiCoffeeCup";
import {AiOutlineFundProjectionScreen} from "@react-icons/all-files/ai/AiOutlineFundProjectionScreen";


const BackgroundCount = (props) =>{


    const calculate_age = dob => {
        const birthDate = new Date(dob);
        const difference = Date.now() - birthDate.getTime();
        const age = new Date(difference);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    return(
        <div className="wrapper">

        <section className="section section--red">
            <div className="shell-fluid">
                <div className="section__aside section__aside--primary">
                    <figure style={{backgroundImage:`url(${props.backimg})`}}></figure>
                </div>

                <div className="section__content">
                    <h3 className="text-shadow">{props.title}</h3>

                    <p>{props.text}</p>

                    <p>{props.subtitle}</p>

                    <div className="counting">

                       
                <Count img={<GiCoffeeCup size="50px" color="black"/>} number="999" title="Cafele" />
                <Count img={<BsClockFill size="50px" color="black"/>} number={calculate_age("1-1-2010")} title="Ani De Experienta" />
                <Count img={<AiOutlineFundProjectionScreen size="50px" color="black"/>} number="53" title="Proiecte" />

                      

                    </div>
                </div>
            </div>
        </section>

    </div>
    );
}

export default BackgroundCount;