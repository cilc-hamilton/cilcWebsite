import React from "react";
import { useState } from 'react'

function Navlinks(props) {
    let h = ""
    if (props.pos=="mobile"){
        h = " h-full items-center"
    }
    return (
        <>
            <div className = {"flex px-6 py-3 cursor-pointer border-b-4 border-white hover:border-black"+h}>
                <h2>{props.children}</h2>
            </div>
        </>
    )
}
function Navbuttons(props) {
    return (
        <>
            <div className = "filter px-6 py-3 bg-cilcblue cursor-pointer ml-8 hover:brightness-110">
                <h2 className = "text-white">{props.children}</h2>
            </div>
        </>
    )
}
export {Navlinks, Navbuttons};