


type content = {
  title: string,
  content: string,
  imgUrl: string,
  subheading?: string
}


export function heroContent () {
  const heroContent: content[] = [
  {
    title: " Digital marketing",
    content: "SmartGen delivers strategic digital marketing solutions that drive traffic, boost engagement, and increase conversions. From SEO and social media to paid ads and content strategy, we amplify your brand’s online impact.",
    imgUrl: "/images/Logo.svg"
  }];

  return heroContent;
}

export function objectiveContent () {

const objectiveContent: content[] = [
  {
    title: "How we do impactful Digital Marketing",
    content: "We begin with deep audience research and brand analysis, then craft tailored campaigns across SEO, social media, content, and paid ads. Every move is data-driven and emotionally resonant — designed to engage, convert, and grow your brand’s online presence with measurable results.",
    subheading: "SmartGen combines strategy, creativity, and data to deliver digital marketing that drives traffic, builds trust, and boosts conversions",
    imgUrl: "/images/Ads.png"
  }
];

return objectiveContent;
}

export function servicesContent () {

const servicesContent: content[] = [
  {
    title: "SEO",
    content: "SmartGen delivers strategic SEO that boosts your website’s visibility, rankings, and organic traffic. We optimize technical structure, content, and keywords, while leveraging Google Search Console insights to ensure long-term growth and digital trust across search engines.",
    imgUrl: "fi-rs-url"
  },
  {
    title: "Social Media Marketing",
    content: "We create platform-specific content strategies that drive engagement, build community, and amplify your brand voice. From reels and carousels to paid campaigns, SmartGen ensures your message reaches the right audience with emotional impact and measurable results.",
    imgUrl: "fi-rs-followers"
  },
  {
    title: " Paid Advertising (PPC)",
    content: "SmartGen runs high-converting ad campaigns across Google, Facebook, and Instagram. We target the right audience with compelling visuals and copy, optimize budgets, and track performance — ensuring every click contributes to ROI and brand growth.",
    imgUrl: "fi-rs-ad-paid"
  }
];

return servicesContent;
}

export function whyUsContent () {
const whyUsContent: content[] = [
  {
    title: "Strategic Campaign Planning",
    content: "We analyze your goals and audience to craft tailored strategies across SEO, social media, content, and paid ads.",
    imgUrl: ""
  },
  {
    title: "Emotionally Engaging Content",
    content: "Our creatives spark connection — blending storytelling, visuals, and messaging that resonate and inspire action.",
    imgUrl: ""
  },
  {
    title: "Performance-Driven Execution",
    content: "Every campaign is optimized for ROI, using analytics and A/B testing to refine performance and maximize results.",
    imgUrl: ""
  },
  {
    title: "Multi-Platform Expertise",
    content: "We manage and optimize campaigns across Google, Facebook, Instagram, and more — ensuring consistent impact wherever your audience lives",
    imgUrl: ""
  }
];

return whyUsContent;
}

export function FaqContent () {

const FaqContent: content[] = [
  {
    title: "What digital marketing services does SmartGen offer?",
    content: "We provide SEO, social media marketing, content creation, paid advertising (PPC), email campaigns, and analytics — all designed to grow your brand online.",
    imgUrl: ""
  },
  {
    title: "How does SmartGen measure campaign success?",
    content: "We track KPIs like traffic, engagement, conversion rates, and ROI using advanced analytics tools — ensuring every campaign delivers measurable impact.",
    imgUrl: ""
  },
  {
    title: "Will SmartGen help develop a marketing strategy?",
    content: "Absolutely. We start with audience research and goal alignment, then craft a custom strategy across platforms to maximize reach and results.",
    imgUrl: ""
  },
  {
    title: "Can SmartGen manage multi-platform campaigns?",
    content: "Yes. We run integrated campaigns across Google, Facebook, Instagram, YouTube, and more — ensuring consistent messaging and performance everywhere your audience lives.",
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
