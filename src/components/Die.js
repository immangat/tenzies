import React from "react";
import '../styles/Die.css'

export default function Die(props){
    const styles = {
        backgroundColor : props.isHeld ? "orange" : "pink"
    }
    return (
    <div className="die" style={styles} onClick={props.handleClick}>
        <div className="die--value">{props.value}</div>
    </div>
    )
}