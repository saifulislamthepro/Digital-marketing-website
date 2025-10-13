

export default function Hero ({content}: {content: {title: string, content: string, imgUrl?:string}[]}) {



    console.log(content[0].imgUrl);
    return(
        <section className="container grid">
            <div className="title flex">
                <h1>{content[0].title.toUpperCase()}</h1>
                <p>{content[0].content}</p>
                <a href="/#services"><button>View Services</button></a>
            </div>
            <div className="img-block flex">
                <img src={content[0].imgUrl} alt="smartgen" width={400}/>
            </div>
        </section>
    )
}