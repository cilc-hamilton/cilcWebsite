import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
 
const Programmes = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header desc="What we offer" image="/images/Bengali-Indian Dance.jpg"/>
                <Section color="white">
                    
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Programmes;