import Section from "../components/section";
import { Link } from "react-router-dom";
import { HeaderlessPage } from "../components/page";
 
const Resources = () => {
    return (
        <>
            <HeaderlessPage>
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
            </HeaderlessPage>
        </>
    );
};
 
export default Resources;