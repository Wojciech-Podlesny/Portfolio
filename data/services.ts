import photo1 from "../assets/images/services/webDevelopment.webp";
import photo2 from "../assets/images/services/responsiveDesign.webp";
import photo3 from "../assets/images/services/seoOptimization.webp";
import photo4 from "../assets/images/services/performanceOptimilization.webp";
import photo5 from "../assets/images/services/apiIntegration.webp";
import photo6 from "../assets/images/services/accessibity.webp";
import movieApp from "../assets/images/projects/movie-stream-dashboard/MovieApp.png";
import weatherApp from "../assets/images/projects/weather-app/WeatherApp.png";
import {FaCode, FaMobileAlt, FaSearch, FaTachometerAlt, FaServer, FaUniversalAccess} from 'react-icons/fa';
import {Service} from "@/types/services";
import weatherAppMobile from "@/assets/images/projects/weather-app/weatherApp.png";




export const servicesData: Service[] = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Building robust and scalable websites and applications.',
        details:
            'I specialize in building modern web applications that are fast, secure, and scalable. Using frameworks like Next.js and React, I create solutions tailored to your business needs, ensuring optimal performance and smooth user experience.',
        features: [
            'Next.js & React',
            'Server-Side Rendering (SSR)',
            'API Integrations',
            'Scalable Architecture',
            'Performance Optimization',
        ],
        images: [
            photo1,
            movieApp,
        ],
        icon: FaCode
    },
    {
        id: 2,
        title: 'Responsive Design',
        description: 'Ensuring your website looks great on all devices.',
        details:
            'I design and build interfaces that adapt perfectly to any screen size, providing an excellent experience on mobile, tablet, and desktop. My approach ensures usability and accessibility are top priorities.',
        features: [
            'Mobile-first approach',
            'Tailwind CSS & Flex/Grid systems',
            'Dark mode & accessibility',
            'Pixel-perfect design',
            'Cross-browser compatibility',
        ],
        images: [
            photo2,
            weatherAppMobile

        ],
        icon: FaMobileAlt
    },
    {
        id: 3,
        title: 'SEO Optimization',
        description: 'Improving your website visibility in search engines.',
        details:
            'I improve the visibility of your website by following modern SEO practices. From technical SEO and structured data to performance and keyword optimization, I ensure your site is well-prepared to rank higher.',
        features: [
            'Technical SEO',
            'Page speed optimization',
            'Structured data & meta tags',
            'Mobile-friendly testing',
            'Core Web Vitals improvements',
        ],
        images: [
            photo3,
            movieApp
        ],
        icon: FaSearch
    },
    {
        id: 4,
        title: 'Performance Optimization',
        description: 'Improving load times, performance scores, and user experience.',
        details:
            'I help optimize your website’s performance by reducing bundle sizes, lazy-loading assets, and improving Core Web Vitals. Faster websites don’t just convert better — they rank better too.',
        features: [
            'Lighthouse score 95+',
            'Code splitting & lazy loading',
            'Optimized images & fonts',
            'Reduced TTFB and FCP',
            'Next.js performance tweaks',
        ],
        images: [
            photo4,
            weatherApp
        ],
        icon: FaTachometerAlt
    },
    {
        id: 5,
        title: 'API Integration',
        description: 'Seamless integration with external APIs and services.',
        details:
            'I integrate your app with REST or GraphQL APIs, authentication providers, payment systems, CMSs, and any other third-party services you rely on. Clean, reusable code and error handling guaranteed.',
        features: [
            'REST & GraphQL APIs',
            'OAuth & Auth providers',
            'Stripe / PayPal integration',
            'CMS (Sanity, Contentful, etc.)',
            'Axios, SWR, React Query, tRPC',
        ],
        images: [
            photo5,
            weatherApp
        ],
        icon: FaServer
    },
    {
        id: 6,
        title: 'Accessibility',
        description: 'Auditing and fixing accessibility issues so your app works for everyone.',
        details:
            'I perform WCAG 2.2 AA audits and implement fixes: semantic HTML, proper ARIA, keyboard navigation, focus management, and color-contrast checks. You get a prioritized report, code changes, and a short guide for your team.',
        features: [
            'WCAG 2.2 AA audit (Lighthouse / axe / WAVE)',
            'Semantic HTML & correct ARIA roles',
            'Keyboard navigation & visible focus states',
            'Color contrast & scalable typography',
            'Screen-reader testing (NVDA / VoiceOver) + handoff'
        ],
        images: [
            photo6,
            movieApp
        ],
        icon: FaUniversalAccess
    }
];
