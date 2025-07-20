import Section from "../components/section";
import Card from "../components/card";
import { Profile, Profileholder } from "../components/profile"
import { HeaderedPage } from "../components/page";
 
const Team = () => {
    return (
        <>
            <HeaderedPage image="/images/headers/team.jpg" color="gold">
                <Section color="white">
                    <h3>Our team</h3>
                    <hr className="bg-deepblue"/>
                    <Card color="cilcgold">
                        <img className="h-96" src="/images/headshots/sheila_davies.jpg"></img>
                        <br/>
                        <h3>Our Founder: The late Sheila Davies</h3>
                        <hr className="bg-deepblue"/>
                        <p>
                            Sheila Davies’s dream was that a new Hamilton organization - that later became the Children’s International Learning Centre - would emphasize the connections and similarities among cultures while celebrating the exciting differences. So Sheila, along with enthusiastic support from her husband Dr. Doug Davies, established the CILC in October 1970 to help celebrate the 25th anniversary of the United Nations.  Sheila saw a need and felt that there was a lack of education in schools that connected children with people and their activities in the rest of the world. There was the feeling that the more children know about others from different parts of the globe, the more they can understand and empathize with the many ways that humans interact with the world.  Sheila wanted the CILC to have interactive programs, not just static displays.  Sheila was able to amass a collection of various items from over 100 countries.  The artefacts include: dolls, clothes, artwork, batiks, shoes and household objects. 
                            <br />
                            <br />
                            Sheila & Doug Davies’ lifelong commitment was to better the lives of others through tireless volunteer work, philanthropy and support of humanitarian causes, children's education, and wildlife conservation. Every day of Sheila’s life was dedicated to finding ways to help the less fortunate, sharing, being generous and philanthropic, and  inspiring others to do the same.  Sheila passed away in 2017 and her husband Doug in 2008. They would be so pleased that the CILC continues to inspire children and adults alike to celebrate our differences and learn to work together for a better future.
                        </p>
                    </Card>
                    <br />
                    <Profileholder>
                        <Profile image="/images/headshots/blankProfile.jpg" name="Lana Lowe" desc="Executive Director"/>
                        <Profile image="/images/headshots/blankProfile.jpg" name="Eleanor Chithalen" desc={
                            <>
                                Consultant
                                <br />
                                <br />
                                Eleanor Chithalen has been involved with the Children’s International Learning Centre since its inception in 1970.   Eleanor began work as a teaching volunteer at the CILC, in the basement of the YWCA in downtown Hamilton, in 1980. In 1988, when The Children’s International Learning Centre was incorporated, Eleanor became the first president of its Board of Directors, a post she held until Sheila’s retirement in 1994. Eleanor became the “Director of Programmes” (Sheila’s chosen title) and in 1997 was able to hire the faithful and indefatigable Lana Lowe as our Executive Director. Eleanor oversaw the purchase and renovation of the building at 189 King William Street (CILC location from 2001-2020). She has served in many capacities in the organisation and is still active on the Programme Committee and is a programme facilitator. 
                            </>
                        }/>
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
                        <Profile image="/images/headshots/gracia_abboud.jpg" name="Gracia Abboud" desc={
                            <>
                                Gracia has been an active member of the CILC since October of 2018 when she first moved to Hamilton. At the CILC, Gracia has engaged within various roles from display designer, to programme facilitator, to currently co-chair of the Volunteer Committee.
                                <br />
                                <br />
                                Besides her role at the CILC, Gracia is a recent graduate from the Masters of Global Health at McMaster University.
                            </>
                        }/>
                        <Profile image="/images/headshots/blankProfile.jpg" name="Mellissa Adoma" desc={
                            <>
                                Mellissa is a child and youth worker and a student at Sheridan College, pursuing a degree in social and  community development . She is passionate about working with children and aspires to be a teacher, guidance counsellor and youth mentor. She hopes to impact the younger generation both academically and socially. 
                                <br />
                                <br />
                                Mellissa joined CILC in 2024 when she did her internship with the organization. She assisted in creating the Water is Life traveling programme, member of the programme committee and hopes to be more active in educating young people about the importance of diversity. 
                            </>
                        }/>
                        <Profile image="/images/headshots/simran_chugh.jpg" name="Simran Chugh" desc={
                            <>
                                Simran is  passionate about her involvement with the CILC because of the highlight on diversity and the focus on molding young minds to understand how we are all similar in more ways than we are different. She hopes to have an impact on the community through her time and work with the CILC. 
                                <br />
                                <br />
                                In her free time, Simran is an avid reader, passionate about baking, and loves catching up with friends over coffee or dinner! Professionally, she works with P&G in sales.
                            </>
                        }/>
                        <Profile image="/images/headshots/sanjum_hunjan.jpg" name="Sanjum Hunjam" desc={
                            <>
                                Final-year medical student at McMaster University and graduate of the Biomedical Discovery & Commercialization undergraduate programme.
                                <br />
                                <br />
                                Has been involved with the CILC since 2019. A passionate and engaged member of the community who actively contributes to promoting diversity and equity within all domains of Hamilton and area.
                            </>
                        }/>
                        <Profile image="/images/headshots/gemma_patey.jpg" name="Gemma Patey" desc={
                            <>
                                Gemma is a MSc candidate in International Development and Humanitarian Emergencies at the London School of Economics. She has spent time working in politics and organizing, with the belief that curiosity and empathy are the skills most needed in our communities for people of all ages. 
                                <br />
                                <br />
                                Gemma is invested in building a more equitable, community-focused future for youth and young people, which aligns perfectly with the mission of the CILC.
                            </>
                        }/>
                        <Profile image="/images/headshots/andre_preclaro.jpg" name="Andre Preclaro" desc={
                            <>
                                Andre has lived in four different countries across three continents, and is now currently pursuing  a master’s degree in Public Administration at Dalhousie University. From that point, Andre hopes to work in government or at an NGO where he can bring intersectional, inclusive perspectives when workshopping policies. 
                                <br />
                                <br />
                                Andre has been at the CILC since 2023 and is honoured to volunteer with such compassionate, motivated, hard-working people and to learn about their perspectives. 
                                <br />
                                <br />
                                “Not everything that is faced can be changed, but nothing can be changed until it is faced.”
                                <br />
                                ― James Baldwin
                            </>
                        }/>
                        <Profile image="/images/headshots/sahanah_thirukumar.jpg" name="Sahanah Thirukumar" desc={
                            <>Sahanah has been a CILC volunteer since the fall of 2018, became a member of the Board of Directors in 2020 and currently co-chairs the Communications Action Team. She aims to truly dedicate her skills and efforts to the CILC's benevolent objectives and commit to promoting diversity, equity and inclusivity in our communities.  Sahanah is pursuing her MSc in Pathology and Laboratory Medicine at Western University and spends her free time baking, writing and practicing Bharathanatyam.</>
                        }/>
                        <Profile image="/images/headshots/jason_townsend.jpg" name="Jason Townsend" desc={
                            <>Jason first volunteered with the CILC in 2019, and was elected to the organization’s Board of Directors in 2023. He currently serves as Treasurer and is a member of the Finance Committee and Fundraising Committee. He previously served on the Strategy & Visioning Committee in 2020. Jason works in investment banking at BMO, and holds a Bachelor of Commerce from McMaster University. He is passionate about the empowerment of children and senior citizens.</>
                        }/>
                        <Profile image="/images/headshots/blankProfile.jpg" name="Riya Trivedi" desc={
                            <>Riya joined the CILC By-Laws and Policy Committee and Strategy Planning and Vision Committee in August 2023 and later joined the Board of Directors in August 2024. She is passionate about community engagement, promoting equity and diversity, and loves to work with children! Outside of her role with the CILC, she is a third-year medical student at McMaster University and eager to train as a Family Physician.</>
                        }/>
                    </Profileholder>
                </Section>
            </HeaderedPage>
        </>
    );
};
 
export default Team;