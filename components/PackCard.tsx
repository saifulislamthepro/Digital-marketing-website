


export default function Package({ content }: { content: { title: string; content: string; imgUrl: string; lists: { list: string }[] }[] }) {


    return(
        <section className="container">
            <div className="services grid">
                {content.map((service, index) => (
                <div key={index} className="service-card">
                    <i className={`fi ${service.imgUrl}`}></i>
                    <h2>{service.title}</h2>
                    <p>{service.content}</p>
                    {service.lists.map((list, i) => (
                        <ul key={i}>
                            <li>{list.list}</li>
                        </ul>
                    ))}
                </div>
                ))}
            </div>
        </section>
    )
}