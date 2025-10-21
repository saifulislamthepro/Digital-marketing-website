


type content = {
  title: string,
  content: string,
  imgUrl: string,
  subheading?: string
}


export function heroContent () {
  const heroContent: content[] = [
  {
    title: "SmartGen | Your Ultimate digital Growth Partner.",
    content: "We're a complete One stop marketing agency in Bangladesh. Our goal is to make your businesses online presence Professionaly.",
    imgUrl: "/images/Ads.png"
  }];

  return heroContent;
}

export function objectiveContent () {

const objectiveContent: content[] = [
  {
    title: "We're A One stop Digital Marketing Agency In Bangladesh.",
    content: "SmartGen’s objective is to empower businesses and organizations in Bangladesh with premium digital solutions that build trust, drive engagement, and deliver measurable results. We specialize in full-stack web development, SEO, branding, and scalable infrastructure — crafting emotionally resonant experiences that convert. Our mission-driven approach blends strategy, design, and technology to elevate digital standards and help clients thrive in an increasingly competitive online landscape.",
    subheading: "We are committed to delivering exceptional results and helping businesses thrive in the digital landscape. ",
    imgUrl: "/images/Promotion.png"
  }
];

return objectiveContent;
}

export function servicesContent () {

const servicesContent: content[] = [
  {
    title: "Web Design & Development",
    content: "SmartGen delivers premium full-stack web development in Bangladesh, combining frontend design and backend logic for scalable, SEO-optimized websites. From HTML and CSS to PHP and JavaScript, we build secure, responsive platforms that convert. Trusted by diverse industries, SmartGen sets the standard for strategic, emotionally resonant digital experiences.",
    imgUrl: "fi-rs-website-design"
  },
  {
    title: "Search engine Optimization",
    content: "SmartGen delivers strategic Search Engine Optimization (SEO) services in Bangladesh, helping businesses rank higher, attract qualified traffic, and convert visitors into customers. From technical audits to keyword-rich content and Google Search Console mastery, our SEO solutions are tailored to elevate visibility, build trust, and drive measurable digital growth.",
    imgUrl: "fi-rs-discover"
  },
  {
    title: "Social media marketing",
    content: "SmartGen offers strategic Social Media Marketing services in Bangladesh, helping brands grow engagement, build trust, and convert followers into customers. From content creation to campaign management across Facebook, Instagram, and LinkedIn, we craft emotionally resonant stories and data-driven strategies that amplify your digital presence and drive measurable business results.",
    imgUrl: "fi-rs-megaphone"
  },    
  {
    title: "graphics Design",
    content: "SmartGen delivers premium graphic design services in Bangladesh, crafting visually stunning assets that elevate brand identity and drive engagement. From logos and banners to social media creatives and campaign visuals, our designs blend emotional resonance with strategic clarity — helping businesses stand out, build trust, and convert audiences into loyal customers.",
    imgUrl: "fi-rs-vector-alt"
  },
  {
    title: "UI/UX Design",
    content: "SmartGen crafts intuitive UI/UX designs that elevate user experience and drive conversions. From wireframes to responsive interfaces, we blend aesthetics with usability to create digital journeys that feel effortless. Our design systems prioritize clarity, accessibility, and emotional resonance — helping brands in Bangladesh build trust and outperform in the digital space.",
    imgUrl: "fi-rs-apps-add"
  },
  {
    title: "Video editing",
    content: "SmartGen offers professional video editing services in Bangladesh, transforming raw footage into compelling visual stories that captivate and convert. From promotional reels to branded content, our editors craft dynamic, emotionally resonant videos optimized for social media, websites, and campaigns — helping businesses elevate engagement and communicate with clarity and impact.",
    imgUrl: "fi-rs-film"
  }
];

return servicesContent;
}

export function whyUsContent () {
const whyUsContent: content[] = [
  {
    title: "Strategic Thinking Meets Premium Executions",
    content: "At SmartGen, we don’t just build websites — we architect digital ecosystems. Every project begins with deep strategic insight, ensuring your brand’s goals, audience, and market position are reflected in every pixel and line of code. Our solutions are designed to convert, scale, and inspire trust from day one.",
    imgUrl: ""
  },
  {
    title: "Emotionally Resonant Design That Converts",
    content: "We craft visually stunning, emotionally intelligent designs that do more than look good — they drive action. From modern layouts and soft gradients to responsive grids and intuitive UI/UX, our design philosophy blends beauty with purpose, helping your brand stand out and connect meaningfully with your audience.",
    imgUrl: ""
  },
  {
    title: "Technical Reliability You Can Trust",
    content: "SmartGen delivers secure, scalable, and SEO-optimized platforms built on robust backend logic. Whether it’s DNS setup, form handling, or infrastructure planning with Firebase or Supabase, we ensure your digital foundation is fast, reliable, and ready for growth — so you never lose a lead to downtime.",
    imgUrl: ""
  },
  {
    title: " Mission-Driven Impact Across Industries",
    content: "We’re proud to serve charities, travel agencies, ecommerce brands, and real estate firms with solutions that elevate their digital presence and social impact. Our work is guided by empathy, transparency, and a commitment to setting new standards for digital excellence in Bangladesh and beyond.",
    imgUrl: ""
  }
];

return whyUsContent;
}

export function FaqContent () {

const FaqContent: content[] = [
  {
    title: "What services does SmartGen offer?",
    content: "SmartGen provides full-stack web development, SEO, graphic design, UI/UX, video editing, and social media marketing — all crafted to build trust, drive conversions, and elevate your brand’s digital presence across industries.",
    imgUrl: ""
  },
  {
    title: "Can SmartGen handle high-traffic websites?",
    content: "Absolutely. We architect scalable, secure platforms using Firebase, Supabase, and VPS solutions — ensuring fast performance, reliable backend logic, and seamless user experience even under heavy traffic or complex workflows",
    imgUrl: ""
  },
  {
    title: "Do you offer custom packages?",
    content: "Yes. Our Custom Package Builder lets you select services, set quantities, and view pricing instantly. It’s designed for flexibility, transparency, and conversion — perfect for agencies, startups, and mission-driven organizations.",
    imgUrl: ""
  },
  {
    title: "How does SmartGen approach SEO?",
    content: "We combine technical audits, keyword strategy, and Google Search Console mastery to boost visibility and drive qualified traffic. Our SEO is tailored to your goals, ensuring long-term growth and measurable impact.",
    imgUrl: ""
  }
];

  return FaqContent;
}

export function partnersContent () {
  const partnersContent: content[] = [
    { title: "Facebook", content: "", imgUrl: "fi-brands-facebook" },
    { title: "YouTube", content: "", imgUrl: "fi-brands-youtube" },
    { title: "Google", content: "", imgUrl: "fi-brands-google" },
    { title: "WhatsApp", content: "", imgUrl: "fi-brands-whatsapp" },
    { title: "Instagram", content: "", imgUrl: "fi-brands-instagram" }
  ]; 
  const partnersHeading: content[]= [{
    title: "The platforms we are Partner with",
    content: "",
    imgUrl: ""
  }];
  return { partnersHeading, partnersContent};
}
