import React from "react";

function Maps(props){
    let formDisplay = "hidden"
    if (props.displaying=="Maps"){
        formDisplay="flex"
    }
    return (
        <>
            <div className={formDisplay+" flex items-center justify-center w-screen min-[900px]:w-[70vw] overflow-hidden"}>
                <iframe className="w-screen min-[900px]:w-[70vw] h-[600px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5811.332284458503!2d-79.87340768759019!3d43.25841837100322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b8363464557%3A0x35c06ebb6016068f!2sJackson%20Square!5e0!3m2!1sen!2sca!4v1721695116475!5m2!1sen!2sca" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}
export default Maps