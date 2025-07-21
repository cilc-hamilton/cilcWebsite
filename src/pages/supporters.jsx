import Section from "../components/section";
import Card from "../components/card";
import { HeaderlessPage } from "../components/page";
import Sponsor from "../components/sponsor";
 
const Support = () => {
    return (
        <>
            <HeaderlessPage>
                <Section color="white">
                    <Card color="gold">
                        <h3 className="font-bold">The CILC would like to thank the following partners and sponsors for their generous support:</h3>
                        <hr className="bg-deepblue"/>
                        <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                            <Sponsor org="Government of Canada" image="/images/sponsors/canada.png"></Sponsor>
                            <Sponsor org="CMIM" image="/images/sponsors/cmim.png"></Sponsor>
                            <Sponsor org="City of Hamilton" image="/images/sponsors/hamilton.png"></Sponsor>
                            <Sponsor org="Hamilton Community Foundation" image="/images/sponsors/hcf.png"></Sponsor>
                            <Sponsor org="Hamilton Youth Steel Orchestra" image="/images/sponsors/hyso.png"></Sponsor>
                            <Sponsor org="Patrick J McNally Foundation"></Sponsor>
                            <Sponsor org="The Guenther Foundation"></Sponsor>
                        </div>
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
            </HeaderlessPage>
        </>
    );
};
 
export default Support;