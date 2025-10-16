


type content = {
  title: string,
  content: string,
  imgUrl: string,
  subheading?: string
}


export function heroContent () {
  const heroContent: content[] = [
  {
    title: " Web design & Development",
    content: "SmartGen delivers secure, responsive, and SEO-optimized website solutions tailored to your brand. We blend modern design with robust backend logic to create high-converting digital experiences that scale with your business.",
    imgUrl: "/images/Logo.svg"
  }];

  return heroContent;
}

export function objectiveContent () {

const objectiveContent: content[] = [
  {
    title: "How we make websites for businesses",
    content: "SmartGen builds business websites using WordPress, custom PHP, and advanced frameworks like Next.js. From CMS setups to full-stack applications, we deliver responsive, SEO-optimized platforms tailored to your goals — blending design, speed, and scalability for impactful digital growth across industries.",
    subheading: "From WordPress to Next.js, SmartGen builds responsive, SEO-friendly websites tailored to your business goals and growth strategy.",
    imgUrl: "/images/Website.jpg"
  }
];

return objectiveContent;
}

export function servicesContent () {

const servicesContent: content[] = [
  {
    title: "Website with WordPress",
    content: "SmartGen offers expert PHP programming for dynamic, secure, and scalable web solutions. From custom CMS development to API integration and backend logic, our PHP services power high-performance websites tailored to your business needs — ensuring fast load times, SEO readiness, and seamless user experiences across industries.",
    imgUrl: "fi-brands-wordpress"
  },
  {
    title: "Web application with PHP",
    content: "SmartGen builds powerful WordPress websites tailored to your brand and business goals. From custom themes and plugins to SEO-friendly architecture and responsive design, we deliver scalable, secure, and easy-to-manage WordPress solutions that drive engagement, boost visibility, and convert visitors into loyal customers across industries in Bangladesh and beyond.",
    imgUrl: "fi-brands-php"
  },
  {
    title: "Web Application with JavaScript",
    content: "SmartGen delivers expert JavaScript development for dynamic, responsive, and interactive websites. From frontend enhancements to backend logic using frameworks like React, Next.js, and Node.js, our JavaScript solutions ensure fast performance, seamless UX, and scalable architecture — empowering businesses with modern, conversion-focused digital experiences across devices and platforms.",
    imgUrl: "fi-rs-react"
  }
];

return servicesContent;
}

export function whyUsContent () {
const whyUsContent: content[] = [
  {
    title: "Strategic Thinking Meets Premium Execution",
    content: "At SmartGen, we don’t just build websites — we architect digital ecosystems. Every project begins with deep strategic insight, ensuring your brand’s goals, audience, and market position are reflected in every pixel and line of code. Our solutions are designed to convert, scale, and inspire trust from day one.",
    imgUrl: ""
  },
  {
    title: "Emotionally Resonant Design That Convert",
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
    title: "What platforms and technologies does SmartGen use for web development?",
    content: "We specialize in WordPress, PHP, JavaScript frameworks like React and Next.js, and scalable backend solutions including Firebase, Supabase, and VPS — tailored to your business needs.",
    imgUrl: ""
  },
  {
    title: "How does SmartGen ensure websites are optimized for SEO and conversions?",
    content: "We combine strategic layout, fast-loading code, responsive design, and keyword-rich content to boost Google rankings and drive user engagement and lead generation.",
    imgUrl: ""
  },
  {
    title: "Will my website be mobile-friendly and responsive?",
    content: "Absolutely. Every SmartGen website is designed to perform flawlessly across devices — ensuring seamless user experience on desktops, tablets, and smartphones.",
    imgUrl: ""
  },
  {
    title: "How does SmartGen handle website security and performance?",
    content: "We implement SSL, secure hosting, optimized code, and regular audits to protect your site and ensure fast, reliable performance for every visitor.",
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
