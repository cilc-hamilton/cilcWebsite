import Mobilenav from "../navbar/mobile"
import Navbar from "../navbar/navbar"
import Footer from "./footer"
import Header from "./header"

function HeaderedPage(props){
    return (
        <>
            <div className="flex flex-col w-screen min-h-screen box-border pt-0 min-[900px]:pt-36">
                <Header image = {props.image} color={props.color}/>
                {props.children}
                <div className="grow"></div>
                <Footer/>
            </div>
        </>
    )
}

function HeaderlessPage(props){
    return (
        <>
            <div className="flex flex-col w-screen min-h-screen box-border pt-0 min-[900px]:pt-36">
                <Navbar/>
                <Mobilenav/>
                {props.children}
                <div className="grow"></div>
                <Footer/>
            </div>
        </>
    )
}

export {HeaderedPage, HeaderlessPage}