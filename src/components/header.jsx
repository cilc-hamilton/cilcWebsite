import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar.jsx"
import Mobilenav from "../navbar/mobile.jsx";
import { useLocation, Link, Outlet } from 'react-router-dom';
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
        if (location[i]!="a"){
            location[i]=location[i][0].toUpperCase() + location[i].substr(1);
        }
    }
    const [loc1, setLoc1] = useState('/about')
    const [nam1, setNam1] = useState('About the CILC')
    const [loc2, setLoc2] = useState('/join-us')
    const [nam2, setNam2] = useState('Ways to Help')
    useEffect(()=>{
        if (location[0]=='About'){
            setLoc1('/programmes')
            setNam1('Our Programmes')
        }
        if (location[0]=='Join'){
            setLoc2('/donate')
            setNam2('Donate Now!')
        }
    }, [])

    const colours = {
        "cilcblue": "87,171,196",
        "cilcdarkblue": "53,128,151",
        "cilcgreen": "189,216,79",
        "cilcpurple": "73,60,151",
        "cilcred": "219,25,40",
        "cilcmedblue": "0,102,204",
        "cilcgrey": "240,240,240",
        "cilcgray": "#224,224,224",
        "deepblue": "33,53,71",
        "gold": '247,208,0',
        "white": '255,255,255',
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
            <Navbar/>
            <Mobilenav/>
            <div className="w-screen overflow-hidden flex flex-col min-[900px]:flex-row items-center justify-center h-fit min-[900px]:h-[600px] min-[900px]:w-screen">
                <div className={"flex items-center justify-center w-screen overflow-hidden"}>
                    <img className="w-screen h-[600px] object-cover" src={props.image||"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}></img>
                </div>
            </div>
            <div className="h-24 w-4/5 top-[440px] left-[10%] flex flex-col min-[900px]:flex-row items-center justify-center absolute">
                <Link className="h-full w-full min-[900px]:w-[30%]" to={loc1}>
                    <div className="animate-pulse hover:!animate-none transition-all border-4 border-transparent hover:border-white shadow-[0_0_20px_0_rgba(0,0,0,0.2)] w-full hover:brightness-200 bg-[rgba(255,255,255,0.8)] h-full p-4 items-center justify-center hidden min-[900px]:flex">
                        <h3 className='text-[1.5rem] flex items-center justify-center text-center'>{nam1}</h3>
                    </div>
                </Link>
                <div className="w-[5%] h-4 hidden min-[900px]:block"/>
                <div style={{ backgroundColor: 'rgba('+colour+',0.6)', border: '4px solid rgb('+colour+')', boxShadow: '0 0 20px 0 rgba('+colour+',0.8)' }} className="border-2 w-full min-[900px]:w-[30%] h-full flex p-4 items-center justify-center">
                    <h3 className='text-[1.6rem] flex items-center justify-center text-center'>{location.join(' ')}</h3>
                </div>
                <div className="w-[5%] h-4 hidden min-[900px]:block"/>
                <Link className="h-full w-full min-[900px]:w-[30%]" to={loc2}>
                    <div className="animate-pulse hover:!animate-none transition-all border-4 border-transparent hover:border-white shadow-[0_0_20px_0_rgba(0,0,0,0.2)] w-full hover:brightness-200 bg-[rgba(255,255,255,0.8)] h-full flex p-4 items-center justify-center hidden min-[900px]:flex">
                        <h3 className='text-[1.5rem] flex items-center justify-center text-center'>{nam2}</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Header