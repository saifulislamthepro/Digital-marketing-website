'use client'

import { useState } from "react"
import Form from "./contactForm"



export default function Cta() {
    const [shoeForm, setShow] = useState(false)


    return(
        <section className="container flex">
            <div className="cta-texts flex">
                <div className={`form-wrapper flex ${shoeForm? "form-active" : ''}`}>
                    <Form />
                </div>
                <h3>Get A Free Consultation NOW!</h3>
                <div className="flex">
                    <button onClick={() => setShow(!shoeForm)}>Get A Free Proposal</button>
                    <a href="tel:+8801711153960"><button>CALL +8801711153960</button></a>
                </div>
            </div>
        </section>
    )
}