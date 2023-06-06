import React from "react";
import '../styles/Die.css'

export default function Die(props) {


    const styles = {
        backgroundColor: props.isHeld ? "orange" : "pink"
    }

    function getStyles(dot, dots) {
        var style
        switch (dots) {
            case 1:
                style = {
                    gridColumn: '2', /* Place in first column */
                    gridRow: '2'
                }
                break;
            case 2:
                switch(dot){
                    case 0:
                        style = {
                            gridColumn: '1', /* Place in first column */
                            gridRow: '1'
                        }
                        break;
                    case 1:
                        style = {
                            gridColumn: '3', /* Place in first column */
                            gridRow: '3'
                        }
                        break;
                }
                break;
            case 3:
                switch(dot){
                    case 0:
                        style = {
                            gridColumn: '1', /* Place in first column */
                            gridRow: '1'
                        }
                        break;
                    case 1:
                        style = {
                            gridColumn: '2', /* Place in first column */
                            gridRow: '2'
                        }
                        break;
                    case 2:
                        style = {
                            gridColumn: '3', /* Place in first column */
                            gridRow: '3'
                        }
                        break;
                }
                break;
            case 4:
                switch(dot){
                    case 0:
                        style = {
                            gridColumn: '1', /* Place in first column */
                            gridRow: '1'
                        }
                        break;
                    case 1:
                        style = {
                            gridColumn: '1', /* Place in first column */
                            gridRow: '3'
                        }
                        break;
                    case 2:
                        style = {
                            gridColumn: '3', /* Place in first column */
                            gridRow: '1'
                        }
                        break;
                    case 3:
                        style = {
                            gridColumn: '3', /* Place in first column */
                            gridRow: '3'
                        }
                        break;
                }
                break;
            case 5:
                switch(dot){
                    case 0:
                        style = {
                            gridColumn: '1', /* Place in first column */
                            gridRow: '1'
                        }
                        break;
                    case 1:
                        style = {
                            gridColumn: '1', /* Place in first column */
                            gridRow: '3'
                        }
                        break;
                    case 2:
                        style = {
                            gridColumn: '3', /* Place in first column */
                            gridRow: '1'
                        }
                        break;
                    case 3:
                        style = {
                            gridColumn: '3', /* Place in first column */
                            gridRow: '3'
                        }
                        break;
                    case 4:
                        style = {
                            gridColumn: '2', /* Place in first column */
                            gridRow: '2'
                        }
                        break;
                    
                }
                break;
            case 6:
                switch(dot){
                    case 0:
                        style = {
                            gridColumn: '1', /* Place in first column */
                            gridRow: '1'
                        }
                        break;
                    case 1:
                        style = {
                            gridColumn: '1', /* Place in first column */
                            gridRow: '3'
                        }
                        break;
                    case 2:
                        style = {
                            gridColumn: '3', /* Place in first column */
                            gridRow: '1'
                        }
                        break;
                    case 3:
                        style = {
                            gridColumn: '3', /* Place in first column */
                            gridRow: '3'
                        }
                        break;
                    case 4:
                        style = {
                            gridColumn: '1', /* Place in first column */
                            gridRow: '2'
                        }
                        break;
                    case 5:
                        style = {
                            gridColumn: '3', /* Place in first column */
                            gridRow: '2'
                        }
                        break;
                    
                }
                break;
        }
        return style
    }

    const circles = function () {
        var tempArray = []
        for (let i = 0; i < props.value; i++) {
            const styles = getStyles(i, props.value)
            tempArray.push((
                <span className="dot" id={`dot${i}`} style={styles}></span>
            ))
        }
        return tempArray
    }()
    return (
        <div className="die" style={styles} onClick={props.handleClick}>
            <div className="die--value">{circles}</div>
        </div>
    )
}