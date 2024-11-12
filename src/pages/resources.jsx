import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
import { Link } from "react-router-dom";
 
const Resources = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header image="" color="cilcpurple"/>
                <Section color="white">
                    <h3>Explore our phenomenal catalogue of resources</h3>
                    <hr className="bg-deepblue"/>
                    <div className="flex flex-row flex-wrap w-full items-stretch">
                        <Link className="w-1/3" to="/resources/book-nook">
                            <div className="h-full bg-cilcgreen p-4 w-full text-center flex items-center hover:brightness-110">
                                <p className="text-[1em]">Check out some book recs for students, organized by age</p>
                            </div>
                        </Link>
                        <Link className="w-1/3" to="/resources/past-newsletters">
                            <div className="h-full bg-cilcblue p-4 w-full text-center text-white flex items-center hover:brightness-110">
                                <p className="text-[1em]">A sneak peak at previous newsletters</p>
                            </div>
                        </Link>
                        <Link className="w-1/3" to="/resources/videos">
                            <div className="h-full bg-gold p-4 w-full text-center flex items-center hover:brightness-110">
                                <p className="text-[1em]">Learn more about the CILC with some cool videos</p>
                            </div>
                        </Link>
                    </div>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Resources;