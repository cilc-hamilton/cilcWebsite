import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
import { Link } from "react-router-dom";
 
const Donate = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header desc="Help us out on our journey!" image="/images/IMG_3209.jpg"/>
                <Section color="white">
                    <Card color="cilcpurple">
                        <h1 className="font-bold text-white">Make a donation!</h1>
                        <hr className="bg-white"/>
                        <p className="text-white">Are you passionate about promoting respect for diversity and awareness of our global community to youth audiences? The CILC relies on generous financial contributions from generous donors to carry out its mission in the greater Hamilton area.</p>
                        <br/>
                        <p className="text-white">If you want to make a difference, consider making a donation below.</p>
                        <br/>
                        <div className="flex flex-row">
                            <Link target="_blank" to="https://www.canadahelps.org/en/dn/35893?v2=true">
                                <button className="bg-gold hover:brightness-110 mr-4">Donate through CanadaHelps</button>
                            </Link>
                            <Link target="_blank" to="https://www.paypal.com/ca/fundraiser/charity/3423778">
                                <button className="bg-gold hover:brightness-110 mr-4">Donate through PayPal</button>
                            </Link>
                        </div>
                    </Card>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Donate;