import React from "react";

function Profileholder(props){
    return (
        <>
            <div className="grid w-full h-fit gap-8 min-[900px]:grid-cols-[repeat(auto-fit,minmax(28rem,1fr))] grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]">
                {props.children}
            </div>
        </>
    )
}

function Profile(props){
    return (
        <>
            <div className="p-8 bg-cilcgrey w-full flex flex-col justify-center items-center">
                <img className="min-[900px]:w-96 w-64" src={props.image}></img>
                <br/>
                <h3 className="text-center">{props.name}</h3>
                <br/>
                <p className="text-center">{props.desc}</p>
            </div>
        </>
    )
}

export {Profileholder, Profile}