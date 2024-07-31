import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
import { Link } from "react-router-dom";
 
const Joinus = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header desc="Join our phenomenal team and give back to your community" image="/images/IMG_3209.jpg"/>
                <Section color="white">
                    <Card color="gold">
                        <h1 className="font-bold">We Need You!</h1>
                        <hr className="bg-deepblue"/>
                        <p>Are you passionate about promoting respect for diversity and awareness of our global community to youth audiences? The CILC relies on generous volunteer contributions from individuals like you to carry out its mission in the greater Hamilton area.</p>
                        <br/>
                        <p>Read on to find out how you can make a difference!</p>
                    </Card>
                </Section>
                <Section color="cilcgrey">
                    <h3 className="font-bold">Volunteer</h3>
                    <hr className="bg-deepblue"/>
                    <p>We rely on the generous support of volunteers who have given their gift of time. If you would like to contribute your time and energy,  and/or are looking for opportunities to develop and enhance your skill set, then volunteering with the CILC is the perfect opportunity for you.</p>
                    <br/>
                    <Link to="/join-us/volunteer">
                        <button className="bg-cilcpurple text-white hover:brightness-125">Learn More</button>
                    </Link>
                </Section>
                <Section color="cilcdarkblue">
                    <h3 className="font-bold text-white">Become a member!</h3>
                    <hr className="bg-white"/>
                    <p className="text-white">Want to support us while receiving exclusive perks on top of your tax receipt? Consider purchasing a membership for yourself or someone else. You'll gain acces to many cool benefits, including a quarterly newsletter and special access to CILC events.</p>
                    <br/>
                    <Link to="/join-us/become-a-member">
                        <button className="bg-cilcgreen text-black hover:brightness-110">Learn More</button>
                    </Link>
                </Section>
                <Section color="white">
                    <h3 className="font-bold">Thanks to our generous supporters</h3>
                    <hr className="bg-deepblue"/>
                    <p>Huge thanks to our amazing supporters! Learn more about them below.</p>
                    <br/>
                    <Link to="/join-us/supporters">
                        <button className="bg-gold hover:brightness-110">Our Patrons</button>
                    </Link>
                    <br/>
                    <p>Want to become a supporter yourself? Consider <Link className="underline" to="/donate">donating</Link>, <Link className="underline" to="/join-us/become-a-member">purchasing a membership</Link>, <Link className="underline" to="/join-us/volunteer">volunteering</Link>, or <Link className="underline" to="/contact">reach out to us with an inquiry</Link>.</p>
                </Section>
                <Section color="cilcgrey">
                    <h3 className="font-bold">Make a donation</h3>
                    <hr className="bg-deepblue"/>
                    <p>As a non-profit organization (Registered Charity Number # 13042 1456 RR0001), the CILC relies on support from generous donors to make our operations possible. Consider contributing to our mission by making a donation to the CILC. We'll provide you a tax receipt for any donation over $10.00.</p>
                    <br/>
                    <div className="flex flex-row">
                        <Link target="_blank" to="https://www.canadahelps.org/en/dn/35893?v2=true">
                            <button className="bg-cilcblue hover:brightness-110 mr-4">Donate through CanadaHelps</button>
                        </Link>
                        <Link target="_blank" to="https://www.paypal.com/ca/fundraiser/charity/3423778">
                            <button className="bg-cilcblue hover:brightness-110 mr-4">Donate through PayPal</button>
                        </Link>
                        <Link to="/donate">
                            <button className="bg-cilcblue hover:brightness-110">Learn More</button>
                        </Link>
                    </div>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Joinus;