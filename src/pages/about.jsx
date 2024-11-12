import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
import { Profile, Profileholder } from "../components/profile"
 
const About = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header image="images/headers/ASF07949.jpg" color="gold"/>
                <Section color="white">
                    <h3>Who we are</h3>
                    <hr className="bg-deepblue"/>
                    <p>The Children's International Learning Centre was established on October 24, 1970, as a volunteer project of the Hamilton-Wentworth United Nations Association. We are a not-for-profit charitable organization supported by volunteers, memberships, donations, grants and admissions.</p>
                    <br/>
                    <h3>Land Acknowledgement</h3>
                    <hr className="bg-deepblue"/>
                    <p>The City of Hamilton and the Children's International Learning Centre are situated on the traditional territory of the Erie, Neutral, Huron-Wendat, Haudenosaunee, and Mississauga Nations. This land is covered by the Dish with One Spoon Wampum Belt, which was an agreement between the Haudenosaunee and the Anishinaabek  to share and care for the resources around the Great Lakes. We further acknowledge that this land is covered by the Between the Lakes Purchase, 1792, between the Crown and  the Mississaugas of the Credit First Nation.</p>
                    <br/>
                    <p>This land acknowledgement marks an important step in the process of Truth and Reconciliation, honouring the land and becoming better informed neighbours and partners.</p>
                    <br/>
                    <Card color="cilcpurple">
                        <h3 className="text-white">Vision</h3>
                        <hr className="bg-white"/>
                        <p className="text-white">A world of care and respect for all people and our environment.</p>
                        <br/>
                        <h3 className="text-white">Mission</h3>
                        <hr className="bg-white"/>
                        <p className="text-white">Promote respect for diversity and awareness of our world community through guided discovery and interactive artistic programmes.</p>
                    </Card>
                    <br/>
                    <h1 className="font-bold">Our History</h1>
                    <br/>
                    <h3>Celebrating 50+ years!</h3>
                    <hr className="bg-deepblue"/>
                    <p>The CILC was established in Hamilton, on October 24, 1970, to help celebrate the 25th anniversary of the United Nations. The CILC, housed in a single room and requiring untold volunteer hours to set up temporary displays in schools and libraries, dreamed of acquiring artifacts from every continent.</p>
                    <br/>
                    <h3>Class visits</h3>
                    <hr className="bg-deepblue"/>
                    <p>In January 1972, the CILC received the official approval of the Director of Education for Hamilton Public Schools for classes to visit. For many years, school classes and community groups visited the CILC in a permanent space at the MacNab St. YWCA. By 1990, the Children's International Learning Centre, had grown to be a free-standing not-for-profit organization with its own Board of Directors and was working from its own suite at 100 James St. S., using artifacts from over 92 countries, to produce interactive educational programming for all ages.</p>
                    <br/>
                    <h3>Highlights</h3>
                    <hr className="bg-deepblue"/>
                    <ul className="list-outside">
                        <li><b>2023</b> - commenced planning of future travelling and virtual programmes</li>
                        <li><b>2022</b> - piloted “Festivals of Light” travelling programme</li>
                        <li><b>2020</b> - celebrated 50th anniversary of the organization with a virtual golden anniversary celebration</li>
                        <li><b>2001-2020</b> - Operated at 189 King William St, Hamilton</li>
                        <li><b>2019</b> - received Platinum Level for Best Learning Centre from the Hamilton Spectator Readers' Choice Awards</li>
                        <li><b>2018</b> - received Bronze level of Achievement, CHCH Business Excellence Award within the Charitable/Non-Profit sub Category</li>
                        <li><b>2017</b> - created a vision statement and updated the mission statement</li>
                        <li><b>2017</b> - current logo was created</li>
                        <li><b>2016</b> - received Governance Excellence Award from Capacity Canada and Cowan Foundation</li>
                        <li><b>2013</b> - winner of Outstanding Community based Organization by the Hamilton Wentworth Occasional Teachers</li>
                        <li><b>2008</b> - received Award of Excellence in Financial Reporting Transparency from Chartered Accountants of Ontario, PricewaterhouseCoopers and Queen's School of Business</li>
                        <li><b>1988</b> - honoured as one of fifty organizations across Ontario to have the distinction of being a patron organization of the Lieutenant Governor of Ontario (LGO)</li>
                        <li><b>1988</b> - incorporated as The Children's International Learning Centre (Hamilton) and granted a charity registration number</li>
                        <li><b>1972</b> - official approval from the Director of the Hamilton Board of education for classes to visit the CILC located in the YWCA</li>
                        <li><b>1970</b> - established in 1970 to celebrate the 25th anniversary of the United Nations</li>
                    </ul>
                    <br/>
                    <h3>Viceregal patronage</h3>
                    <hr className="bg-deepblue"/>
                    <p>The Lieutenant Governor plays a key role in supporting outstanding contributions to civil society. To this end, the Lieutenant Governor from time to time grants viceregal patronage to organizations and initiatives, lending them vital support and recognition.</p>
                    <br/>
                    <p>The late Honourable Lincoln Alexander, PC, CC, OOnt, CD, QC, was the first LGO to bestow the honour to the CILC and subsequent LGO's have continued to honour this tradition.</p>
                    <br/>
                    <p>The Honourable Elizabeth Dowdeswell, OC, OOnt, Lieutenant Governor of Ontario is the most recent LGO to grant the CILC viceregal patronage.</p>
                </Section>
                <Section color="cilcgrey">
                    <h1 className="font-bold">Our team</h1>
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
 
export default About;