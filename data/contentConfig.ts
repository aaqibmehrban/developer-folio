// contentConfig.ts

export const metaData = {
    title: "Aaqib Mehrban",
    description: "Developer Portfolio of Aaqib Mehrban",
    image: "/images/logos/web-icon.png",
}


export const profileImage = "/images/logos/profile.png"; 

export const headerData = {
  name: "Aaqib Mehrban",
  title: "FullStack Developer | GIS Engineer",
  location: "Espoo, Finland",
  locationIcon: "FaMapMarkerAlt",
  description: "I build pixel-perfect, engaging, and accessible digital GIS experiences.",
  buttons: [
    {
      text: "Book a Meeting",
      href: "https://calendly.com/rajaaaqib775/",
      className: "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
      isDownloadButton: false,
    },
    {
      text: "Download CV",
      href: "/docs/cv.pdf",
      className: "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
      isDownloadButton: true,
    },
    {
      text: "Request a Service",
      href: "https://wa.me/+358417216858",
      className: "shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear inline-block",
      isDownloadButton: false,
    },
  ],
};

export const skills = [
  "Python", "Javascript", "TypeScript", "HTML5", "CSS3", "MUI", "Shadcn",
  "Tailwind", "React.js", "Next.js", "JQuery", "Node.js", "Express.js", "Django",
  "Flask", "MySQL", "Mongodb", "PostgreSQL", "Docker", "Git", "Github", "Jest",
  "Selenium", "Puppeteer", "Appium", "RESTful API", "Postman", "API Testing",
  "SQA", "Graphql", "Cloud Services", "Redis", "Vite", "Linux", "Slack", "Trello", "Figma"
];

export const education = [
  {
    degree: "Masters in Geoinformatics Engineering",
    school: "Aalto University",
    location: "Finland",
  },
  {
    degree: "Bachelors in Geoinformatics Engineering",
    school: "National University of Science & Technology",
    location: "Pakistan",
  },
];


export const socialLinks = [
    { href: "https://github.com/aaqibmehrban", icon: "FaGithub" },
    { href: "https://www.linkedin.com/in/aaqibmehrban", icon: "FaLinkedin" },
    { href: "https://x.com/rajaaaqib775", icon: "FaSquareXTwitter" },
    { href: "https://instagram.com/aaqibmehrban", icon: "FaInstagram" },
    { href: "mailto:rajaaaqib775@gmail.com", icon: "FaEnvelope" },
    { href: "https://fiverr.com/aaqibmehrban", icon: "TbBrandFiverr" },
    { href: "https://www.upwork.com/freelancers/~0181468059aaa92204?mp_source=share", icon: "FaSquareUpwork" },
  ];

export const aboutText = `
  From the beginning of my academic journey in Geoinformatics Engineering at the National University of Sciences and Technology (NUST), 
  I have been passionate about solving real-world problems through technology. My early foray into freelancing allowed me to work with over 
  100 clients globally, honing my skills in writing extensions for QGIS, data visualization, image processing, and structuring databases in PostgreSQL.

  Fast-forward to today, and I have had the privilege of building software across various domains, including advertising, start-ups, 
  large corporations, and digital product studios. Currently, as a Full Stack Developer, I lead a team in designing scalable and efficient 
  products, leveraging advanced technologies to enhance performance and reduce maintenance costs.
`;

export const experience = [
  {
    date: "Jan 2023 - Jul 2023",
    position: "Full Stack Developer at Fornax Technologies",
    responsibilities: [
      "Led a team of 4 Developers, ensuring effective task management and client collaboration for timely, high-quality outputs.",
      "Designed scalable, efficient products leveraging advanced technologies, resulting in a 20% improvement in performance and a 26.6% reduction in maintenance costs.",
      "Established structured code review processes and guidelines for the company."
    ],
    skills: ["JavaScript", "TypeScript", "React"]
  },
  {
    date: "Jun 2022 - Dec 2022",
    position: "Python Developer at Marktpilot",
    responsibilities: [
      "Created 100+ web scrapers for real-time data collection, enriching product features with current information from diverse sources.",
      "Optimized an ETL data pipeline in Python, accelerating data analysis with improved accuracy and speed.",
      "Authored detailed documentation for web scrapers and data tools, enhancing usability and maintenance."
    ],
    skills: ["Python", "Web Scraping", "Data Analysis"]
  },
  {
    date: "Jun 2021 - May 2022",
    position: "Full Stack Developer at Horizon Technologies",
    responsibilities: [
      "Worked as a junior dev for a large team, leading full-stack development and integrating modern UI and backend tech, on a project with a user base of around 10,000 users per day.",
      "Implemented robust data processing and analysis pipelines, enhancing the platform's capabilities in handling and visualizing spatial data.",
      "Learned to work as a team and contributed to 3 big GIS projects of a company."
    ],
    skills: ["JavaScript", "Node.js", "GIS"]
  }
];

export const projects = [
    {
      title: "Web Developer Portfolio",
      description: "An Elegant Web Developer Portfolio build using modern tech like Next, React, Tailwind CSS, Aceternity Components and Deployed with help of Vercel. ",
      url: "https://github.com/aaqibmehrban/developer-folio",
      stars: null,
      skills: ["React", "Next","Tailwind CSS" ,"Aceternity UI", "Vercel"],
      image: "/images/github-project/dev-folio.png",
    },
    {
      title: "Reddit to Youtube Video Bot",
      description: "A Desktop app that can automate the process of finding posts related to keyword on reddit and then create video and text-to-speech from it and upload on youtube.",
      url: "https://github.com/aaqibmehrban/Automatic-Reddit-text-to-Video-Generator-and-youtube-uploader",
      stars: "61",
      skills: ["Python", "Selenium", "Praw API", "Google Translator"],
      image: "/images/github-project/reddit-bot.webp",
    },
    // Add more projects here
  ];

export const posts = `
  Posts details...
`;


export const footerData = {
    text: [
      'Loosely designed in Figma and coded in Visual Studio Code by yours truly.',
      'Built with Next.js and Tailwind CSS, deployed with Vercel.',
      'All text is set in the Inter typeface.',
    ],
    socialLinks: [
      { href: 'https://github.com/aaqibmehrban', icon: 'FaGithub' },
      { href: 'https://www.linkedin.com/in/aaqibmehrban', icon: 'FaLinkedin' },
      { href: 'https://x.com/rajaaaqib775', icon: 'FaSquareXTwitter' },
      { href: 'https://instagram.com/aaqibmehrban', icon: 'FaInstagram' },
      { href: 'mailto:rajaaaqib775@gmail.com', icon: 'FaEnvelope' },
      { href: 'https://fiverr.com/aaqibmehrban', icon: 'TbBrandFiverr' },
      { href: 'https://www.upwork.com/freelancers/~0181468059aaa92204?mp_source=share', icon: 'FaSquareUpwork' },
    ],
  };