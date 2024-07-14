import React from "react";
import { Navlinks} from "./navcomponents"
import { Outlet, Link } from "react-router-dom";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

function Mobilenav() {
    return (
        <>
            <div className = "flex flex-row bg-white w-screen px-5 fixed bottom-0 left-0 box-border justify-center items-stretch shadow-[0_-10px_10px_0_rgba(0,0,0,0.2)] min-[900px]:hidden">
                <div className = "flex grow shrink basis-0 items-end">
                    <Link to = "/about" className = "w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks pos = "mobile">
                            <FaHandsHoldingChild/>
                            About
                        </Navlinks>
                    </Link>
                    <Link to = "/contact" className = "w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks pos = "mobile">
                            <GrContact/>
                            Contact
                        </Navlinks>
                    </Link>
                </div>
                <Link to = "/">
                    <img className = "h-14 px-5 py-2 box-content hover:brightness-110" src = "src/images/logo.png"></img>
                </Link>
                <div className = "flex grow shrink basis-0 items-end">
                    <Link to = "/donate" className = "w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks pos = "mobile">
                            <BiSolidDonateHeart/>
                            Donate
                        </Navlinks>
                    </Link>
                    <Link to = "/more" className = "w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks pos = "mobile">
                            <FaBars/>
                            More
                        </Navlinks>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default Mobilenav