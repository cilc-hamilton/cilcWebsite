import React from "react";
import { Navlinks, Navbuttons, Donatebutton } from "./navcomponents"
import { Outlet, Link } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";

function Navbar() {
    return (
        <>
            <div className="h-36 z-50 hidden flex-row bg-white w-screen px-12 fixed top-0 left-0 box-border shadow-[0_10px_10px_0_rgba(0,0,0,0.2)] items-stretch min-[900px]:flex">
                <Link className="flex items-center justify-center" to="/">
                    <div className="flex flex-row cursor-pointer items-center justify-center">
                        <img className="h-24" src="/images/logo.png"></img>
                        <div className="flex flex-col pl-6">
                            <h1 className="font-light -mb-0.5 text-2xl">Children's</h1>
                            <h1 className="font-light -mb-0.5 -mt-0.5 text-2xl">International</h1>
                            <h1 className="font-light -mt-0.5 text-2xl">Learning Centre</h1>
                        </div>
                    </div>
                </Link>
                <div className="grow"></div>
                <div className="flex flex-col justify-end items-end">
                    <div className="flex flex-row mb-4">
                        <Link to="/contact">
                            <Navbuttons>Contact Us</Navbuttons>
                        </Link>
                        <Link to="/donate">
                            <Donatebutton/>
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        <Navlinks dropdown = "Team,Organization" toward="/about">
                            About
                            <GoChevronDown className="ml-2"/>
                        </Navlinks>
                        <Navlinks dropdown = "Book Nook,Cultural Celebrations,Past Newsletters,Videos" toward="/resources">
                            Resources
                            <GoChevronDown className="ml-2"/>
                        </Navlinks>
                        <Navlinks toward="/programmes">Programmes</Navlinks>
                        <Navlinks dropdown = "Volunteer,Become a Member,Supporters" toward="/join-us">
                            Join us
                            <GoChevronDown className="ml-2"/>
                        </Navlinks>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default Navbar