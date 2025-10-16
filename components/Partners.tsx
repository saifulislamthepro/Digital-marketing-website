



export default function Partners({ content, heading }: { content: { title: string, content: string, imgUrl: string }[], heading: { title: string, content: string, imgUrl: string }[] }) {



    return(
        <section className="container flex">
            <p>{heading[0].title}</p>
            <div className="flex partners-div" >
            {content.map((item,i)=> (
                <i className={`fi ${item.imgUrl}`} key={i}></i>
            ))}
            </div>
        </section>
    )
}