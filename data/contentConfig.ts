// contentConfig.ts

export const metaData = {
  title: "Aaqib Mehrban",
  description: "Machine Learning Engineer, Full Stack Developer and Geoinformatics Engineer Portfolio",
  image: "/images/logos/web-icon.png",
};

export const profileImage = "/images/logos/profile.png";
export const resumeUrl = "/docs/cv.pdf";

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

export const focusAreas = [
  "Machine Learning",
  "Computer Vision",
  "Full-Stack Development",
  "GIS & BIM",
];

export type Experience = {
  company: string;
  position: string;
  employmentType: string;
  dateRange: string;
  location: string;
  narrative: string;
  skills: string[];
};

export const experience: Experience[] = [
  {
    company: "Make a BIM",
    position: "Machine Learning Engineer",
    employmentType: "Full-time",
    dateRange: "Jul 2024 - Present",
    location: "Helsinki, Uusimaa, Finland · Hybrid",
    narrative:
      "Joined Make a BIM during its early growth phase and helped build the company's technology stack end to end, from its first Next.js and React web application to a redesigned second-generation platform with authentication, user management, and payment integration. On the machine learning side, I designed and owned the complete pipeline — data preparation, augmentation, training, evaluation, and deployment — shipping over 20 production instance segmentation model releases that lifted performance to 74% and improved raster-to-vector floor plan conversion accuracy by roughly 40%. I also optimized backend processing pipelines for up to a 4x speedup, architected the production database and Google Cloud infrastructure, including virtual machines, Artifact Registry, Docker, and background workers, and automated CI/CD through GitLab. Throughout, I worked closely with architects, product stakeholders, and engineers to turn research prototypes into reliable, production-ready AI solutions.",
    skills: ["Python","Flask","React","Next.js","TypeScript","Tailwind CSS","PyTorch","OpenCV","TensorFlow","Computer Vision","Instance Segmentation","Machine Learning","MLOps","Docker","GitLab CI/CD","Google Cloud Platform","PostgreSQL","IFC","BIM","Point Cloud Processing","REST APIs"],
  },
  {
    company: "Fornax Technologies",
    position: "Full Stack Developer",
    employmentType: "Full-time",
    dateRange: "Jan 2023 - Jul 2023",
    location: "Islamabad, Pakistan · On-site",
    narrative:
      "As technical lead for a four-person engineering team, I owned delivery from client requirements through production launch at Fornax Technologies. I served as the primary technical point of contact for clients, translating business needs into actionable specifications and shepherding more than 10 full-lifecycle projects from concept to deployment. Alongside leading the team, I contributed directly to both frontend and backend development to unblock engineers, resolve tricky technical issues, and keep delivery timelines on track. I also established the company's first formal code review process and development guidelines, raising code quality, system performance, and long-term maintainability across every project the team shipped.",
    skills: ["Python","React","Node.js","Twilio","REST APIs","Team Leadership","Client Management","Code Review"],
  },
  {
    company: "MARKT-PILOT",
    position: "Python Developer",
    employmentType: "Part-time",
    dateRange: "Jun 2022 - Dec 2022",
    location: "Remote",
    narrative:
      "As a remote Python developer for MARKT-PILOT, I built and maintained large-scale web scraping and ETL infrastructure to keep product data current in real time. I authored more than 100 scrapers pulling data from a wide range of sources to enrich product listings, and optimized the underlying ETL pipeline for faster, more accurate downstream analysis. Alongside the engineering work, I documented the scraping tools and data workflows in detail, making the system easier for the wider team to use, extend, and maintain.",
    skills: ["Python","Web Scraping","ETL","Software Testing","Automation","Data Pipelines"],
  },
  {
    company: "Horizon Technology",
    position: "Full-Stack & Geospatial Software Engineer",
    employmentType: "Full-time",
    dateRange: "Jan 2021 - May 2022",
    location: "Islamabad, Pakistan · Hybrid",
    narrative:
      "At Horizon Technology I built a high-value defense insights dashboard from the ground up, combining full-stack engineering with geospatial analytics for real-time monitoring of warships and ground radar via satellite imagery. I sourced open-source satellite imagery to train, test, and evaluate several computer vision models for object classification, then wrote the custom inference scripts that integrated them directly into the web application. I developed and optimized scalable data processing pipelines to clean, analyze, and visualize high-resolution spatial and radar datasets for over 10,000 daily active users, and built Land Use / Land Cover classification tools that paired modern web frameworks with GIS software for complex satellite and vector data. Throughout, I worked in a cross-functional engineering team following Git-based workflows, participating in code reviews, sprint planning, and large-scale feature deployments.",
    skills: ["Python","React","Express","Computer Vision","GIS","Remote Sensing","PostGIS","Spatial Analysis","Git"],
  },
  {
    company: "National Disaster Management Authority (NDMA) Pakistan",
    position: "GIS & Remote Sensing Intern",
    employmentType: "Internship",
    dateRange: "May 2020 - Aug 2020",
    location: "Islamabad, Pakistan · On-site",
    narrative:
      "During my internship with Pakistan's National Disaster Management Authority, I applied satellite remote sensing to nationwide flood monitoring and disaster response. I processed and analyzed multi-temporal satellite imagery to map and monitor flood extent and its spatial progression across the country, producing high-resolution flood maps and historical pattern assessments that supported rapid response, risk reduction, and mitigation planning. I also ingested, cleaned, and integrated optical and SAR imagery into disaster management workflows, improving automated water body extraction and inundation analysis for the wider team.",
    skills: ["GIS","Remote Sensing","Python","Satellite Imagery Analysis"],
  },
];

