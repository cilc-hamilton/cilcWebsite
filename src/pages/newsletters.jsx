import Section from "../components/section";
import { Link } from "react-router-dom";
import { HeaderlessPage } from "../components/page";
 
const Newsletters=() => {
    return (
        <>
            <HeaderlessPage>
                <Section color="white">
                    <h3>Check out some of our past newsletters below!</h3>
                    <hr className="bg-deepblue"/>
                    <div className="flex flex-col flex-wrap justify-center">
                        <Link className="w-fit" target="_blank" to="https://drive.google.com/file/d/1I4ij4443xYqB-T_QnR0Y2iu-AkWN4JkV/view">
                            <button className="bg-cilcgray hover:brightness-95">2023 Winter/Spring</button>
                        </Link>
                        <br/>
                        <Link className="w-fit" target="_blank" to="https://drive.google.com/file/d/1-iSjMnZdkgNul4r7foQa9owKF1_hcrBt/view">
                            <button className="bg-cilcgray hover:brightness-95">2022 Fall</button>
                        </Link>
                        <br/>
                        <Link className="w-fit" target="_blank" to="https://drive.google.com/file/d/11dGEGiq2JZc90ytsB9pO9WcHiyu5GHS3/view">
                            <button className="bg-cilcgray hover:brightness-95">2022 Spring/Summer</button>
                        </Link>
                        <br/>
                        <Link className="w-fit" target="_blank" to="https://drive.google.com/file/d/1jRMNBgFOcnDiIDWxiJBg17DHCeTW2gmI/view">
                            <button className="bg-cilcgray hover:brightness-95">2022 Winter</button>
                        </Link>
                        <br/>
                        <Link className="w-fit" target="_blank" to="https://drive.google.com/file/d/1YK_i71lYoEzLklv4oy1seKpI-4VlS5gI/view">
                            <button className="bg-cilcgray hover:brightness-95">2021 Holiday</button>
                        </Link>
                        <br/>
                        <Link className="w-fit" target="_blank" to="https://drive.google.com/file/d/1cIbOZSZXJPeop5gA6iLVs8RmuvykCggF/view">
                            <button className="bg-cilcgray hover:brightness-95">2021 Fall</button>
                        </Link>
                    </div>
                </Section>
            </HeaderlessPage>
        </>
    );
};
 
export default Newsletters;