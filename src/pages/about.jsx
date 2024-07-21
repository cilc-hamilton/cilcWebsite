import React from "react";
import Header from "./header"
 
const About = () => {
    return (
        <>
            <div className = "flex w-screen absolute top-0 min-[900px]:top-36">
                <Header desc = "Who we are and what we do" image = "/images/IMG_7311.jpg"/>
            </div>
        </>
    );
};
 
export default About;