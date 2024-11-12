import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
import Faq from "../components/faq";
 
const Home = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header image="" color="white"/>
                <Section color="white">
                    <Card color = "cilcgreen">
                        <h3>Land Acknowledgement</h3>
                        <hr className="bg-deepblue"/>
                        <p className="w-full">Hamilton is located on the traditional territories of Indigenous peoples dating back thousands of years. We recognize and respect their contributions and the treaties between the Huron-Wendat, Mississauga, Anishinaabe, Haudenosaunee, Erie, Neutral nations and the Crown. Today, this meeting place is still home to many Indigenous people and we are grateful to have the opportunity to live and work here.</p>
                        <br/>
                        <p className="w-full">For more information and resources, please visit the <a className="underline" href="https://nctr.ca/" target="_blank">National Centre for Truth and Reconciliation</a>.</p>
                    </Card>
                </Section>
                <Section color="cilcgrey">
                    <h1 className="font-bold">Welcome to the Childen's International Learning Centre</h1>
                    <hr className="bg-deepblue"/>
                    <p>The Children's International Learning Centre (CILC) was established with the vision of contributing to a world of care and respect for all people and our environment.  We endeavour to do this by promoting respect for diversity and awareness of our world community through guided discovery and interactive artistic travelling programmes. Our website is always open with activities and resources.</p>
                </Section>
                <Section color="white">
                    <Faq/>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Home;