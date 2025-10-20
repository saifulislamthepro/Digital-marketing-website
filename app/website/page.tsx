import Image from "next/image";
import Hero from "@/components/Hero";
import "./style.css";
import Objective from "@/components/Objective";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { heroContent, objectiveContent, servicesContent, whyUsContent, FaqContent, partnersContent } from "@/db/website";

type content = {
  title: string,
  content: string,
  imgUrl: string,
  subheading?: string
}

export default function Website() {
  const heroContentData: content[] = heroContent();
  const objectiveContentData: content[] = objectiveContent();
  const servicesContentData: content[] = servicesContent();
  const whyUsContentData: content[] = whyUsContent();
  const faqContentData: content[] = FaqContent();
  const partnersContentData: content[] = partnersContent().partnersContent;
  const partnersHeading: content[] = partnersContent().partnersHeading

  return (
    <>
    <head>
       <title>About SmartGen | Digital Marketing Agency in Bangladesh</title>
        <meta
          name="description"
          content="SmartGen is a premium digital marketing agency in Bangladesh specializing in strategic web development, ecommrce website, landing page etc. Learn more about our mission, team, and impact."
        />
    </head>
    
        <div className="flex web-page">
              <div className="hero flex">
                  <Hero content={heroContentData}/>
              </div>
              <section className="partners flex">
                <Partners content={partnersContentData} heading={partnersHeading}/>
              </section>
              <section className="objective flex">
                <Objective content={objectiveContentData}/>
              </section>
              <section className="services-comp flex" id="services">
                <div className="services-headline">
                    <h1>OUR WEB SOLUTION SERVICES</h1>
                    <h2>SmartGen delivers responsive, secure, and SEO-optimized web solutions  tailored to elevate your brand, engage users, and drive conversions.</h2>
                </div>
                <Services content={servicesContentData}/>
              </section>
              <section className="cta flex">
                <Cta/>
              </section>
              <section className="why-us flex">
                <div className="texts">
                  <h1>Why Choose SmartGen for Website Design & Development?</h1>
                  <h2>SmartGen blends strategy, design, and technology to deliver high-converting, SEO-optimized websites tailored for growth, trust, and user experience.</h2>
                </div>
                <WhyUs content={whyUsContentData}/>
              </section>
              <section className="faq flex">                     
                <FAQ content={faqContentData}/>
              </section>
        </div>
    </>
  );
}
