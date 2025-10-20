import Image from "next/image";
import Hero from "@/components/Hero";
import "../style.css";
import Objective from "@/components/Objective";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { heroContent, objectiveContent, servicesContent, whyUsContent, FaqContent, partnersContent, packSummaryContent } from "@/db/business";
import Package from "@/components/PackCard";
import PackageSummery from "@/components/packageSummery";

type StartupContent = {
  title: string,
  content: string,
  imgUrl: string,
  subheading?: string,
  lists?: {list: string}[]
}
type packageContent = {
    name: string,
    QTY: number
}

export default function Website() {
  const heroContentData: StartupContent[] = heroContent();
  const objectiveContentData: StartupContent[] = objectiveContent();
  const rawServicesContentData: StartupContent[] = servicesContent();
  const servicesContentData: { title: string, content: string, imgUrl: string, subheading?: string, lists: { list: string }[] }[] = rawServicesContentData.map(item => ({
    title: item.title,
    content: item.content,
    imgUrl: item.imgUrl,
    subheading: item.subheading,
    lists: item.lists ?? []
  }));

  const packSummaryData: packageContent[] = packSummaryContent();
  const whyUsContentData: StartupContent[] = whyUsContent();
  const faqContentData: StartupContent[] = FaqContent();
  const partnersContentData: StartupContent[] = partnersContent().partnersContent;
  const partnersHeading: StartupContent[] = partnersContent().partnersHeading

  return (
    <>    
    <head>
      <title>Smartgen Business Package</title>
      <meta 
      name="description"
      content="Smartgen Offers Social media marketing based Business Package to achive best result growing business online"/>
    </head>
        <div className="web-page">
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
                    <h1>Services we Offer in the Premium Packages?</h1>
                    <h2>SmartGen Premium packages delivers complete solutions tailored to elevate your brand, engage users, and drive conversions.</h2>
                </div>
                <Package content={servicesContentData}/>
              </section>
              <section>
                <PackageSummery content={packSummaryData}/>
              </section>
              <section className="cta flex">
                <Cta/>
              </section>
              <section className="why-us flex">
                <div className="texts">
                  <h1>Why Choose SmartGens Premium Package?</h1>
                  <h2>SmartGen Premium Package has the strategy, design, and technology to deliver high-converting, SEO-optimized websites with all the required tasks for growth, trust, and user experience.</h2>
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
