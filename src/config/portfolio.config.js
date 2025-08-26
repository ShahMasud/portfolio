// Portfolio Configuration File
// Edit this file to customize the portfolio with your own details
import zimo from '../assets/zimo.png';
import dcs from '../assets/dcs.png';
import luv from '../assets/luv.png';
import hopiumbet from '../assets/hopiumbet.png';
import kerks from '../assets/kerks.png';
import reign from '../assets/reign-1.png';
import tiger from '../assets/empireoftiger.png';
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "S. me",
    fullName: "Shah Masood",
    title: "Frontend Engineer",
    tagline: "Crafting modern web experiences with React & Next.js, seamlessly integrating backend APIs and AI-powered features.",
    email: "shahmasood.dev@gmail.com",
    phone: "+92 331 5806780",
    location: "Islamabad, Pakistan",
    
    // Social Links
    social: {
      github: "https://github.com/ShahMasud",
      linkedin: "http://www.linkedin.com/in/shah-masood",
      twitter: "", // Optional
      instagram: "", // Optional
    }
  },

  // About Section
  about: {
    description: `I'm a passionate Frontend Engineer specializing in React and Next.js, with strong expertise in backend API integration and implementing AI-powered features on the web. 
  I graduated in 2021 from the Institute of Management Sciences, Peshawar, and have worked with international clients, including Cisco, during my time at Nets International. 
  I love crafting elegant, user-friendly solutions to complex problems and delivering high-performance applications that make an impact.`,
    
    // Education
    education: {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Institute of Management Sciences, Peshawar",
      graduationDate: "June 2021",
      coursework: "Data Structures, Algorithms, Web Development, Database Systems, Software Engineering"
    },

    // Stats
    stats: [
      { number: "40+", label: "Projects Completed" },
      { number: "4+", label: "Years Experience" },
      { number: "100%", label: "Client Satisfaction" }
    ]
  },

  // Skills Section
  skills: {
    "Languages": ["JavaScript", "TypeScript", "C++"],
    "Frontend": ["React.js", "Next.js", "AI Integration", "React Flow", "Material UI", "Tailwind CSS", "Ant Design" , "Bootstrap", "Framer Motion", "SCSS"],
    // "Backend": ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
    "Blockchain": ["Wallet Integration", "Backend Integration"],
    "Databases": ["MongoDB", "SQLite", "SQL Server"],
    "Tools & Technologies": ["VS Code", "Git", "GitHub", "NPM", "AWS", "Postman"]
  },

  // Projects Section
  projects: [
    {
      title: "ZIMO Pro",
      description: "Contributed to the frontend development of a marketplace platform for buying, selling, and renting properties, cars, and tickets. Built responsive interfaces with React.js and Next.js, while collaborating on planned blockchain features for secure transactions. (Project still in development)",
      techStack: ["Next.js", "Tailwind CSS", "Frontend Architecture", "UI/UX"],
      githubUrl: "",
      liveUrl: "https://zimopro.com/",
      thumbnail: zimo,
      category: "web"
    },
    {
      title: "Data Center Sustainability",
      description: "Led frontend development for a long-term Data Center Sustainability project aimed at optimizing energy efficiency and resource management. Built interactive data visualizations, feature-rich tables, and integrated AI-powered features such as a chatbot. Focused on creating a scalable, user-friendly interface with React.js to support complex data insights and decision-making. (Project still in development)",
      techStack: ["React.js", "JavaScript", "Ant design"],
      githubUrl: "",
      liveUrl: "http://13.43.212.6:3018",
      thumbnail: dcs,
      category: "web"
    },

    // blockchain sites 
      {
      title: "LUV",
      description: "LUV is a user-friendly website that lets you earn rewards by putting your cryptocurrencies to work. It's easy – just choose the coins you want to stake, and LUV takes care of the rest. You can watch your earnings grow on a dashboard. LUV makes crypto more exciting and accessible, helping you embrace the future of finance.",
      techStack: ["Next.js", "MUI"],
      githubUrl: "",
      liveUrl: "https://stakev3.luvprotocol.com/",
      thumbnail: luv,
      category: "blockchain"
    },
    {
      title: "HOPIUMBET",
      description: "I worked on the frontend development and integrations of the HOPIUMBET platform, creating a responsive, user-friendly interface and ensuring seamless integration with APIs and payment systems. My work focused on delivering a smooth betting experience with modern UI design, optimized performance, and reliable connectivity between the frontend and backend services.",
      techStack: ["React.js", "JavaScript", "MUI"],
      githubUrl: "",
      liveUrl: "confidential",
      thumbnail: hopiumbet,
      category: "blockchain"
    },
     {
      title: "KEREKS STAKING",
      description: "Kereks Staking is a Next.js website introducing Solana's blockchain finance with visuals and real-time staking. It offers an interactive introduction to Solana's blockchain finance. Explore it for an engaging glimpse into decentralized finance's potential.",
      techStack: ["Next.js", "JavaScript", "Material UI", "CSS"],
      githubUrl: "",
      liveUrl: "confidential",
      thumbnail: kerks,
      category: "blockchain"
    },

    // static sites 

        {
      title: "Reign of Immortals",
      description: "Led frontend development for a long-term Data Center Sustainability project aimed at optimizing energy efficiency and resource management. Built interactive data visualizations, feature-rich tables, and integrated AI-powered features such as a chatbot. Focused on creating a scalable, user-friendly interface with React.js to support complex data insights and decision-making. (Project still in development)",
      techStack: ["Next.js", "JavaScript", "Tailwind CSS"],
      githubUrl: "",
      liveUrl: "https://reign-of-immortails.netlify.app/",
      thumbnail: reign,
      category: "static"
    },
       {
      title: "The Empire of Tiger",
      description: "The Empire of Tiger: Exclusive NFT haven with captivating hand-drawn art on Ethereum's blockchain. Join a community of investors for unique themes like 'Outlaws' and 'Black Souls.' Elevate investments with distinct elite gangsters, merging artistry and technology in a creative NFT collection.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS"],
      githubUrl: "",
      liveUrl: "https://theempireoftiger.netlify.app/",
      thumbnail: tiger,
      category: "static"
    },
   
  ],

  // Experience Section
  experience: [
    {
      title: "Lead Frontend Engineer",
      company: "Nets International Islamabad",
      duration: "Sept 2023 - Present",
      description: "Leading the development of scalable and high-performance web applications for Cisco clients. Architecting and implementing modern frontend solutions with React.js and Next.js, ensuring seamless integration with backend systems and AI-driven features. Driving best practices in code quality, performance optimization, and mentoring junior developers.",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript"]
    },
     {
      title: "Next.js Developer",
      company: "ZIMO Group UK - Remote",
      duration: "April 2023 - Aug 2023",
      description: "Delivered advanced frontend solutions as a Senior Next.js Developer, leveraging modern frameworks to craft high-performing, tailored applications. Collaborated closely with cross-functional teams to meet client-specific goals while ensuring scalability and maintainability. Mentored junior developers, guiding them on best practices and fostering a culture of clean, efficient code.",
      skills: ["Next.js", "JavaScript"]
    },
      {
      title: "Frontend Developer",
      company: "Penandweb Lahore",
      duration: "July 2021 - March 2023",
      description: "Specialized in building modern frontend applications with React.js and Next.js. Developed buy-and-sell platforms with intuitive, responsive interfaces and implemented blockchain integrations to enable secure, transparent transactions. Enhanced expertise in delivering scalable, user-centric solutions across diverse projects.",
      skills: ["React.js", "Next.js", "Blockchain Integration", "Frontend Development", "UI/UX"]
    }
  ],

  // Theme Configuration
  theme: {
    primaryColor: "#ff6900", // Orange
    secondaryColor: "#111111", // Black
    accentColor: "#667eea", // Blue
    gradients: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      orange: "linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)",
      blue: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    }
  }
};

export default portfolioConfig;
