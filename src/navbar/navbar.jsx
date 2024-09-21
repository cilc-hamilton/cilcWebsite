import React, { useState, useEffect } from "react";
import { Navlinks, Navbuttons, Donatebutton } from "./navcomponents"
import { Outlet, Link } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { FaBars, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosClose } from "react-icons/io";

function Navbar() {
    const [showMenu, setShowMenu] = useState('0')
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
            <div className="h-36 z-30 hidden flex-row bg-white w-screen px-12 fixed top-0 left-0 box-border shadow-[0_10px_10px_0_rgba(0,0,0,0.2)] items-stretch min-[900px]:flex">
                <Link className="flex items-center justify-center" to="/#/">
                    <div className="flex flex-row cursor-pointer items-center justify-center">
                        <img className="h-24" src="/images/logo.png"></img>
                        <div className="flex flex-col pl-6">
                            <h1 style={{fontFamily: 'century'}} className="font-light -mb-0.5 text-2xl">Children's</h1>
                            <h1 style={{fontFamily: 'century'}} className="font-light -mb-0.5 -mt-0.5 text-2xl">International</h1>
                            <h1 style={{fontFamily: 'century'}} className="font-light -mt-0.5 text-2xl">Learning Centre</h1>
                        </div>
                    </div>
                </Link>
                <div className="grow"></div>
                <div className="flex flex-col justify-end items-end">
                    <div className="flex flex-row mb-4 gap-4">
                        <Link to="/#/contact">
                            <Navbuttons>Contact Us</Navbuttons>
                        </Link>
                        <Link to="/#/donate">
                            <Donatebutton/>
                        </Link>
                    </div>
                    <div className="flex-row hidden lg:flex">
                        <Navlinks dropdown = "Team,Organization" toward="/#/about" color="gold">
                            About
                            <GoChevronDown className="ml-2"/>
                        </Navlinks>
                        <Navlinks dropdown = "Book Nook,Past Newsletters,Videos" toward="/#/resources" color="cilcpurple">
                            Resources
                            <GoChevronDown className="ml-2"/>
                        </Navlinks>
                        <Navlinks toward="/#/programmes" color="cilcgreen">Programmes</Navlinks>
                        <Navlinks dropdown = "Volunteer,Become a Member,Supporters" toward="/#/join-us" color="cilcblue">
                            Join Us
                            <GoChevronDown className="ml-2"/>
                        </Navlinks>
                    </div>
                    <div className="flex-row flex lg:hidden cursor-pointer mb-3" onClick={()=>{setShowMenu('18rem')}}>
                        <IconContext.Provider value={{ size: "2rem" }}>
                            <FaBars/>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <Outlet/>
            <div style={{ width: showMenu }} className="transition-all overflow-x-hidden h-screen fixed lg:!hidden hidden min-[900px]:flex flex-col py-12 bg-white z-40 top-0 right-0 shadow-[-10px_0_10px_0_rgba(0,0,0,0.2)] items-start justify-start">
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
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/#/">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Home</h2>
                        </Link>
                        <div className="w-full flex flex-row">
                            <Link className="flex items-center justify-start w-full py-4 px-8 bg-white hover:brightness-90" to="/#/about">
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
                            <Link className="flex items-center justify-start w-full py-4 px-8 bg-white hover:brightness-90" to="/#/resources">
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
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/#/programmes">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Programmes</h2>
                        </Link>
                        <div className="w-full flex flex-row">
                            <Link className="w-full flex items-center justify-start w-full py-4 px-8 bg-white hover:brightness-90" to="/#/join-us">
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
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/#/about">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">About</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/#/about/team">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Team</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/#/about/organization">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Organization</h2>
                        </Link>
                    </div>
                    <div style={{ width: showResources }} className="transition-all overflow-x-hidden flex flex-col items-center align-center">
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/#/resources">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Resources</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/#/resources/team">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Book Nook</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/#/resources/organization">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Past Newsletters</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/#/resources/videos">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Videos</h2>
                        </Link>
                    </div>
                    <div style={{ width: showJoin }} className="transition-all overflow-x-hidden flex flex-col items-center align-center">
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-12 bg-white hover:brightness-90" to="/#/join-us">
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Join Us</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/#/join-us/volunteer">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Volunteer</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/#/join-us/become-a-member">
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                                <FaAngleRight/>
                            </IconContext.Provider>
                            <h2 className="whitespace-nowrap text-left flex-nowrap overflow-hidden !text-[1.2rem] flex flex-row items-center justify-start grow">Become a Member</h2>
                        </Link>
                        <Link className="flex items-center justify-start w-full py-4 px-8 gap-4 bg-white hover:brightness-90" to="/#/join-us/supporters">
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
export default Navbar