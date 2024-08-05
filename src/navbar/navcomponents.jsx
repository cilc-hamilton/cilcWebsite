import React from "react";
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

function Navlinks(props) {
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
    return (
        <>
            <div className = "inline-flex flex-col relative" onMouseEnter={handleHover} onMouseLeave={handleOff}>
                <Link to={props.toward}>
                    <div className={"flex flex-row px-4 min-[900px]:px-6 py-1 px-3 cursor-pointer border-b-4 border-white hover:border-black hover:brightness-90"+h}>
                        <h2 className="flex flex-row items-center justify-center">{props.children}</h2>
                    </div>
                </Link>
                <div style={{
                    display: dropDisplay, 
                    flexDirection: "column", 
                    clipPath: "inset(2.25rem -1rem -1rem -1rem)",
                }} className="absolute -z-10 w-0 min-w-full shadow-[0_10px_10px_0_rgba(0,0,0,0.2)]">
                    <div className="h-[1.2em] box-content my-2 border-b-4 border-white"></div>
                    {addDrops()}
                </div>
                <Outlet/>
            </div>
        </>
    )
}
function Navbuttons(props) {
    return (
        <>
            <div className="filter px-6 py-3 bg-cilcblue cursor-pointer ml-8 hover:brightness-110">
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
                <div style={{maxWidth: width+'rem', transition: "max-width 1s"}} className={"flex flex-row ml-8 overflow-hidden"}>
                    <Link to="https://www.canadahelps.org/en/dn/35893?v2=true">
                        <div style={{maxWidth: width+'rem', transition: "max-width 1s"}} className={"bg-cilcgreen px-6 py-3 cursor-pointer hover:brightness-110"}>
                            <h2>CanadaHelps</h2>
                        </div>
                    </Link>
                    <Link to="https://www.paypal.com/ca/fundraiser/charity/3423778">
                        <div style={{maxWidth: width+'rem', transition: "max-width 1s"}} className={"bg-gold px-6 py-3 cursor-pointer hover:brightness-110"}>
                            <h2>Paypal</h2>
                        </div>
                    </Link>
                    <Outlet/>
                </div>
                <div className="filter flex flex-row px-6 py-3 bg-cilcblue cursor-pointerhover:brightness-110">
                    <h2 className="text-white flex flex-row items-center justify-center">Donate now!</h2>
                </div>
            </div>
        </>
    )
}
export {Navlinks, Navbuttons, Donatebutton};