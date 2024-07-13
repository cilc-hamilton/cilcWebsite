import React from "react";
import { Navlinks, Navbuttons } from "./navcomponents"
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className = "hidden flex-row bg-white w-screen px-12 fixed top-0 left-0 box-border shadow-[0_10px_10px_0_rgba(0,0,0,0.2)] items-stretch min-[900px]:flex">
                <Link to = "/">
                    <div className = "flex flex-row cursor-pointer items-center my-8">
                        <img className = "h-24" src = "public/logo.png"></img>
                        <div className = "flex flex-col pl-6">
                            <h1 className = "font-light -mb-0.5 text-2xl">Children's</h1>
                            <h1 className = "font-light -mb-0.5 -mt-0.5 text-2xl">International</h1>
                            <h1 className = "font-light -mt-0.5 text-2xl">Learning Centre</h1>
                        </div>
                    </div>
                </Link>
                <div className = "grow"></div>
                <div className = "flex flex-col justify-end items-end">
                    <div className = "flex flex-row mb-4">
                        <Link to = "/contact">
                            <Navbuttons>Contact Us</Navbuttons>
                        </Link>
                        <Link to = "/donate">
                            <Navbuttons>Donate!</Navbuttons>
                        </Link>
                    </div>
                    <div className = "flex flex-row">
                        <Link to = "/about">
                            <Navlinks>About</Navlinks>
                        </Link>
                        <Link to = "/blogs">
                            <Navlinks>Blogs</Navlinks>
                        </Link>
                        <Link to = "/programmes">
                            <Navlinks>Programmes</Navlinks>
                        </Link>
                        <Link to = "/join-us">
                            <Navlinks>Join us</Navlinks>
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default Navbar