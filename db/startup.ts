


type content = {
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
export function heroContent () {
  const heroContent: content[] = [
  {
    title: " SmartGen Startup Package",
    content: "Launch your brand with confidence, clarity, and conversion-focused digital assets — all in startup package.",
    imgUrl: "/images/Logo.svg"
  }];

  return heroContent;
}

export function objectiveContent () {

const objectiveContent: content[] = [
  {
    title: "Who Is This For?",
    content: "Startups, entrepreneurs, and small businesses ready to make a bold digital debut. Whether you're launching a product, service, or personal brand — SmartGen equips you with everything needed to stand out, build trust, and grow fast.",
    subheading: "SmartGen startup package is designed for new startups, businesses with low costing and get exactly what needs for an early stage",
    imgUrl: "/images/Ads.png"
  }
];

return objectiveContent;
}

export function servicesContent () {

const servicesContent: content[] = [
  {
    title: " Brand Identity Design",
    content: "Craft a brand that resonates, converts, and lasts:",
    imgUrl: "fi-rs-magic-wand",
    lists: [
      {list: "Brand discovery session"},        
      {list: "Mission, vision, and positioning refinemen"},
      {list: "Logo design (primary + variations)"},
      {list: "Color palette and typography system"},
      {list: "Brand guidelines PDF"},
      {list: "Business card and stationery design"}
    ]
  },
  {
    title: "Digital Marketing & Strategy",
    content: "Get discovered, followed, and remembered:",
    imgUrl: "fi-rs-ad-paid",
    lists: [
        {list: "SEO keyword research and on-page optimization"},
        {list: "Google Business Profile setup"},
        {list: "Facebook & Instagram page setup"},
        {list: "Initial content calendar (2 weeks)"},
        {list: "Paid ad strategy blueprint (Google/Facebook)"},
        {list: "Email marketing setup (Mailchimp or Brevo)"}
    ]
  },
  {
    title: "Graphics & Motion graphics",
    content: "Visuals that build trust and drive action:",
    imgUrl: "fi-rs-vector-alt",
    lists: [
        {list: "Social media profile and cover design"},
        {list: "5 branded Instagram/Facebook post templates"},
        {list: "Promotional flyer or brochure design"},
        {list: "Pitch deck or presentation template"},
        {list: "Email signature design"},
        {list: "Launch announcement graphics"}
    ]
  },
  {
    title: "Technical Support",
    content: "Launch with zero stress:",
    imgUrl: "fi-rs-suggestion",
    lists: [
        {list: "Domain and hosting guidance"},
        {list: "DNS, SPF, DKIM setup for email trust"},
        {list: "Analytics integration (Google Analytics, Meta Pixel)"},
        {list: "30-day post-launch support"},
        {list: "Training session on managing your website and assets"},
        {list: "Paid ad campaign management"}
    ]
  }
];

return servicesContent;
}

export function packSummaryContent () {

const packSummaryContent: packageContent[] = [
  {
    name: "Brand Identity Design",
    QTY: 1
  },
  {
    name: "post Graphics",
    QTY: 10
  },
  {
    name: "SEO & Marketing Setup",
    QTY: 4
  },
  {
    name: "Animated Ad making",
    QTY: 3
  },
  {
    name: "Landing page",
    QTY: 1
  }
];

return packSummaryContent;
}

export function whyUsContent () {
const whyUsContent: content[] = [
  {
    title: "All-in-One Launch Solution",
    content: "From branding and website to video and marketing — everything you need to launch is bundled into one seamless, conversion-ready package",
    imgUrl: ""
  },
  {
    title: "Emotionally Resonant Storytelling",
    content: "We don’t just design — we craft narratives. Your brand story is told through visuals, words, and video that connect and inspire action.",
    imgUrl: ""
  },
  {
    title: "Scalable, Secure Infrastructure",
    content: "Built with future growth in mind. Our backend setup (Firebase, Supabase, or custom) ensures your platform is fast, secure, and ready to expand.",
    imgUrl: ""
  },
  {
    title: "Marketing That Drives Results",
    content: "We set up SEO, social media, and ad strategies that get you found, followed, and funded — with measurable impact from day one.",
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
