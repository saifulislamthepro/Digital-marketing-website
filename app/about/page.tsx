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
import { heroContent, objectiveContent, servicesContent, whyUsContent, FaqContent, partnersContent } from "@/db/about";

type content = {
  title: string,
  content: string,
  imgUrl: string,
  subheading?: string
}

export default function Home() {
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
          content="SmartGen is a premium digital marketing agency in Bangladesh specializing in strategic web development, branding, and SEO. Learn more about our mission, team, and impact."
        />
    </head>
    
        <div className="flex about-page">
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
                    <h1>OUR PROFESSIONAL SERVICES</h1>
                    <h2>SmartGen offers web development, SEO, graphic design, UI/UX, video editing, and social media marketing — all strategically crafted.</h2>
                </div>
                <Services content={servicesContentData}/>
              </section>
              <section className="cta flex">
                <Cta/>
              </section>
              <section className="why-us flex">
                <div className="texts">
                  <h1>Why Choose SmartGen?</h1>
                  <h2>SmartGen blends strategy, design, and technology to deliver premium digital solutions. We build trustworthy platforms, emotionally resonant branding, and SEO-optimized experiences that convert and scale with confidence</h2>
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
