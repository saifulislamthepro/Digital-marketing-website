
import DropDown from "./DropDown";
import WhyUs from "./WhyUs";


export default function FAQ(content: {content: {title: string, content: string}[]}) {






    return(
        <section className="container ">
            <h2 className="section-title">Frequently Asked Questions(F.A.Q)</h2>   
            <section className="flex">  

                <div className="faq-info grid">                    
                    
                    <div className="img-info flex">
                        <i className="fi fi-rs-question"></i>
                    </div>
                    {content.content.map((item, i) => (
                        <DropDown key={i} title={item.title} content={item.content} i={i}/>
                    ))}

                </div>
            </section>
        </section>
    )
}