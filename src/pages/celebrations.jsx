import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
 
const Celebrations=() => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header desc="Recognizing cultural diversity in our community" image="/images/Bengali-Indian Dance.jpg"/>
                <Footer/>
            </div>
        </>
    );
};
 
export default Celebrations;