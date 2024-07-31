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
                <div style={{display: dropDisplay, flexDirection: "column"}} className="absolute -z-10 w-0 min-w-full">
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
export {Navlinks, Navbuttons};