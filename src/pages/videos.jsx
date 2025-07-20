import Section from "../components/section";
import Video from "../components/video";
import { HeaderlessPage } from "../components/page";
 
const Videos=() => {
    return (
        <>
            <HeaderlessPage>
                <Section>
                    <h3>Videos</h3>
                    <hr className="bg-deepblue"/>
                    <div className="grid w-full h-fit gap-y-8 gap-x-8 min-[900px]:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))]">
                        <Video vid="_Rdp1Q4bNhU"/>
                        <Video vid="5zx6yAg_QFQ"/>
                        <Video vid="1mKjV4e159M"/>
                        <Video vid="i_FGRviFhsw"/>
                        <Video vid="G7Bl3Z35kTM"/>
                    </div>
                </Section>
            </HeaderlessPage>
        </>
    );
};
 
export default Videos;