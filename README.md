# DEV-NEXT-FOLIO

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Using Fonts](#using-fonts)
- [How to Add Your Data](#how-to-add-your-data)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/dev-next-folio.git
cd dev-next-folio
```

Then, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

Here's an overview of the project structure:

```
dev-next-folio/
├── .next/                      # Next.js build output
├── app/                        # Main application folder
│   ├── globals.css             # Global CSS file
│   ├── layout.tsx              # Layout component for the app
│   └── page.tsx                # Main page component
├── components/                 # Reusable components
│   ├── ui/                     # UI-specific components
│   │   ├── Spotlight.tsx
│   │   ├── tabs.tsx
│   │   └── tailwindcss-buttons.tsx
│   ├── DownloadButton.tsx      # Download button component
│   ├── Education.tsx           # Education component
│   ├── Footer.tsx              # Footer component
│   ├── Header.tsx              # Header component
│   ├── Layout.tsx              # Main layout component
│   ├── LightEffect.tsx         # Light effect component
│   ├── Skills.tsx              # Skills component
│   ├── SocialLinks.tsx         # Social links component
│   └── TabsData.tsx            # Tabs data component
├── data/                       # Data configuration folder
│   └── contentConfig.ts        # Configuration file for content
├── public/                     # Public assets (images, icons, etc.)
│   ├── favicon.ico
│   └── images/
├── utils/                      # Utility functions
│   └── cn.ts                   # Utility function for class names
├── .eslintrc.json              # ESLint configuration
├── .gitattributes              # Git attributes file
├── .gitignore                  # Git ignore file
├── LICENSE                     # License file
├── next-env.d.ts               # Next.js environment types
├── next.config.mjs             # Next.js configuration
├── package-lock.json           # Lock file for npm
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── README.md                   # Project README file
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `.next` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`
Starts the application in production mode. Make sure to build the application before starting.

## Using Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font. The font configuration is located in `app/layout.tsx`.

## How to Add Your Data

To customize the content displayed on your site, simply edit the `contentConfig.ts` file located in the `data` directory.

Here is an example structure of `contentConfig.ts`:

```typescript
export const aboutText = [
  "From an early age, I was a tech enthusiast...",
  "During my academic journey, I freelanced...",
  "Today, as a Full Stack Developer, I lead a team..."
];

export const experience = [
  {
    date: "Jan 2023 - Jul 2023",
    position: "Full Stack Developer at Fornax Technologies",
    responsibilities: [
      "Led a team of 4 Developers...",
      "Designed scalable, efficient products...",
      "Established structured code review processes..."
    ],
    skills: ["JavaScript", "TypeScript", "React"]
  },
  // Add more experiences here
];

export const projects = [
  {
    title: "Web Developer Portfolio",
    description: "An Elegant Web Developer Portfolio build using modern tech...",
    url: "https://github.com/aaqibmehrban/developer-folio",
    stars: null,
    skills: ["React", "Next", "Tailwind CSS", "Aceternity UI", "Vercel"],
    image: "/images/github-project/dev-folio.png"
  },
  // Add more projects here
];

export const posts = [
  {
    year: "2020",
    title: "Integrating Algolia Search with WordPress Multisite",
    url: "https://example.com",
    image: "/images/posts/algolia-search.png"
  },
  // Add more posts here
];

export const socialLinks = [
  { href: "https://github.com/aaqibmehrban", icon: "FaGithub" },
  { href: "https://www.linkedin.com/in/aaqibmehrban", icon: "FaLinkedin" },
  { href: "https://x.com/rajaaaqib775", icon: "FaSquareXTwitter" },
  { href: "https://instagram.com/aaqibmehrban", icon: "FaInstagram" },
  { href: "mailto:rajaaaqib775@gmail.com", icon: "FaEnvelope" },
  { href: "https://fiverr.com/aaqibmehrban", icon: "TbBrandFiverr" },
  { href: "https://www.upwork.com/freelancers/~0181468059aaa92204?mp_source=share", icon: "FaSquareUpwork" }
];

export const footerData = {
  text: [
    "Designed in Figma and coded in Visual Studio Code.",
    "Built with Next.js and Tailwind CSS, deployed with Vercel.",
    "All text is set in the Inter typeface."
  ]
};

export const metaData = {
  title: "Aaqib Mehrban",
  description: "Developer Portfolio of Aaqib Mehrban",
  icon: "/public/web-icon.png" // Add your icon path here
};
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - Your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are what make the open source community such an amazing place to be, learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
