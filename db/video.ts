


type content = {
  title: string,
  content: string,
  imgUrl: string,
  subheading?: string
}


export function heroContent () {
  const heroContent: content[] = [
  {
    title: "Video Shoot and editing",
    content: "SmartGen offers professional video shooting and editing services that capture your brand story with clarity, emotion, and impact — perfect for campaigns, testimonials, product showcases, and social media engagement.",
    imgUrl: "/images/Logo.svg"
  }];

  return heroContent;
}

export function objectiveContent () {

const objectiveContent: content[] = [
  {
    title: "How we Shoot and edit videos for clients",
    content: "At SmartGen, our video production starts with understanding your brand story and campaign goals. We plan scripts, scenes, and visuals that resonate emotionally. During the shoot, we use professional equipment and lighting to capture high-quality footage. In editing, we refine visuals, add motion graphics, sound design, and branding elements — ensuring every frame aligns with your message and delivers impact across platforms like social media, websites, and presentations.",
    subheading: "SmartGen captures brand stories through cinematic video shoots and expert editing — delivering high-impact content for web, social, and campaigns.",
    imgUrl: "/images/VideoEditing.png"
  }
];

return objectiveContent;
}

export function servicesContent () {

const servicesContent: content[] = [
  {
    title: "Pre Production",
    content: "SmartGen’s video pre-production process begins with strategic planning — understanding your goals, audience, and brand message. We develop scripts, storyboards, shot lists, and visual styles that align with your campaign. Every detail, from location scouting to talent coordination, is handled with precision to ensure a smooth shoot and impactful storytelling that resonates across platforms.",
    imgUrl: "fi-rs-script"
  },
  {
    title: "Video Shoot",
    content: "SmartGen’s video shoot process is designed for precision and impact. We use professional-grade cameras, lighting, and audio equipment to capture high-quality footage that aligns with your brand story. Our team directs scenes with clarity and emotion, ensuring every shot supports your message. Whether on-location or in-studio, we focus on visual storytelling that engages viewers and sets the stage for powerful post-production editing.",
    imgUrl: "fi-rs-camera-movie"
  },
  {
    title: "Video editing",
    content: "SmartGen’s video post-production process transforms raw footage into polished, high-impact content. We edit scenes for clarity and emotion, enhance visuals with color grading, and integrate motion graphics, sound design, and branded elements. Every frame is refined to match your brand tone and campaign goals — ensuring the final video captivates viewers, communicates effectively, and performs across platforms like social media, websites, and presentations.",
    imgUrl: "fi-brands-premiere"
  }
];

return servicesContent;
}

export function whyUsContent () {
const whyUsContent: content[] = [
  {
    title: "Strategic Storytelling",
    content: "We craft emotionally resonant narratives aligned with your brand goals — ensuring every video connects deeply with your audience.",
    imgUrl: ""
  },
  {
    title: "Professional Equipment & Crew",
    content: "Our team uses high-end cameras, lighting, and audio gear to capture crisp, cinematic footage in any setting.",
    imgUrl: ""
  },
  {
    title: "Seamless Editing & Motion Graphics",
    content: "From color grading to branded animations, we polish every frame to deliver visually stunning, platform-ready content.",
    imgUrl: ""
  },
  {
    title: "Multi-Platform Optimization",
    content: "Videos are tailored for websites, social media, ads, and presentations — maximizing reach, engagement, and conversion across channels.",
    imgUrl: ""
  }
];

return whyUsContent;
}

export function FaqContent () {

const FaqContent: content[] = [
  {
    title: " What types of videos does SmartGen produce?",
    content: "We create brand films, product showcases, testimonials, explainer videos, social media reels, and campaign content — all tailored to your goals and audience.",
    imgUrl: ""
  },
  {
    title: "How involved is SmartGen in the video planning process?",
    content: "We handle everything from concept development and scripting to storyboarding and location scouting — ensuring your video is strategically aligned and production-ready.",
    imgUrl: ""
  },
  {
    title: "What editing services are included?",
    content: "Our editing includes scene refinement, color grading, sound design, motion graphics, and branded overlays — delivering polished, platform-optimized content that drives engagement.",
    imgUrl: ""
  },
  {
    title: "Can SmartGen optimize videos for different platforms?",
    content: "Absolutely. We tailor formats, aspect ratios, and visual styles for websites, Instagram, YouTube, Facebook, and presentations — maximizing reach and impact.",
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
