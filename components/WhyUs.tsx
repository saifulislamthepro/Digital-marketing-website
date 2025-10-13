"use client"

import { useState } from "react";


export default function WhyUs({content}: {content: {title: string, content: string, imgUrl: string}[]}) {
    const [showMore, setShowMore] = useState(false);
    const [index, setIndex] = useState<number | null>(null);





      const toggleText = (i: Number) => {

        if(index === i && showMore){
            setIndex(null);
        } else{
            setIndex(i as number);
        }
      };


      console.log(index);
    return(
        <section className="container flex">
            <div className="img-info grid">
                <ul className="info">
                    {content.map((item, i) => (                        
                        <li className={index === i ? "rotate": ""} key={i} onClick={() => toggleText(i)}>
                            <h3 onClick={() => toggleText(i)} className="flex">{item.title} <i className="fi fi-rs-angle-left"></i></h3>
                            <div className="p-wrapper">
                                <p className={index === i ? "show": ""}>{item.content}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="img-container flex">
                    <img src="/images/Website.jpg" alt="smartgen"  width={400}/>
                </div>
            </div>
        </section>
    )
}