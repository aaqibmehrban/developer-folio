// contentConfig.ts

export const metaData = {
  title: "Aaqib Mehrban",
  description: "Machine Learning Engineer, Full Stack Developer and Geoinformatics Engineer Portfolio",
  image: "/images/logos/web-icon.png",
};

export const profileImage = "/images/logos/profile.png";

export const headerData = {
  name: "Aaqib Mehrban",
  title: "Machine Learning Engineer | Full Stack Developer | Geoinformatics Engineer",
  location: "Espoo, Finland",
  locationIcon: "FaMapMarkerAlt",
  description:
    "Building AI-powered computer vision, GIS, BIM, and full stack applications from research to production.",
  buttons: [
    {
      text: "Book a Meeting",
      href: "https://calendly.com/rajaaaqib775/",
      className: "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
      isDownloadButton: false,
    },
    {
      text: "Download Resume",
      href: "/docs/cv.pdf",
      className: "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
      isDownloadButton: true,
    },
    {
      text: "Request a Service",
      href: "https://wa.me/+358417216858",
      className: "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
      isDownloadButton: false,
    },
  ],
};

export const skills = [
"Python","TypeScript","JavaScript","React","Next.js","Tailwind CSS","Flask","Node.js","PostgreSQL","Docker","Google Cloud","Git","GitLab","REST APIs","PyTorch","TensorFlow","OpenCV","Computer Vision","Machine Learning","Deep Learning","Instance Segmentation","Image Processing","Point Cloud Processing","GIS","Remote Sensing","Spatial Analysis","IFC","BIM","PostGIS","Linux","Redis","GraphQL","Jest","Selenium","Appium","Unity","C#"
];

export const education=[
{degree:"Master of Science in Geoinformatics",school:"Aalto University",location:"Finland"},
{degree:"Bachelor of Geoinformatics Engineering",school:"National University of Sciences and Technology (NUST)",location:"Pakistan"}
];

export const aboutText=[
"I am a Machine Learning Engineer and Full Stack Developer with a Master's degree in Geoinformatics from Aalto University.",
"My work combines AI, Computer Vision, GIS, BIM and cloud technologies to build production-ready software.",
"I enjoy taking ideas from research into scalable products by building machine learning pipelines, cloud infrastructure and modern web applications."
];

export const experience=[{
date:"Jul 2024 - Present",
position:"Machine Learning Engineer at Make a BIM",
responsibilities:[
"Built the company's first web application using Next.js, React and Tailwind CSS.",
"Developed backend APIs and services using Python and Flask.",
"Designed complete ML pipelines from dataset preparation to deployment.",
"Released more than 20 production instance segmentation models reaching 74% overall model performance.",
"Improved raster-to-vector floor plan conversion accuracy by approximately 40%.",
"Optimized backend processing pipelines by up to 4x.",
"Managed Google Cloud infrastructure, Docker, PostgreSQL and CI/CD.",
"Collaborated with architects and stakeholders to deliver production AI solutions."
],
skills:["Python","PyTorch","Computer Vision","Machine Learning","React","Next.js","Flask","Google Cloud"]
},
{
date:"Jan 2023 - Jul 2023",
position:"Full Stack Developer at Fornax Technologies",
responsibilities:[
"Led a team of developers.",
"Designed scalable web applications.",
"Established structured code review practices."
],
skills:["React","TypeScript","Node.js"]
},
{
date:"Jun 2022 - Dec 2022",
position:"Python Developer at Marktpilot",
responsibilities:[
"Developed large-scale web scraping solutions.",
"Optimized ETL pipelines.",
"Created technical documentation."
],
skills:["Python","Web Scraping","ETL"]
}
];

export const projects=[
{
title:"Flag Frenzy",
description:"Published Android game developed with Unity.",
url:"https://play.google.com/store/apps/details?id=com.OGStudio.FlagFrenzy&hl=en_US",
stars:null,
skills:["Unity","C#","Android"],
image:"/images/github-project/flag-frenzy.png"
},
{
title:"Comparative Analysis of Public Transport Carbon Emissions",
description:"Master's thesis analyzing carbon emissions in the Helsinki region using GIS, routing algorithms and spatial analysis.",
url:"https://aaltodoc.aalto.fi/items/31c026a3-04e3-401c-836b-4156bdb69610",
stars:null,
skills:["Python","GIS","Spatial Analysis"],
image:"/images/github-project/carbon-analysis.png"
},
{
title:"YouTube Music Mobile Automation",
description:"Android automation framework built with Python and Appium supporting multi-device execution.",
url:"https://github.com/aaqibmehrban/YT-music-mobile-app-automation-using-appium-python",
stars:null,
skills:["Python","Appium","ADB"],
image:"/images/github-project/ytmusic.png"
},
{
title:"Automatic Reddit Text-to-Video Generator",
description:"Python application that automatically converts Reddit posts into narrated YouTube videos.",
url:"https://github.com/aaqibmehrban/Automatic-Reddit-text-to-Video-Generator-and-youtube-uploader",
stars:"61",
skills:["Python","Automation","REST APIs"],
image:"/images/github-project/reddit-bot.webp"
},
{
title:"Hospital Management System",
description:"Console-based hospital management system built with C++ and object-oriented programming.",
url:"https://github.com/aaqibmehrban/Hospital-management-system-c-",
stars:null,
skills:["C++","OOP"],
image:"/images/github-project/hospital.png"
}
];

export const repoLink="https://github.com/aaqibmehrban?tab=repositories";

export type Post = {
title: string;
url: string;
year: string;
thumbnail: string;
};

export const posts: Post[] = [];

export const footerData={
text:[
"Designed in Figma and built with Visual Studio Code.",
"Powered by Next.js and Tailwind CSS.",
"Deployed on Vercel."
],
socialLinks:[
{href:"https://github.com/aaqibmehrban",icon:"FaGithub"},
{href:"https://www.linkedin.com/in/aaqibmehrban",icon:"FaLinkedin"},
{href:"https://x.com/rajaaaqib775",icon:"FaSquareXTwitter"},
{href:"https://instagram.com/aaqibmehrban",icon:"FaInstagram"},
{href:"mailto:rajaaaqib775@gmail.com",icon:"FaEnvelope"},
{href:"https://fiverr.com/aaqibmehrban",icon:"TbBrandFiverr"},
{href:"https://www.upwork.com/freelancers/~0181468059aaa92204?mp_source=share",icon:"FaSquareUpwork"}
]
};
