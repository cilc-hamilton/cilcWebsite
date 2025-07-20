import Section from "../components/section";
import Card from "../components/card";
import { HeaderedPage } from "../components/page";
 
const Donate = () => {
    return (
        <>
            <HeaderedPage image="/images/headers/donate.jpg" color="cilcred">
                <Section color="white">
                    <Card color="cilcpurple">
                        <h1 className="font-bold text-white">Make a donation!</h1>
                        <hr className="bg-white"/>
                        <p className="text-white">Are you passionate about promoting respect for diversity and awareness of our global community to youth audiences? The CILC relies on generous financial contributions from generous donors to carry out its mission in the greater Hamilton area.</p>
                        <br/>
                        <p className="text-white">If you want to make a difference, consider making a donation below.</p>
                        <br/>
                        <div className="flex flex-row">
                            <a href="https://www.canadahelps.org/en/dn/35893?v2=true" target="_blank" rel="noopener noreferrer">
                                <button className="bg-gold hover:brightness-110 mr-4">Donate through CanadaHelps</button>
                            </a>
                            <a href="https://www.paypal.com/ca/fundraiser/charity/3423778" target="_blank" rel="noopener noreferrer">
                                <button className="bg-gold hover:brightness-110 mr-4">Donate through PayPal</button>
                            </a>
                        </div>
                    </Card>
                </Section>
            </HeaderedPage>
        </>
    );
};
 
export default Donate;