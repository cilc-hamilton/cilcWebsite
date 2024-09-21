import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
 
const Support = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header image="a" color="cilcblue"/>
                <Section color="white">
                    <Card color="gold">
                        <h3 className="font-bold">The CILC would like to thank the following for their generous support:</h3>
                        <hr className="bg-deepblue"/>
                        <ul className="list-inside w-full">
                            <li>City of Hamilton</li>
                            <li>Ministry of Citizenship and Immigration</li>
                            <li>Hamilton Community Foundation</li>
                            <li>Patrick J McNally Charitable Foundation</li>
                        </ul>
                    </Card>
                    <br/>
                    <Card color="cilcpurple">
                        <h3 className="font-bold text-white">Honorary Patron</h3>
                        <hr className="bg-white"/>
                        <p className="text-white">Her Honour the Honourable Elizabeth Dowdeswell, OC OOnt, Former Lieutenant Governor of Ontario.</p>
                    </Card>
                    <br/>
                    <Card color="cilcgreen">
                        <h3 className="font-bold">Partners</h3>
                        <hr className="bg-deepblue"/>
                        <p>The CILC is proud to partner with the Hamilton Youth Steel Orchestra (HYSO)</p>
                    </Card>
                </Section>
                <Section color="cilcgrey">
                    <h3 className="font-bold">Past Participants</h3>
                    <hr className="bg-deepblue"/>
                    <p>The CILC would also like to thank visitors from:</p>
                    <br/>
                    <p className="font-bold">Hamilton-Wentworth and Hamilton-Wentworth Catholic DSB:</p>
                    <ul className="list-inside w-full">
                        <li>A.M. Cunningham Elementary School</li>
                        <li>Beverly Central Elementary School</li>
                        <li>Collegiate Avenue Elementary School</li>
                        <li>Cootes Paradise Elementary School</li>
                        <li>Dr. Edgar Davey Elementary School</li>
                        <li>Dundana Elementary School</li>
                        <li>Earl Kitchener Elementary School</li>
                        <li>École élémentaire Michaëlle Jean Elementary School</li>
                        <li>Gatestone Elementary School</li>
                        <li>Guy B. Brown Elementary School</li>
                        <li>Highview Elementary School</li>
                        <li>Hillcrest Elementary School</li>
                        <li>Holy Name of Jesus Catholic Elementary School</li>
                        <li>Huntington Park Elementary School</li>
                        <li>Janet Lee Elementary School</li>
                        <li>Lake Avenue Elementary School</li>
                        <li>Mary Hopkins Elementary School</li>
                        <li>Millgrove Elementary School</li>
                        <li>Norwood Park Elementary School</li>
                        <li>Queen Mary Elementary School</li>
                        <li>Queen Victoria Elementary School</li>
                        <li>Richard Beasley Elementary School</li>
                        <li>Spencer Valley Elementary School</li>
                        <li>St. Joachim Catholic Elementary School</li>
                        <li>St. Patrick Catholic Elementary School</li>
                        <li>Tapleytown Elementary School</li>
                        <li>Tiffany Hill Elementary School</li>
                        <li>Viscount Montgomery Elementary School</li>
                        <li>Westwood Elementary School</li>
                        <li>Yorkview Elementary School</li>
                    </ul>
                    <br/>
                    <p className="font-bold">Halton and Halton Catholic DSB:</p>
                    <ul className="list-inside w-full">
                        <li>Anne J. MacArthur Public School</li>
                        <li>Boyne Public School</li>
                        <li>Brookdale Public School</li>
                        <li>Bruce T. Lindley Public School</li>
                        <li>Charles R Beaudoin Public School</li>
                        <li>Glenview Public School</li>
                        <li>Kings Road Public School</li>
                        <li>P.L. Robertson Public School</li>
                        <li>Pine Grove Public School</li>
                        <li>St. Elizabeth Seton Catholic Elementary School</li>
                        <li>St. Peter Catholic Elementary School</li>
                    </ul>
                    <br/>
                    <p className="font-bold">Other Visitors:</p>
                    <ul className="list-inside w-full">
                        <li>2nd Mount Albion Sparks Group - Girl Guides of Canada</li>
                        <li>2nd Mount Hope Brownies Unit - Girl Guides of Canada</li>
                        <li>65th Sparks, Brownies and Guides - Girl Guides of Canada</li>
                        <li>66th Hamilton Brownies - Girl Guides of Canada</li>
                        <li>6th Dundas Cubs Group - Scouts Canada</li>
                        <li>Beasley Community Centre (Wesley Urban Ministries)</li>
                        <li>Child Ventures Early Learning Academy</li>
                        <li>Clark Boulevard Public School (Peel DSB)</li>
                        <li>Colin MacDonald Community School</li>
                        <li>Dr. Edgar Davey After School Program (YMCA)</li>
                        <li>Immigrant Working Centre</li>
                        <li>amesville Children's Centre (Day Care)</li>
                        <li>Little Peoples Day Care</li>
                        <li>Lynwood-Charlton Centre</li>
                        <li>Paramount Family Centre (Day Care)</li>
                        <li>Queen Victoria Child Care (YMCA)</li>
                        <li>St. Peter's Day Care</li>
                        <li>Strathcona SAGE Program</li>
                        <li>Tapawingo Daycare</li>
                    </ul>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Support;