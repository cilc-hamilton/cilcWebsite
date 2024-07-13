import React from "react";
import { Navlinks} from "./navcomponents"
import { Outlet, Link } from "react-router-dom";

function Mobilenav() {
    return (
        <>
            <div className = "flex flex-row bg-white w-screen px-12 fixed bottom-0 left-0 box-border justify-center items-stretch shadow-[0_-10px_10px_0_rgba(0,0,0,0.2)] min-[900px]:hidden">
                <div className = "flex grow shrink basis-0 items-end">
                    <Link to = "/about" className = "w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks pos = "mobile">About</Navlinks>
                    </Link>
                    <Link to = "/contact" className = "w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks pos = "mobile">Contact</Navlinks>
                    </Link>
                </div>
                <Link to = "/">
                    <img className = "h-16 px-8 py-2 box-content" src = "src/assets/logo.png"></img>
                </Link>
                <div className = "flex grow shrink basis-0 items-end">
                    <Link to = "/donate" className = "w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks pos = "mobile">Donate</Navlinks>
                    </Link>
                    <Link to = "/more" className = "w-full flex grow shrink basis-0 h-full items-center justify-center">
                        <Navlinks pos = "mobile">More</Navlinks>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default Mobilenav