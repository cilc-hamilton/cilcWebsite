import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
import { Profile, Profileholder } from "../components/profile"
 
const Team = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header desc="The people behind the CILC" image="/images/IMG_7311.jpg"/>
                <Section color="white">
                    <h3>Our team</h3>
                    <hr className="bg-deepblue"/>
                    <Profileholder>
                        <Profile image="/images/blankProfile.jpg" name="The late Sheila Davies" desc="Founder"/>
                        <Profile image="/images/blankProfile.jpg" name="Lana Lowe" desc="Executive Director"/>
                        <Profile image="/images/blankProfile.jpg" name="Eleanor Chithalen" desc="Consultant"/>
                    </Profileholder>
                    <br/>
                    <Card color="cilcgreen">
                        <h3>Board of Directors</h3>
                        <hr className="bg-deepblue"/>
                        <p>The CILC has a Board of Directors, with a maximum of 15 members, who meet once a month.</p>
                        <br/>
                        <p><b>Governance style</b>: In 2021 the Board of Directors transitioned from a hierarchical board structure to that of a rotating chair model. The rotating chair allows all members of the board to be on an equitable level. Each board member has the opportunity to chair board meetings for up to three months and hold the position formerly held by the president. If there are disagreements on a motion, the board uses a consensus scale to vote on matters and move forward. This model has allowed for greater board member engagement and responsibility through their respective terms. The rotating chair model of governance was officially passed at the 2022 CILC Annual General Meeting.</p>
                        <br/>
                        <div>
                            <img className="h-96" src="/images/cilcAward.jpg"></img>
                            <p className="text-center w-0 min-w-full">The CILC receiving a Governance Hall of Fame award from Capacity Canada and the Cowan Foundation.</p>
                        </div>
                    </Card>
                    <br/>
                    <h3>Current board members</h3>
                    <hr className="bg-deepblue"/>
                    <Profileholder>
                        <Profile image="/images/blankProfile.jpg" name="Cynthia Holder" desc="Client Relationship Executive who works for Manulife Financial, a leading international financial services group. Cynthia was drawn to the CILC because its programs promote diversity and highlight the similarities in our human experiences. As Maya Angelou said, 'We are more alike, my friends, than we are unalike'."/>
                        <Profile image="/images/sanjumHunjan.jpg" name="Sanjum Hunjan" desc="First-year medical student at McMaster University and recent graduate of the Biomedical Discovery & Commercialization undergraduate programme. Has been involved with the CILC since 2019. A passionate and engaged member of the community who actively contributes to promoting diversity and equity within all domains of Hamilton and area. Portrait of Janet Liu."/>
                        <Profile image="/images/blankProfile.jpg" name="Janet Liu" desc="Current CILC Treasurer, associate at TD Securities, and an MBA graduate from DeGroote School of Business, McMaster University. Janet has been volunteering with the CILC since 2017."/>
                        <Profile image="/images/isabellaMarchese.jpg" name="Isabella Marchese" desc="Chair of the By-Laws and Policies committee, Isabella has been a member of the CILC since 1994 because she firmly embraces the mission and vision of the CILC. Before becoming a board member, she frequently visited the CILC with her elementary and Immigrants Working Centre classes. She has served on the board as Vice President, President and on various committees during the 1990s-2010."/>
                        <Profile image="/images/blankProfile.jpg" name="Eric Noue" desc="Procurement Executive who works for Manulife, a financial services firm with headquarters in Toronto. The mission statement and goals of the CILC are very much in line with Eric's values around diversity and inclusion. Eric is Chair of the CILC Strategy & Visioning Committee. Eric also volunteers his time coaching and mentoring boys basketball programs."/>
                        <Profile image="/images/mikePaquet.png" name="Mike Paquet" desc="During his 27-year career in fund development, Mike Paquet has helped several community-based and grassroots non-profit groups throughout Southern Ontario to implement long-term sustainable fundraising and resource development programs. Mike has enabled several organizations to discover the enormous potential of major gift fundraising. Currently, Mike is the Chief Fundraising Strategist of People First Fundraising Solutions in Hamilton."/>
                        <Profile image="/images/sahanahThirukumar.jpg" name="Sahanah Thirukumar" desc="Honours Life Sciences (BSc) graduate from McMaster University. She has been a CILC volunteer since the fall of 2018. Sahanah aims to truly dedicate her skills and efforts to CILC's benevolent objectives and commit to promoting diversity, equity and inclusivity in our communities. Sahanah chairs the Communications Committee."/>
                        <Profile image="/images/jasonTownsend.jpg" name="Jason Townsend" desc="Honours Bachelor of Commerce (BCom) candidate at the DeGroote School of Business at McMaster University in Hamilton. Jason previously volunteered in the organization's finance team since 2019."/>
                    </Profileholder>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Team;