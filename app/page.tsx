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
import { heroContent, objectiveContent, servicesContent, whyUsContent, FaqContent } from "@/db/data";

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

  return (
    <div className="flex page">
      <div className="hero flex">
          <Hero content={heroContentData}/>
      </div>
      <section className="partners flex">
        <Partners/>
      </section>
      <section className="objective">
        <Objective content={objectiveContentData}/>
      </section>
      <section className="services-comp" id="services">
        <div className="services-headline">
            <h1>All the Services we provide are here</h1>
            <p>Lorem, equatur, eaque cupiditate molestias sint harum non, repudiandae voluptates, numquam consequuntur culpa saepe.</p>
        </div>
        <Services content={servicesContentData}/>
      </section>
      <section className="cta flex">
        <Cta/>
      </section>
      <section className="why-us">
        <div className="texts">
          <h1>Why We’re Best Choice as a Digital Marketing agency for Your Success</h1>
          <p>Start your online journey with our digital marketing skills to achieve notable results. We use all the advanced marketing tools and customer-centric campaigns that are sure to grow your leads, sales, and ROI. Our focus on clear reporting, ongoing improvements, and client success helps your brand build lasting online growth.</p>
        </div>
        <WhyUs content={whyUsContentData}/>
      </section>
      <section className="faq">                     
        <FAQ content={faqContentData}/>
      </section>
      <section className="testimonials">
        <Testimonials/>
      </section>
    </div>
  );
}
