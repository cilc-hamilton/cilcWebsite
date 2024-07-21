import React from "react";
import Header from "./header"
 
const Blogs = () => {
    return (
        <>
            <div className = "flex w-screen absolute top-0 min-[900px]:top-36">
                <Header desc = "Local and global happenings from the CILC's perspective" image = "/images/Hanukkiah.jpg"/>
            </div>
        </>
    );
};
 
export default Blogs;