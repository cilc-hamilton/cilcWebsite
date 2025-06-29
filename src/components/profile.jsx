function Profileholder(props){
    return (
        <>
            <div className="grid w-full h-fit gap-8 grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]">
                {props.children}
            </div>
        </>
    )
}

function Profile(props){
    return (
        <>
            <div className="p-8 bg-cilcgray w-full flex flex-col justify-center items-center">
                <img className="w-64" src={props.image}></img>
                <br/>
                <h3 className="text-center">{props.name}</h3>
                <br/>
                <p className="text-center">{props.desc}</p>
            </div>
        </>
    )
}

export {Profileholder, Profile}