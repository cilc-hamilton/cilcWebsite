import React from "react";
import Header from "./header"
import Navbar from "../navbar/navbar.jsx"
import Mobilenav from "../navbar/mobile.jsx";
 
const More = () => {
    return (
        <>
            <Navbar/>
            <Mobilenav/>
            <div className = "hidden min-[900px]:flex justify-start items-center bg-white min-h-screen w-screen box-border p-8">
                
            </div>
        </>
    );
};
 
export default More;