export type Project = {
  slug: string;
  title: string;
  dateRange: string;
  year: string;
  sortYear: number;
  madeAt: string;
  description: string;
  fullDescription: string[];
  highlights?: string[];
  skills: string[];
  url?: string;
  urlLabel?: string;
  stars?: string | null;
  image?: string;
  featured?: boolean;
  gallery?: GalleryItem[];
};

export type GalleryItem = {
  title: string;
  type: "pdf" | "image";
  src: string;
  description?: string;
};

export const projects: Project[] = [
  {
    slug: "make-a-bim-platform",
    title: "Make a BIM — Drawing to BIM Platform",
    dateRange: "Jun 2025 – Present",
    year: "2025—Present",
    sortYear: Infinity,
    madeAt: "Make a BIM",
    description: "AI-based SaaS that converts orthographic floorplan drawings into 3D BIM models.",
    fullDescription: [
      "An AI based SaaS which converts orthographic floorplan drawings into 3D BIM models, combining computer vision, instance segmentation and IFC generation into a single production pipeline.",
    ],
    skills: ["Full-Stack Development","IFC","Next.js","Python","Machine Learning","Computer Vision","PostgreSQL","Google Cloud"],
    url: "https://makeabim.com",
    urlLabel: "Visit Site",
    image: "/images/project/makeabim/createbim.png",
    featured: true,
  },
  {
    slug: "flag-frenzy",
    title: "Flag Frenzy",
    dateRange: "Jan 2026 – Feb 2026",
    year: "2026",
    sortYear: 2026,
    madeAt: "OG Studio",
    description: "Published Android game developed with Unity.",
    fullDescription: [
      "An Android game made in Unity, published on the Google Play Store.",
    ],
    skills: ["Unity","C#","Android","Game Development"],
    url: "https://play.google.com/store/apps/details?id=com.OGStudio.FlagFrenzy&hl=en_US",
    urlLabel: "Google Play",
    stars: null,
    featured: true,
  },
  {
    slug: "aerotactic",
    title: "AeroTactic — Airport Turnaround & Gate Ops",
    dateRange: "Oct 2025 – Oct 2025",
    year: "2025",
    sortYear: 2025,
    madeAt: "Personal Project",
    description: "Real-time airport operations dashboard covering 4,500+ airports, running an in-browser gate-assignment optimizer with zero backend.",
    fullDescription: [
      "A real-time airport operations dashboard covering 4,500+ airports worldwide, built entirely client-side with zero backend or database.",
      "Aggregates live flight tracking (OpenSky), weather (Open-Meteo), and real gate positions (OpenStreetMap/Overpass) to run a custom Mixed-Integer Linear Programming optimizer — solved in-browser — that assigns aircraft to gates while minimizing delay and ground CO₂ emissions.",
      "Designed with a strict real-data-only principle: no fabricated or synthetic data is ever shown; gaps are reported honestly. Deployed on Vercel with zero environment variables or API keys.",
    ],
    skills: ["Next.js","TypeScript","REST APIs","OpenSky API","Open-Meteo","OpenStreetMap / Overpass","Linear Programming Optimization"],
    url: "https://aero-tactic.vercel.app/",
    urlLabel: "Visit Site",
    image: "/images/project/aerotactic/aerotactic.png",
    featured: true,
  },
  {
    slug: "carbon-emissions-helsinki",
    title: "Comparative Analysis of Public Transport Carbon Emissions in the Helsinki Region (2017–2023)",
    dateRange: "Mar 2025 – Sep 2025",
    year: "2025",
    sortYear: 2025,
    madeAt: "Aalto University",
    description: "Master's thesis analyzing changes in public-transport-related carbon emissions in the Helsinki region using GIS-based routing and emissions modelling.",
    fullDescription: [
      "Developed a geospatial data-driven workflow to analyze changes in public transport-related carbon emissions in the Helsinki region between 2017 and 2023.",
      "The project focused on commuting patterns from Espoo to major destinations in Helsinki and combined GIS-based routing, mobility datasets, and emissions modelling to estimate and compare transport-related carbon footprints over time.",
      "The project demonstrates how open geospatial data and computational methods can support evidence-based decision-making for low-carbon urban transportation systems.",
    ],
    highlights: [
      "Designed a Python-based GIS pipeline for route computation, spatial analysis, and emissions estimation.",
      "Implemented routing workflows to identify realistic fastest public transport journeys under travel and walking time constraints.",
      "Analyzed origin-destination travel patterns between Espoo and key Helsinki locations, including Helsinki Central Railway Station, Pasila, and Leppävaara.",
      "Applied data filtering and outlier detection methods to improve reliability of emissions calculations.",
      "Visualized spatial and temporal changes in public transport emissions to support sustainable mobility planning.",
    ],
    skills: ["Python","GIS","Geospatial Data Processing","Routing Algorithms","Spatial Analysis","Emissions Modelling","Data Visualization"],
    url: "https://aaltodoc.aalto.fi/items/31c026a3-04e3-401c-836b-4156bdb69610",
    urlLabel: "Read Thesis",
    image: "/images/project/thesis/carbon-analysis.png",
    featured: true,
  },
  {
    slug: "cartography",
    title: "Cartography & Map Visualizations",
    dateRange: "2019 – 2021",
    year: "2019–2021",
    sortYear: 2021,
    madeAt: "Personal Project",
    description: "A personal collection of cartographic maps and geospatial visualizations, from historical border and conflict mapping to disaster and forest-cover analysis.",
    fullDescription: [
      "A collection of cartographic work produced alongside my GIS studies, spanning historical map reconstruction, disaster response mapping, and remote sensing-based land analysis.",
      "Each map below is viewable directly in the browser — select any item to open it in an in-page viewer rather than downloading a file.",
    ],
    skills: ["GIS","Cartography","QGIS","ArcGIS Pro","Remote Sensing","Spatial Analysis"],
    featured: true,
    gallery: [
      {
        title: "Bombing Missions of the Vietnam War",
        type: "image",
        src: "/cartography/Bombing%20missions%20of%20the%20Vietnam_1.png",
        description: "Cartographic visualization of historical bombing mission data over Vietnam.",
      },
      {
        title: "Pakistan Flood Situation Map (2015)",
        type: "pdf",
        src: "/cartography/Flood%20Situation%20Map%20Pakistan%202015.pdf",
        description: "Flood extent and situational mapping for Pakistan's 2015 flood season.",
      },
      {
        title: "Pakistan–India Border Mapping (1947)",
        type: "pdf",
        src: "/cartography/pakistan%20india%201947%20border%20mapping.pdf",
        description: "Historical cartographic reconstruction of the 1947 Pakistan–India border demarcation.",
      },
      {
        title: "Shangla Forest Detection",
        type: "pdf",
        src: "/cartography/shangla_forest_detection.pdf",
        description: "Forest cover detection and analysis mapping for the Shangla region.",
      },
    ],
  },
  {
    slug: "developer-folio",
    title: "Developer Folio",
    dateRange: "Jul 2024 – Jul 2024",
    year: "2024",
    sortYear: 2024,
    madeAt: "Personal Project",
    description: "This portfolio site — built with Next.js, React and Tailwind CSS.",
    fullDescription: [
      "A developer portfolio built with Next.js, React, and Tailwind CSS. It offers a streamlined setup for showcasing skills, experience, and projects.",
      "The portfolio is customizable, allowing content and style to be modified easily, with responsive design, optimized fonts, and support for About, Projects, Experience, and Social Links sections. Deployed on Vercel.",
    ],
    skills: ["Next.js","React","TypeScript","Tailwind CSS"],
    url: "https://aaqibmehrban.dev",
    urlLabel: "Visit Site",
    image: "/images/project/dev-folio/dev-folio.png",
    featured: false,
  },
  {
    slug: "yt-music-automation",
    title: "YT Music Mobile App Automation",
    dateRange: "Jun 2023 – Jun 2023",
    year: "2023",
    sortYear: 2023,
    madeAt: "Personal Project",
    description: "Multi-device Android automation framework for the YouTube Music app using Python and Appium.",
    fullDescription: [
      "Developed a mobile automation framework for the YouTube Music Android application using Python, Appium, Android SDK, and Selenium-based mobile automation techniques. Demonstrates end-to-end mobile app automation, multi-device execution, and automated user interaction workflows on Android devices.",
    ],
    highlights: [
      "Built an automation framework capable of controlling multiple Android devices simultaneously through Appium.",
      "Implemented parallel execution to run automated tasks across connected devices in real time.",
      "Designed configurable playback workflows with randomized play durations and interaction patterns.",
      "Automated common mobile app actions such as media playback, liking songs, artist navigation, and playlist interaction.",
      "Integrated Android Debug Bridge (ADB) for device detection and management.",
      "Created a scalable configuration-based architecture for customizing automation behavior without code changes.",
    ],
    skills: ["Python","Appium","Android SDK","ADB","Java JDK","Node.js"],
    url: "https://github.com/aaqibmehrban/YT-music-mobile-app-automation-using-appium-python",
    urlLabel: "View on GitHub",
    featured: false,
  },
  {
    slug: "coconut-palm-detection",
    title: "Coconut Palm Tree Detection & Vegetation Health Assessment",
    dateRange: "May 2021 – May 2021",
    year: "2021",
    sortYear: 2021,
    madeAt: "NUST",
    description: "Geospatial deep learning workflow to detect coconut palm trees and assess vegetation health from aerial imagery using ArcGIS Pro.",
    fullDescription: [
      "Implemented an end-to-end geospatial deep learning workflow to automatically detect coconut palm trees and assess vegetation health using high-resolution aerial imagery.",
      "The project involved preparing training datasets, training an object detection model, and applying vegetation analysis techniques to evaluate tree conditions.",
      "Demonstrates the application of artificial intelligence and geospatial technologies for automated vegetation monitoring, precision agriculture, and sustainable land management.",
    ],
    highlights: [
      "Prepared image training samples using ArcGIS Pro Deep Learning tools and aerial plantation imagery.",
      "Created image chips and training datasets for object detection model development.",
      "Trained and applied a Single Shot Detector (SSD) deep learning model to identify coconut palm trees from aerial imagery.",
      "Refined predictions using Non-Maximum Suppression to remove duplicate detections.",
      "Calculated the Visible Atmospherically Resistant Index (VARI) to estimate vegetation health from RGB imagery.",
      "Applied spatial analysis techniques including feature extraction, buffering, and zonal statistics to associate vegetation health indicators with individual detected trees.",
    ],
    skills: ["Deep Learning","ArcGIS Pro","Remote Sensing","GIS"],
    image: "/images/project/palm-tree/training_samples_coconut.png",
    featured: false,
  },
  {
    slug: "reddit-text-to-video-generator",
    title: "Automatic Reddit Text-to-Video Generator & YouTube Uploader",
    dateRange: "Feb 2020 – Feb 2020",
    year: "2020",
    sortYear: 2020,
    madeAt: "Personal Project",
    description: "Automation system that converts Reddit posts into narrated, published YouTube videos.",
    fullDescription: [
      "Developed an end-to-end content automation system in Python that transforms Reddit discussions into narrated videos and streamlines the publishing workflow for YouTube.",
      "Automates content collection, text-to-speech generation, video creation, thumbnail generation, and YouTube uploads, significantly reducing manual effort in the content production process.",
    ],
    highlights: [
      "Automated extraction of post titles, content, and top comments from Reddit using API integration.",
      "Generated narrated videos using Text-to-Speech (TTS) technology with support for multiple voice options.",
      "Created videos from either Reddit content or custom user-provided scripts, with customizable backgrounds, fonts, and visual themes.",
      "Integrated background music and automated thumbnail generation.",
      "Built a YouTube upload pipeline using the YouTube Data API for automated publishing.",
    ],
    skills: ["Python","Reddit API (PRAW)","Text-to-Speech","YouTube Data API","OpenCV","Automation"],
    stars: "73",
    url: "https://github.com/aaqibmehrban/Automatic-Reddit-text-to-Video-Generator-and-youtube-uploader",
    urlLabel: "View on GitHub",
    image: "/images/project/redit-bot/reddit-bot.png",
    featured: true,
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System (C++)",
    dateRange: "Dec 2018 – Dec 2018",
    year: "2018",
    sortYear: 2018,
    madeAt: "NUST",
    description: "Console-based hospital management system built with C++, OOP and file handling.",
    fullDescription: [
      "Developed a console-based Hospital Management System in C++ to streamline patient record management and medical slip generation.",
      "The application demonstrates the use of core object-oriented programming concepts, data structures, file handling, and modular programming techniques.",
    ],
    highlights: [
      "Patient registration and record management.",
      "Automated medical slip generation with date and timestamp information.",
      "Storage and retrieval of patient data using file handling.",
      "Organized system architecture using classes, structures, and functions.",
      "Persistent data storage to maintain records between program executions.",
    ],
    skills: ["C++","OOP","File Handling"],
    url: "https://github.com/aaqibmehrban/Hospital-management-system-c-",
    urlLabel: "View on GitHub",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const archivedProjects = [...projects].sort((a, b) => b.sortYear - a.sortYear);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

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
