import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
 
const Book=() => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header desc="The best reads for students of all ages" image="/images/Bengali-Indian Dance.jpg"/>
                <Footer/>
            </div>
        </>
    );
};
 
export default Book;