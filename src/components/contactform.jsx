import React from "react";
import { useState } from 'react';

function Contactform(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    let height=""
    if (props.formHeight=="full"){
        height="h-full "
    }
    return (
        <>
            <div className={height+" justify-center items-center flex-col items-center justify-center w-full overflow-hidden p-8 bg-cilcpurple box-border"}>
                <form className="w-full" id = "emailer">
                    <label className="text-white" htmlFor="name">Name</label><br/>
                    <input className="w-full mb-4 p-2" id = "name" type = "text" name = "name" placeholder = "Your name" value = {name} onChange={(e) => setName(e.target.value)} required/>
                    <label className="text-white" htmlFor="email">Email</label><br/>
                    <input className="w-full mb-4 p-2" id = "email" type = "email" name = "email" placeholder = "Your email" value = {email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label className="text-white" htmlFor="message">Message</label><br/>
                    <textarea className="w-full mb-4 p-2 resize-none h-48" id = "message" name = "message" placeholder = "Your message" value = {message} onChange={(e) => setMessage(e.target.value)} required/>
                    <input className="bg-gold" type = "submit"></input>
                </form>
            </div>
        </>
    )
}
export default Contactform