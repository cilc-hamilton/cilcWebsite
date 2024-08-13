import React from "react";
import Navbar from "../navbar/navbar.jsx"
import Mobilenav from "../navbar/mobile.jsx";
import { useLocation } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa6";
import { IconContext } from "react-icons";
import Maps from "./maps.jsx";
import Contactform from "./contactform.jsx";

function Header(props){
    let location=useLocation();
    location=location.pathname.slice(location.pathname.lastIndexOf('/'))
    location=location.replaceAll("-", " ").replaceAll("/", "").split(" ")
    if (location[0].length==0){
        location[0]="home"
    }
    for (let i=0; i<location.length; i++){
        location[i]=location[i][0].toUpperCase() + location[i].substr(1);
    }
    let imgDisplay="flex"
    if (props.image==""){
        imgDisplay="hidden"
    }
    return (
        <>
            <Navbar/>
            <Mobilenav/>
            <div className="w-screen overflow-hidden flex flex-col min-[900px]:flex-row items-center justify-center h-fit min-[900px]:h-[600px] min-[900px]:w-screen">
                {/* <div className="w-screen min-[900px]:w-[30vw] flex flex-col items-center justify-center h-full grow-0 box-border p-8 bg-cilcmedblue">
                    <h1 className="text-[2em] font-semibold text-white text-5xl pb-2 text-center">{location.join(" ")}</h1>
                    <h2 className="text-white text-2xl pb-4">{props.desc}</h2>
                    <div className="rounded bg-[#ffffff44] group w-10 h-10 overflow-hidden mt-4 cursor-pointer">
                        <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                            <FaArrowDown className="relative left-[50%] -translate-x-1/2 transition ease-out -translate-y-10 group-hover:delay-200 group-hover:translate-y-2"/>
                            <FaArrowDown className="relative left-[50%] -translate-x-1/2 transition ease-out -translate-y-4 delay-200 group-hover:delay-[0s] duration-300 group-hover:translate-y-8"/>
                        </IconContext.Provider>
                    </div>
                </div> */}
                <div className={imgDisplay+" flex items-center justify-center w-screen overflow-hidden"}>
                    {/* <img className="w-screen min-[900px]:w-[70vw] h-[600px] object-cover" src={props.image}></img> */}
                    <img className="w-screen h-[600px] object-cover" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"></img>
                </div>
                <Maps displaying={props.component}/>
                <Contactform displaying={props.component} formHeight={props.formHeight}/>
            </div>
        </>
    )
}
export default Header