
import { Project } from "@/types/projects";
import {mockupLaptopImages, projectImages} from "@/assets/images/projects";

export const projects: Project[] = [
    {
        id: 1,
        title: "Movie Stream Dashboard",
        slug: "movie-stream-dashboard",
        date: "October 2024 - present",
        technologies: [
            "NextJS",
            "React",
            "Typescript",
            "Redux",
            "Material UI",
            "Firebase",
            "Next-Auth",
        ],
        shortDescription:
            "A personalized movie management and discovery dashboard with analytics and advanced filtering. Built with Next.js, Firebase, and a modern UI for an engaging experience.",
        description:
            "A modern platform for managing and discovering movies with a focus on personalization and user engagement. It includes a tailored recommendation system powered by dynamic filtering and user history analysis. Advanced search capabilities allow users to find titles by genre, rating, or release date in seconds. Users can comment on movies, add or remove them from favorites, and manage their profiles through a personal dashboard. Built with Next.js for performance and Firebase for authentication and database storage, it delivers a secure and responsive experience. The UI is designed with Material UI and Styled-Components for a sleek, consistent look.",
        image: projectImages.movieApp,
        imageLaptop: [mockupLaptopImages.movieApp],
        github: "https://github.com/Wojciech-Podlesny/Movie-Stream-Dashboard",
        preview: "https://movie-stream-dashboard.vercel.app/",
        keyFeatures: [
            "Secure user authentication and registration system",
            "Advanced search and filtering system",
            "Personalized movie recommendations",
            "Add/remove movies from favorites",
            "User comment system on movies",
            "User profile management",
            "Firebase-based authentication and database",
            "Optimized performance with Next.js",
        ],
        status: "in-progress",
    },
    {
        id: 2,
        title: "Weather App",
        slug: "weather-app",
        date: "April 2024 - October 2024",
        technologies: [
            "React",
            "Typescript",
            "Tailwind CSS",
            "Jest",
            "React Testing Library",
            "Playwright",
            "Chart.js",
        ],
        shortDescription:
            "An interactive weather app with real-time forecasts, charts, and dark mode. Optimized for speed with caching and fully tested for reliability.",
        description:
            "An interactive weather application delivering real-time data and extended forecasts for cities worldwide. It provides detailed hourly and daily predictions, along with visually rich charts using Chart.js. Users can search for locations, view historical trends, and toggle between light and dark themes for better accessibility. Built with React and TypeScript, it features optimized API calls through caching to ensure fast performance. The application is fully tested with Jest, Playwright, and RTL to guarantee reliability across devices. Its responsive design ensures a seamless experience on both mobile and desktop.",
        image: projectImages.weatherApp,
        imageLaptop: [mockupLaptopImages.weatherApp],
        github: "https://github.com/Wojciech-Podlesny/Weather-App",
        preview: "https://weather-app-xs.vercel.app/",
        keyFeatures: [
            "Search for weather information by city name",
            "View current weather including temperature, humidity, wind speed, etc.",
            "Hourly weather forecast for selected location",
            "3-day temperature graph using Chart.js",
            "Map view of selected location",
            "Detect current location for weather display",
            "Add cities to favorites (stored in LocalStorage)",
            "Comprehensive testing with Jest and RTL",
            "End-to-end testing with Playwright",
        ],
        status: "completed",
    },
    {
        id: 3,
        title: "URL Shortener",
        slug: "url-shortener",
        date: "January 2024 - April 2024",
        technologies: ["React", "CSS", "Typescript", "Vite", "Cypress"],
        shortDescription:
            "A fast and secure tool for shortening links with real-time analytics. Includes custom aliases and expiration settings.",
        description:
            "A fast and secure URL shortener designed to transform long, unwieldy links into compact, shareable URLs. The application includes analytics tools to track clicks, user locations, and referrers in real-time. Users can customize their shortened links, set expiration dates, and manage them via an intuitive interface. Built with Vite, it ensures minimal load times and smooth navigation. Cypress testing ensures stability and a bug-free user experience. Its minimalistic design focuses on functionality while remaining visually appealing.",
        image: projectImages.urlShortener,
        imageLaptop: [mockupLaptopImages.urlShortener],
        github: "https://github.com/Wojciech-Podlesny/URL-Shortener",
        preview: "https://url-shortener-apps.netlify.app/",
        keyFeatures: [
            "Responsive layout for multiple screen sizes",
            "Shorten any valid URL to a unique 8-character path",
            "Store shortened URLs in local storage",
            "Delete shortened links from storage",
            "Copy shortened links to clipboard in one click",
            "Validation with error messages for empty or invalid input",
        ],
        status: "completed",
    },
    {
        id: 4,
        title: "Personal Portfolio",
        slug: "personal-portfolio",
        date: "July 2025 – August 2025",
        technologies: ["Next.js", "React", "Typescript", "Tailwind CSS", "Aceternity UI", "Resend"],
        shortDescription:
            "A modern personal portfolio showcasing projects, skills, and experience in a clean and responsive layout.",
        description:
            "A personal portfolio built with Next.js and React, designed to be fast, responsive, and easy to navigate. The website highlights projects, professional experience, and technical skills in a visually appealing and structured way. It includes a contact form powered by Resend for direct communication and leverages Aceternity UI for modern, elegant components. The project emphasizes performance, clarity, and aesthetics to stand out both technically and visually.",
        image: projectImages.personalPortfolio,
        imageLaptop: [mockupLaptopImages.personalPortfolio],
        github: "https://github.com/Wojciech-Podlesny/Portfolio",
        preview: "https://wojciechpodlesny.pl",
        keyFeatures: [
            "Modern, responsive design optimized for all devices",
            "Projects section with previews and links to GitHub/live demos",
            "Contact form with email handling via Resend",
            "Integration with Aceternity UI for sleek, reusable components",
            "Fast performance with Next.js and optimized images",
            "Easy to maintain and expand for future updates",
        ],
        status: "completed",
    },

];
