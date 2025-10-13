import Image from "next/image";
import Hero from "@/components/Hero";
import "./style.css";
import Objective from "@/components/Objective";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";

type content = {
  title: string,
  content: string,
  imgUrl: string,
  subheading?: string
}

export default function Home() {
const heroContent: content[] = [
  {
    title: "SmartGen | Your Ultimate businesse Growth Partner in Bangladesh",
    content: "We're a complete One stop marketing agency in Bangladesh. Our goal is to make your businesses online presence Professionaly",
    imgUrl: "/images/Ads.png"
  }
];

const objectiveContent: content[] = [
  {
    title: "We're A One stop Digital Marketing Agency In Bangladesh",
    content: "our Goal is to make your online Presence professionaly Top in your niche lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel repudiandae aut, eius consectetur quisquam nostrum voluptas ex quidem rem minima iste incidunt provident, eaque reprehenderit assumenda laudantium quas. Ab.",
    subheading: "We are committed to delivering exceptional results and helping businesses thrive in the digital landscape. ",
    imgUrl: "/images/Promotion.png"
  }
];

const servicesContent: content[] = [
  {
    title: "Web Design & Development",
    content: "Lorem ipsum dolor sit amet consectetur , optio repellat ut odit vitae quaerat delectus! Quis facilis laborum officiis accusamus harum dolores eveniet, aspernatur, eum, animi esse tenetur!",
    imgUrl: "fi-rs-website-design"
  },
  {
    title: "Search engine Optimization",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut vero esse illum neque nostrum laudantium reiciendis placeat, id ab dolorem facere temporibus sapiente ex, in, quasi pariatur! Odio, eius!",
    imgUrl: "fi-rs-discover"
  },
  {
    title: "Social media marketing",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut vero esse illum neque nostrum laudantium reiciendis placeat, id ab dolorem facere temporibus sapiente ex, in, quasi pariatur! Odio, eius!",
    imgUrl: "fi-rs-megaphone"
  },    
  {
    title: "graphics Design",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut vero esse illum neque nostrum laudantium reiciendis placeat, id ab dolorem facere temporibus sapiente ex, in, quasi pariatur! Odio, eius!",
    imgUrl: "fi-rs-vector-alt"
  },
  {
    title: "UI/UX Design",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut vero esse illum neque nostrum laudantium reiciendis placeat, id ab dolorem facere temporibus sapiente ex, in, quasi pariatur! Odio, eius!",
    imgUrl: "fi-rs-apps-add"
  },
  {
    title: "Video editing",
    content: "Lorem, equatur, eaque cupiditate molestias sint harum non, repudiandae voluptates, numquam consequuntur culpa saepe.",
    imgUrl: "fi-rs-film"
  }
];

const whyUsContent: content[] = [
  {
    title: "Expertise in the Bangladesh Market",
    content: "With a deep understanding of Bangladesh’s digital arena, we design customized marketing strategies based on local consumer behavior. Our experts focus on the local preferences and ongoing trends of this region so you can connect your brand with the right audience. As industry demand grows, we ensure your brand stands out through strategic visibility, relevant traffic, and real conversion results.",
    imgUrl: ""
  },
  {
    title: "Visible Growth, Maximum ROI",
    content: "With a deep understanding of Bangladesh’s digital arena, we design customized marketing strategies based on local consumer behavior. Our experts focus on the local preferences and ongoing trends of this region so you can connect your brand with the right audience. As industry demand grows, we ensure your brand stands out through strategic visibility, relevant traffic, and real conversion results.",
    imgUrl: ""
  },
  {
    title: "Simple and Transparent Process",
    content: "With a deep understanding of Bangladesh’s digital arena, we design customized marketing strategies based on local consumer behavior. Our experts focus on the local preferences and ongoing trends of this region so you can connect your brand with the right audience. As industry demand grows, we ensure your brand stands out through strategic visibility, relevant traffic, and real conversion results.",
    imgUrl: ""
  },
  {
    title: "Professional Guidance from Marketing Experts",
    content: "With a deep understanding of Bangladesh’s digital arena, we design customized marketing strategies based on local consumer behavior. Our experts focus on the local preferences and ongoing trends of this region so you can connect your brand with the right audience. As industry demand grows, we ensure your brand stands out through strategic visibility, relevant traffic, and real conversion results.",
    imgUrl: ""
  }
];

  return (
    <div className="flex page">
      <div className="hero flex">
          <Hero content={heroContent}/>
      </div>
      <section className="partners flex">
        <Partners/>
      </section>
      <section className="objective">
        <Objective content={objectiveContent}/>
      </section>
      <section className="services-comp" id="services">
        <div className="services-headline">
            <h1>All the Services we provide are here</h1>
            <p>Lorem, equatur, eaque cupiditate molestias sint harum non, repudiandae voluptates, numquam consequuntur culpa saepe.</p>
        </div>
        <Services content={servicesContent}/>
      </section>
      <section className="cta flex">
        <Cta/>
      </section>
      <section className="why-us">
        <div className="texts">
          <h1>Why We’re Best Choice as a Digital Marketing agency for Your Success</h1>
          <p>Start your online journey with our digital marketing skills to achieve notable results. We use all the advanced marketing tools and customer-centric campaigns that are sure to grow your leads, sales, and ROI. Our focus on clear reporting, ongoing improvements, and client success helps your brand build lasting online growth.</p>
        </div>
        <WhyUs content={whyUsContent}/>
      </section>
      <section className="testimonials">
        <Testimonials/>
      </section>
    </div>
  );
}
