"use client"

import { useState } from "react";


export default function DropDown(content: {title: string, content: string, i: number}) {
    const [showMore, setShowMore] = useState(false);
    const [index, setIndex] = useState<number | null>(null);





      const toggleText = (i: Number) => {

        if(index === i && showMore){
            setIndex(null);
        } else{
            setIndex(i as number);
            setShowMore(true);
        }
      };
    
    
    
    
    
    
    return(
        <ul className="info">                      
            <li className={index === content.i ? "rotate": ""} key={content.i} onClick={() => toggleText(content.i)}>
                <h3 className="flex">{content.title} <i className="fi fi-rs-angle-left"></i></h3>
                <div className={`p-wrapper ${index === content.i ? "show": ""}`}>
                    <p className={index === content.i ? "show": ""}>{content.content}</p>
                </div>
            </li>
        </ul>        
    )
}