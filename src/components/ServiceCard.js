import React from 'react';
import '../css/components/servicecard.css';


const SimpleCard=(props)=> {

        return (
            <div className="servicecard" style={{background:props.color}} >
                <div className="servicecardinfo">
                    <h4>{props.title}</h4>
                    <div className="servicetext">
                    {props.text}
                    </div>
                    <div className="rightimg" >
                    <img src={props.icon} />
                    </div>
                </div>
            </div >
        )
    
}

export default SimpleCard;