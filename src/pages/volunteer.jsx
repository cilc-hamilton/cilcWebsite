import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
 
const Volunteer = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header image="a" color="cilcblue"/>
                <Section color="white">
                    <p className="mb-8">We are a not-for-profit, volunteer driven organization.  Since 1970, we have been grateful for the generous support of volunteers who have given their gift of time. If you would like to contribute your time and energy,  and/or are looking for opportunities to develop and enhance your skill set, we look forward to hearing from you.  Kindly note that we require our volunteers to submit a Vulnerable Sector Criminal Reference Check for some positions.</p>
                    <Card color="cilcgreen">
                        <h3>As a CILC volunteer, you will have a phenomenal opportunity to:</h3>
                        <hr className="bg-deepblue"/>
                        <ul className="list-inside w-full">
                            <li>Enhance your skill set</li>
                            <li>Gain volunteer hours</li>
                            <li>Receive a reference letter (on completing 50 hours of volunteer time)</li>
                            <li>Add meaningful experience to your resume</li>
                            <li>Give back to your community</li>
                        </ul>
                    </Card>
                </Section>
                <Section color="cilcgrey">
                    <h3>Committee Volunteer Roles</h3>
                    <hr className="bg-deepblue"/>
                    <ul className="list-outside w-full">
                        <li><b>Bylaws & Policy</b>: Creates and maintains the bylaws and policies to ensure that the rules that govern the CILC are accurate and relevant.<br/><i>Responsibilities include</i>: keeping bylaws and policies up-to-date.</li>
                        <li><b>Communications</b>: Handles and sustains the internal and external communications of the CILC in order to deliver information and drive engagement within our audience and the larger community.<br/><i>Responsibilities include</i>: seasonal newsletter creation, social media planning and designing of promotional material.</li>
                        <li><b>Fundraising</b>: Plans and coordinates revenue-generating strategies to support the work of the CILC.<br/><i>Responsibilities include</i>: grant/letter writing and planning/executing fundraising initiatives.</li>
                        <li><b>Programme</b>: Develops programmes and activities to advance the goal of the CILC in celebrating diversity and fostering inclusivity.<br/><i>Responsibilities include</i>: planning and researching topics relevant to programme themes as well as creating hands-on activities.</li>
                        <li><b>Volunteer</b>: Recruits/onboards, retains, and appreciates the CILC volunteers.<br/><i>Responsibilities include</i>: planning volunteer recruitment events and socials for the CILC members and volunteers.</li>
                    </ul>
                </Section>
                <Section color="white">
                <h3>Committee Volunteer Roles</h3>
                    <hr className="bg-deepblue"/>
                    <ul className="list-outside w-full">
                        <li>Grant Writer</li>
                        <li>Graphic Designer</li>
                        <li>Programme Facilitator</li>
                        <li>Researcher</li>
                        <li>Clerical Assistance</li>
                    </ul>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Volunteer;