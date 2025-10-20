


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
    title: " SmartGen Business Package",
    content: "Grow Big Your brand with confidence, clarity, and conversion-focused digital assets — all in  tp grow big with Our Business package.",
    imgUrl: "/images/Logo.svg"
  }];

  return heroContent;
}

export function objectiveContent () {

const objectiveContent: content[] = [
  {
    title: "Who Is This For?",
    content: "Startups, entrepreneurs, and businesses ready to make a bold digital ebgagement. Whether you're launching a product, service, or personal brand — SmartGen equips you with everything needed to stand out, build trust, and grow fast.",
    subheading: "SmartGen Business package is designed for startups, businesses with Best services of exactly what needs for Your Brand",
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
    title: " Video Production & Editing",
    content: "Tell your story with cinematic impact",
    imgUrl: "fi-rs-film",
    lists: [
        {list: "Pre-production planning: script, storyboard, shot list"},
        {list: "On-location or studio shoot (1 day)"},
        {list: "Professional-grade camera, lighting, and audio"},
        {list: "Post-production editing: color grading, sound design, motion graphics"},
        {list: "Final video optimized for web, social media, and presentations"},
        {list: "30-second teaser + 1-minute brand film"}
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
    name: "Video Production & Editing",
    QTY: 5
  },
  {
    name: "post Graphics",
    QTY: 18
  },
  {
    name: "SEO & Marketing Setup",
    QTY: 8
  },
  {
    name: "Animated Ad making",
    QTY: 6
  },
  {
    name: "Landing page",
    QTY: 3
  }
];

return packSummaryContent;
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
