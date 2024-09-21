import React, { useState, useEffect } from "react";
import { Navlinks} from "./navcomponents"
import { Outlet, Link } from "react-router-dom";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaBars, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosClose } from "react-icons/io";

function Mobilenav() {
    const [showMenu, setShowMenu] = useState('10px')
    const [menuState, setMenuState] = useState('home')
    const [showHome, setShowHome] = useState('100%')
    const [showAbout, setShowAbout] = useState('0')
    const [showResources, setShowResources] = useState('0')
    const [showJoin, setShowJoin] = useState('0')
    const [showBack, setShowBack] = useState('block')

    useEffect(()=>{
        if (menuState=='home'){
            setShowHome('100%')
            setShowAbout('0')
            setShowResources('0')
            setShowJoin('0')
            setShowBack('none')
        } else if (menuState=='about'){
            setShowHome('0')
            setShowAbout('100%')
            setShowResources('0')
            setShowJoin('0')
            setShowBack('block')
        } else if (menuState=='resources'){
            setShowHome('0')
            setShowAbout('0')
            setShowResources('100%')
            setShowJoin('0')
            setShowBack('block')
        } else if (menuState=='join'){
            setShowHome('0')
            setShowAbout('0')
            setShowResources('0')
            setShowJoin('100%')
            setShowBack('block')
        }
    }, [menuState])

    return (
        <>
            <div className="h-16 z-50 flex flex-row bg-white w-screen px-5 fixed bottom-0 left-0 box-border justify-center items-stretch shadow-[0_-10px_10px_0_rgba(0,0,0,0.2)] min-[900px]:hidden">
                <div className="flex grow shrink basis-0 items-end">
                    <div className="w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks toward="/about" pos="mobile">
                            <FaHandsHoldingChild/>
                            About
                        </Navlinks>
                    </div>
                    <div className="w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks toward="/contact" pos="mobile">
                            <GrContact/>
                            Contact
                        </Navlinks>
                    </div>
                </div>
                <div className="z-1 absolute bg-white rounded-full aspect-square h-full p-1 box-content bottom-0"></div>
                <Link className="z-2" to="/">
                    <img className="h-14 px-5 pb-2 box-content brightness-100 hover:brightness-110" src="/images/logo.png"></img>
                </Link>
                <div className="flex grow shrink basis-0 items-end">
                    <div className="w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks toward="/donate" pos="mobile">
                            <BiSolidDonateHeart/>
                            Donate
                        </Navlinks>
                    </div>
                    <div className="w-full flex grow shrink basis-0 h-full items-center justify-center" onClick={()=>{
                        setShowMenu('100vw')
                    }}>
                        <Navlinks pos="mobile" toward="more">
                            <FaBars/>
                            More
                        </Navlinks>
                    </div>
                </div>
            </div>
            <div style={{ width: showMenu }} className="transition-all overflow-x-hidden h-screen fixed min-[900px]:!hidden flex flex-col py-12 bg-white z-40 top-0 right-0 items-start justify-start">
                <div className="flex items-center justify-center w-full mb-4 p-4">
                    <div style={{ display: showBack }} className="cursor-pointer" onClick={()=>{setMenuState('home')}}>
                        <IconContext.Provider value={{ size: "1.5rem" }}>
                            <FaAngleLeft/>
                        </IconContext.Provider>
                    </div>
                    <div className="grow"/>
                    <div className="cursor-pointer" onClick={()=>{setShowMenu('0')}}>
                        <IconContext.Provider value={{ size: "2rem" }}>
                            <IoIosClose/>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="w-full overflow-x-hidden flex flex-row items-start justify-center">
                    <div style={{ width: showHome }} className="transition-all overflow-x-hidden flex flex-col items-center align-center">
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Home</h2>
                        </Link>
                        <div className="w-full flex flex-row">
                            <Link className="flex items-center justify-start w-full py-4 px-8 bg-white hover:brightness-90" to="/about">
                                <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">About</h2>
                            </Link>
                            <div onClick={()=>{setMenuState('about')}} className="cursor-pointer flex items-center align-center px-8 bg-white hover:brightness-90">
                                <div>
                                    <IconContext.Provider value={{ size: "1.2rem" }}>
                                        <FaAngleRight/>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row">
                            <Link className="flex items-center justify-start w-full py-4 px-8 bg-white hover:brightness-90" to="/resources">
                                <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Resources</h2>
                            </Link>
                            <div onClick={()=>{setMenuState('resources')}} className="cursor-pointer flex items-center align-center px-8 bg-white hover:brightness-90">
                                <div>
                                    <IconContext.Provider value={{ size: "1.2rem" }}>
                                        <FaAngleRight/>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/programmes">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Programmes</h2>
                        </Link>
                        <div className="w-full flex flex-row">
                            <Link className="w-full flex items-center justify-start w-full py-4 px-8 bg-white hover:brightness-90" to="/join-us">
                                <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Join Us</h2>
                            </Link>
                            <div onClick={()=>{setMenuState('join')}} className="cursor-pointer flex items-center align-center px-8 bg-white hover:brightness-90">
                                <div>
                                    <IconContext.Provider value={{ size: "1.2rem" }}>
                                        <FaAngleRight/>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: showAbout }} className="transition-all overflow-x-hidden flex flex-col items-center align-center">
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/about">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">About</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/about/team">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Team</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/about/organization">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Organization</h2>
                        </Link>
                    </div>
                    <div style={{ width: showResources }} className="transition-all overflow-x-hidden flex flex-col items-center align-center">
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/resources">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Resources</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/resources/team">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Book Nook</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/resources/organization">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Past Newsletters</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/resources/videos">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Videos</h2>
                        </Link>
                    </div>
                    <div style={{ width: showJoin }} className="transition-all overflow-x-hidden flex flex-col items-center align-center">
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/join-us">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Join Us</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/join-us/volunteer">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Volunteer</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/join-us/become-a-member">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Become a Member</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/join-us/supporters">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Supporters</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mobilenav