

export default function Objective({content}: {content: {title: string, subheading?: string, content: string, imgUrl: string}[]}) {




    return(
        <section className="container grid">
            <div className="objective-img flex">
                <img src={content[0].imgUrl} alt="smartgen" className="flex"/>
            </div>
            <div className="objective-texts flex">
                <h1>{content[0].title}</h1>
                <strong>{content[0].subheading}</strong>
                <p>{content[0].content}</p>
            </div>
        </section>
    )
}