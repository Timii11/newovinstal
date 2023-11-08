import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import "../css/components/count.css"

const Count = (props) =>{

 



    return(
        <div className="counter">
        {props.img}
        <CountUp end={Number(props.number)} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <h2 className="timer count-title count-number" ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
        <p className="stats-text">{props.title}</p>
         </div>
    );

}

export default Count;