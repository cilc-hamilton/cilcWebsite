function Book(props){
    let initials = props.author.split(" ").slice(0, 2)
    initials = (initials[0][0]+initials[1][0]).toUpperCase()
    let shortTitle = props.title.split(" ")[0]
    shortTitle = shortTitle[0].toUpperCase()+shortTitle.slice(1)
    let imageSource = "/images/books/"+initials+"-"+shortTitle+".jpg"
    let margin = ""
    if (props.series){
        margin=" mb-2"
    }
    return (
        <>
            <div className="flex flex-col p-8 bg-cilcgray">
                <h3 className="">{props.title}</h3>
                <h4 className="font-thin">{props.author}</h4>
                <hr className="bg-deepblue"/>
                <img className="w-full" src={imageSource} alt={`Book cover of ${props.title} by ${props.author}.`}/>
                <br/>
                <p className={"text-[1rem]"+margin}>{props.series}</p>
                <p className="text-[1.1rem]">{props.summary}</p>
            </div>
        </>
    )
}
export default Book