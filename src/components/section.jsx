import React from "react";

function Section(props){
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
            <div style={{backgroundColor: colour}} className="flex flex-col py-12 px-48 box-border items-start justify-center w-screen overflow-hidden">
                {props.children}
            </div>
        </>
    )
}
export default Section