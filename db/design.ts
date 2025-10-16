


type content = {
  title: string,
  content: string,
  imgUrl: string,
  subheading?: string
}


export function heroContent () {
  const heroContent: content[] = [
  {
    title: " Graphics Design & visual branding",
    content: "SmartGen delivers impactful graphic design and visual branding that captivates, communicates, and converts. From logos to campaign assets, we craft emotionally resonant visuals that elevate brand identity and drive digital engagement.",
    imgUrl: "/images/Logo.svg"
  }];

  return heroContent;
}

export function objectiveContent () {

const objectiveContent: content[] = [
  {
    title: "How we do Designing for Brands",
    content: "At SmartGen, brand design begins with deep research and emotional insight. We craft visual identities that reflect your mission, resonate with your audience, and stand out in competitive markets. From logos to full brand systems, our design process blends strategy, storytelling, and aesthetics — ensuring every element builds trust, recognition, and lasting impact.",
    subheading: "SmartGen crafts emotionally resonant graphic designs that define brand identity, inspire trust, and drive engagement across digital and print platforms.",
    imgUrl: "/images/MotionGraphics.png"
  }
];

return objectiveContent;
}

export function servicesContent () {

const servicesContent: content[] = [
  {
    title: "Logo and Branding Design",
    content: "SmartGen creates distinctive logo and branding designs that reflect your mission, values, and market positioning. We blend strategy, emotion, and aesthetics to craft memorable identities that build trust and recognition. From typography to color systems and brand guidelines, every element is designed to resonate with your audience and elevate your presence across digital and physical touchpoints.",
    imgUrl: "fi-brands-illustrator"
  },
  {
    title: "Poster and Banner Design",
    content: "SmartGen designs eye-catching posters and banners that amplify your brand message across digital and physical platforms. Whether for events, promotions, or campaigns, our visuals blend bold typography, strategic layout, and emotional impact to capture attention and drive engagement. Each design is tailored to your goals, ensuring clarity, consistency, and high conversion across every touchpoint.",
    imgUrl: "fi-brands-photoshop"
  },
  {
    title: "Motion graphics Design",
    content: "SmartGen creates compelling motion graphics that bring your brand to life through animation, storytelling, and visual rhythm. From explainer videos to social media reels and UI animations, we blend design, timing, and emotion to deliver dynamic content that captivates audiences, enhances engagement, and communicates complex ideas with clarity and style across platforms.",
    imgUrl: "fi-brands-after-effects"
  }
];

return servicesContent;
}

export function whyUsContent () {
const whyUsContent: content[] = [
  {
    title: "Emotionally Resonant Branding",
    content: "We design logos and brand assets that connect deeply with your audience and reflect your mission with clarity and style",
    imgUrl: ""
  },
  {
    title: "Premium Visual Aesthetics",
    content: "Our designs feature modern layouts, soft shadows, gradients, and responsive elements — tailored for digital excellence and conversion.",
    imgUrl: ""
  },
  {
    title: "Strategic Consistency",
    content: "From typography to color systems, we ensure every visual element aligns with your brand voice across platforms and campaigns.",
    imgUrl: ""
  },
  {
    title: "Conversion-Focused Design",
    content: "We create graphics that not only look stunning but also guide users toward action boosting engagement, leads, and loyalty",
    imgUrl: ""
  }
];

return whyUsContent;
}

export function FaqContent () {

const FaqContent: content[] = [
  {
    title: "What types of graphic design services does SmartGen offer?",
    content: "We provide logo design, branding kits, posters, banners, motion graphics, social media creatives, and UI assets — all crafted to elevate your brand’s visual identity and engagement",
    imgUrl: ""
  },
  {
    title: "How does SmartGen ensure brand consistency in design?",
    content: "We follow strategic brand guidelines, color systems, typography rules, and emotional tone to ensure every visual element aligns with your brand’s identity across platforms.",
    imgUrl: ""
  },
  {
    title: "Do you offer motion graphics and animated content?",
    content: "Yes. We create dynamic motion graphics for explainer videos, social media reels, and UI animations — designed to captivate, inform, and boost engagement.",
    imgUrl: ""
  },
  {
    title: "Can SmartGen help with visual storytelling?",
    content: "Absolutely. We blend design, emotion, and narrative to craft visuals that communicate your brand’s message clearly and memorably — driving deeper audience connection and trust.",
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
