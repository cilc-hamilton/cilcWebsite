import React from "react";
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

function Navlinks(props) {
    const colours = {
        "cilcblue": "#57ABC4",
        "cilcdarkblue": "#358097",
        "cilcgreen": "#BDD84F",
        "cilcpurple": "#493C97",
        "cilcred": "#DB1928",
        "cilcmedblue": "#0066CC",
        "cilcgrey": "#F0F0F0",
        "cilcgray": "#E0E0E0",
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
    let h=""
    let flexD="row"
    if (props.pos=="mobile"){
        h=" h-full items-center"
        flexD="col"
    }
    const [dropDisplay, changeDisplay] = useState("none");
    const handleHover = () => {
        if (props.dropdown){
            changeDisplay("flex")
        }
    };
    const handleOff = () => {
        if (props.dropdown){
            changeDisplay("none")
        }
    }
    function addDrops(){
        if (props.dropdown){
            let rows = []
            let inputRows = props.dropdown.split(',')
            for (let i = 0; i<inputRows.length; i++){
                let subLink = inputRows[i].toLowerCase()
                subLink = subLink.replaceAll(" ", "-")
                rows.push(
                    <Link key={i} to={props.toward+"/"+subLink}>
                        <h2 className={"bg-white px-6 py-2 flex flex-"+flexD+" items-center justify-center hover:brightness-90"}>{inputRows[i]}</h2>
                    </Link>
                )
            }
            return rows
        } return
    }
    if (props.toward=='more'){
        return(
            <>
                <div className = "inline-flex flex-col relative" onMouseEnter={handleHover} onMouseLeave={handleOff}>
                    <div style={{borderColor:colour}} className={"flex flex-row px-4 min-[900px]:px-6 py-1 pt-3 px-3 cursor-pointer border-b-4 border-solid hover:brightness-0 min-[900px]:hover:brightness-90 min-[900px]:bg-white"+h}>
                        <h2 className="flex flex-row items-center justify-center gap-2">{props.children}</h2>
                    </div>
                    <div style={{
                        display: dropDisplay, 
                        flexDirection: "column", 
                        clipPath: "inset(2.25rem -1rem -1rem -1rem)",
                    }} className="absolute -z-10 w-0 min-w-full">
                        <div className="h-[1.8rem] box-content my-2 border-b-4 border-white"></div>
                        <div className="flex flex-col shadow-[0_5px_5px_2px_rgba(0,0,0,0.2)]">
                            {addDrops()}
                        </div>
                    </div>
                    <Outlet/>
                </div>
            </>
        )
    }
    return (
        <>
            <div className = "inline-flex flex-col relative" onMouseEnter={handleHover} onMouseLeave={handleOff}>
                <Link to={props.toward}>
                    <div style={{borderColor:colour}} className={"flex flex-row px-4 min-[900px]:px-6 py-1 pt-3 px-3 cursor-pointer border-b-4 border-solid hover:brightness-0 min-[900px]:hover:brightness-90 min-[900px]:bg-white"+h}>
                        <h2 className="flex flex-row items-center justify-center gap-2">{props.children}</h2>
                    </div>
                </Link>
                <div style={{
                    display: dropDisplay, 
                    flexDirection: "column", 
                    clipPath: "inset(2.25rem -1rem -1rem -1rem)",
                }} className="absolute -z-10 w-0 min-w-full">
                    <div className="h-[1.8rem] box-content my-2 border-b-4 border-white"></div>
                    <div className="flex flex-col shadow-[0_5px_5px_2px_rgba(0,0,0,0.2)]">
                        {addDrops()}
                    </div>
                </div>
                <Outlet/>
            </div>
        </>
    )
}
function Navbuttons(props) {
    return (
        <>
            <div className="filter px-6 py-3 bg-cilcdarkblue cursor-pointer ml-8 hover:brightness-110">
                <h2 className="text-white flex flex-row items-center justify-center">{props.children}</h2>
            </div>
        </>
    )
}
function Donatebutton() {
    const [width, setWidth] = useState(0)
    return (
        <>
            <div className="flex flex-row" onMouseOver={() => {setWidth(48)}} onMouseLeave={() => {setWidth(0)}}>
                <div style={{maxWidth: width+'rem', transition: "max-width 1s" }} className={"lg:flex flex-row overflow-hidden hidden"}>
                    <a href="https://www.canadahelps.org/en/dn/35893?v2=true" target="_blank" rel="noopener noreferrer">
                        <div style={{maxWidth: width+'rem', transition: "max-width 1s"}} className={"bg-cilcgreen px-6 py-3 cursor-pointer hover:brightness-110"}>
                            <h2>CanadaHelps</h2>
                        </div>
                    </a>
                    <a href="https://www.paypal.com/ca/fundraiser/charity/3423778" target="_blank" rel="noopener noreferrer">
                        <div style={{maxWidth: width+'rem', transition: "max-width 1s"}} className={"bg-gold px-6 py-3 cursor-pointer hover:brightness-110"}>
                            <h2>Paypal</h2>
                        </div>
                    </a>
                </div>
                <Link to="/donate">
                    <div className="filter flex flex-row px-6 py-3 bg-cilcred cursor-pointer hover:brightness-110">
                        <h2 className="text-white flex flex-row items-center justify-center">Donate Now!</h2>
                    </div>
                </Link>
            </div>
        </>
    )
}
export {Navlinks, Navbuttons, Donatebutton};