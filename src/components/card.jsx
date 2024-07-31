import React from "react";

function Card(props){
    const colours = {
        "cilcblue": "#57ABC4",
        "cilcdarkblue": "#358097",
        "cilcgreen": "#BDD84F",
        "cilcpurple": "#493C97",
        "cilcred": "#DB1928",
        "cilcmedblue": "#0066CC",
        "cilcgrey": "#F0F0F0",
        "deepblue": "#213547",
        "gold": '#F7D000',
    }
    let colour = props.color
    if (colour == ""){
        colour = "white"
    }
    if (colours.hasOwnProperty(colour)){
        colour = colours[colour]
    }
    return (
        <>
            <div style={{backgroundColor: colour}} className="bg-cilcgreen flex flex-col items-center justify-center p-16 w-full">
                {props.children}
            </div>
        </>
    )
}
export default Card