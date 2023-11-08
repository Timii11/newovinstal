import React from 'react';
import ButtonSolid from './ButtonSolid';
import '../css/components/simplecard.css'


const SimpleCard=(props)=> {

        return (
            <div className="simplecard" style={{ height: props.height }}>
               <div>
                <img src={props.image} />
                <h1>{props.title}</h1>
                </div> 
                <div className="simplecardtext">{props.text}</div>
                {
                    props.link ? <ButtonSolid link={props.link} textlink={props.textlink}/> : null
                }
            </div >
        )
    
}

export default SimpleCard;