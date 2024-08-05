import React from "react";

function Video(props){
    return (
        <>
            <iframe className="w-full aspect-video flex justify-center items-center" src={"https://www.youtube.com/embed/"+props.vid}/>
        </>
    )
}
export default Video