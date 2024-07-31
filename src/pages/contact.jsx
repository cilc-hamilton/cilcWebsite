import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
import Contactform from "../components/contactform";
import { Link } from "react-router-dom";
 
const Contact = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header desc="Get in touch with us" image="" component="Contactform" formHeight="full"/>
                <Section color="white">
                    <Card>
                        <h3>Get in touch and we'll get back to you as soon as we can.  We look forward to hearing from you!</h3>
                        <hr className="bg-deepblue"/>
                        <ul className="list-inside w-full">
                            <li>Email us with the form above, or at <Link target="_blank" to="mailto:cilc1970@gmail.com">cilc1970@gmail.com</Link>.</li>
                            <li>Call us at (905)-981-8813.</li>
                            <li>Our address is PO Box 57128 RPO, Jackson Square, Hamilton, Ontario L8P 4W9.</li>
                        </ul>
                    </Card>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Contact;