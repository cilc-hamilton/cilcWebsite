import { useState } from 'react'
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { IconContext } from "react-icons";

function Faq(){
    const [zero, setZero]=useState(false)
    const [one, setOne]=useState(false)
    const [two, setTwo]=useState(false)
    const [three, setThree]=useState(false)
    const [four, setFour]=useState(false)
    const [five, setFive]=useState(false)
    const [six, setSix]=useState(false)
    function arrow(num){
        if (num){
            return ["none", "flex"]
        } return ["flex", "none"]
    }
    function info(num){
        if (num){
            return "flex"
        } return "none"
    }
    return(
        <>
            <h3>FAQs</h3>
            <hr className="bg-deepblue"/>
            {/* Zero */}
            <div className="flex flex-row items-center cursor-pointer w-full py-2 px-4 bg-cilcgrey hover:brightness-95" onClick={() => setZero(prevCheck => !prevCheck)}>
                <h4>What forms of payment does the CILC accept?</h4>
                <div className="grow"></div>
                <IconContext.Provider value={{ size: "1.5rem" }}>
                    <GoChevronDown style={{display: arrow(zero)[0]}}/>
                    <GoChevronUp style={{display: arrow(zero)[1]}}/>
                </IconContext.Provider>
            </div>
            <div style={{display: info(zero)}} className="items-center justify-center bg-cilcgray p-4 w-full">
                <p>Payment can be made by cash at the time of the programme, cheque at the time of the programme, or by e-transfer in advance.</p>
            </div>
            <div className="w-full h-0.5 bg-cilcgray"/>
            {/* One*/}
            <div className="flex flex-row items-center cursor-pointer w-full py-2 px-4 bg-cilcgrey hover:brightness-95" onClick={() => setOne(prevCheck => !prevCheck)}>
                <h4>Would it be possible to invoice the school?</h4>
                <div className="grow"></div>
                <IconContext.Provider value={{ size: "1.5rem" }}>
                    <GoChevronDown style={{display: arrow(one)[0]}}/>
                    <GoChevronUp style={{display: arrow(one)[1]}}/>
                </IconContext.Provider>
            </div>
            <div style={{display: info(one)}} className="items-center justify-center bg-cilcgray p-4 w-full">
                <p>Yes, please mention your request at the time of booking.</p>
            </div>
            <div className="w-full h-0.5 bg-cilcgray"/>
            {/* Two */}
            <div className="flex flex-row items-center cursor-pointer w-full py-2 px-4 bg-cilcgrey hover:brightness-95" onClick={() => setTwo(prevCheck => !prevCheck)}>
                <h4>What is the minimum and maximum number of participants?</h4>
                <div className="grow"></div>
                <IconContext.Provider value={{ size: "1.5rem" }}>
                    <GoChevronDown style={{display: arrow(two)[0]}}/>
                    <GoChevronUp style={{display: arrow(two)[1]}}/>
                </IconContext.Provider>
            </div>
            <div style={{display: info(two)}} className="items-center justify-center bg-cilcgray p-4 w-full">
                <p>The minimum number of participants is 8 and the maximum number is 30.</p>
            </div>
            <div className="w-full h-0.5 bg-cilcgray"/>
            {/* Three */}
            <div className="flex flex-row items-center cursor-pointer w-full py-2 px-4 bg-cilcgrey hover:brightness-95" onClick={() => setThree(prevCheck => !prevCheck)}>
                <h4>How long is each programme?</h4>
                <div className="grow"></div>
                <IconContext.Provider value={{ size: "1.5rem" }}>
                    <GoChevronDown style={{display: arrow(three)[0]}}/>
                    <GoChevronUp style={{display: arrow(three)[1]}}/>
                </IconContext.Provider>
            </div>
            <div style={{display: info(three)}} className="items-center justify-center bg-cilcgray p-4 w-full">
                <p>Programmes are approximately 1.5 to 1.75 hours in length.</p>
            </div>
            <div className="w-full h-0.5 bg-cilcgray"/>
            {/* Four */}
            <div className="flex flex-row items-center cursor-pointer w-full py-2 px-4 bg-cilcgrey hover:brightness-95" onClick={() => setFour(prevCheck => !prevCheck)}>
                <h4>How does the travelling programme work?</h4>
                <div className="grow"></div>
                <IconContext.Provider value={{ size: "1.5rem" }}>
                    <GoChevronDown style={{display: arrow(four)[0]}}/>
                    <GoChevronUp style={{display: arrow(four)[1]}}/>
                </IconContext.Provider>
            </div>
            <div style={{display: info(four)}} className="items-center justify-center bg-cilcgray p-4 w-full">
                <p>Travelling programmes must be booked at least two weeks in advance. There will be an additional $0.55/km travel expense round trip.</p>
            </div>
            <div className="w-full h-0.5 bg-cilcgray"/>
            {/* Five */}
            <div className="flex flex-row items-center cursor-pointer w-full py-2 px-4 bg-cilcgrey hover:brightness-95" onClick={() => setFive(prevCheck => !prevCheck)}>
                <h4>How is payment determined?</h4>
                <div className="grow"></div>
                <IconContext.Provider value={{ size: "1.5rem" }}>
                    <GoChevronDown style={{display: arrow(five)[0]}}/>
                    <GoChevronUp style={{display: arrow(five)[1]}}/>
                </IconContext.Provider>
            </div>
            <div style={{display: info(five)}} className="items-center justify-center bg-cilcgray p-4 w-full">
                <p>The fee is based on the number of participants plus a travel expense.</p>
            </div>
            <div className="w-full h-0.5 bg-cilcgray"/>
            {/* Six */}
            <div className="flex flex-row items-center cursor-pointer w-full py-2 px-4 bg-cilcgrey hover:brightness-95" onClick={() => setSix(prevCheck => !prevCheck)}>
                <h4>What if I need to cancel?</h4>
                <div className="grow"></div>
                <IconContext.Provider value={{ size: "1.5rem" }}>
                    <GoChevronDown style={{display: arrow(six)[0]}}/>
                    <GoChevronUp style={{display: arrow(six)[1]}}/>
                </IconContext.Provider>
            </div>
            <div style={{display: info(six)}} className="items-center justify-center bg-cilcgray p-4 w-full">
                <p>Please be advised that a 20% cancellation fee will be charged from the amount invoiced.</p>
            </div>
        </>
    )
}
export default Faq