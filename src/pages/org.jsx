import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";

const Org = () => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header desc="Who we are and what we do" image="/images/IMG_7311.jpg"/>
                <Section color="white">
                    <h3>Who we are</h3>
                    <hr className="bg-deepblue"/>
                    <p>The Children's International Learning Centre was established on October 24, 1970, as a volunteer project of the Hamilton-Wentworth United Nations Association. We are a not-for-profit charitable organization supported by volunteers, memberships, donations, grants and admissions.</p>
                    <br/>
                    <h3>Land Acknowledgement</h3>
                    <hr className="bg-deepblue"/>
                    <p>The City of Hamilton and the Children’s International Learning Centre are situated on the traditional territory of the Erie, Neutral, Huron-Wendat, Haudenosaunee, and Mississauga Nations. This land is covered by the Dish with One Spoon Wampum Belt, which was an agreement between the Haudenosaunee and the Anishinaabek  to share and care for the resources around the Great Lakes. We further acknowledge that this land is covered by the Between the Lakes Purchase, 1792, between the Crown and  the Mississaugas of the Credit First Nation.</p>
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
                <Footer/>
            </div>
        </>
    );
};
 
export default Org;