
import DropDown from "./DropDown";


export default function WhyUs({content}: {content: {title: string, content: string, imgUrl: string}[]}) {


    return(
        <section className="flex">
            <section className="container">
                <div className="img-info grid">
                    <ul className="info flex">
                        {content.map((item, i) => (                        
                            <DropDown key={i} title={item.title} content={item.content} i={i}/>
                        ))}
                    </ul>
                    <div className="img-container flex">
                        <img src="/images/Logo.svg" alt="smartgen"  width={200}/>
                    </div>
                </div>
            </section>
        </section>
    )
}