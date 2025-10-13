


export default function Services({content}: {content: {title: string, content: string, imgUrl: string}[]}) {


    return(
        <section className="container">
            <div className="services grid">
                {content.map((service, index) => (
                <div key={index} className="service-card">
                    <i className={`fi ${service.imgUrl}`}></i>
                    <h2>{service.title}</h2>
                    <p>{service.content}</p>
                </div>
                ))}
            </div>
        </section>
    )
}