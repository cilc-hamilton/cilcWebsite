function Sponsor(props){
    
    return (
        <>
            <div className="flex flex-col p-8 bg-white items-center justify-center">
                <h3 className="">{props.org}</h3>
                {props.image && 
                    <>
                        <hr className="bg-deepblue"/>
                        <img className="w-full" src={props.image} alt={`Logo for ${props.org}.`}/>
                    </>
                }
            </div>
        </>
    )
}
export default Sponsor