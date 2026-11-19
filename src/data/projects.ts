import furnicraft from "../assets/projects/furnicraft.webp";
import luxuryCarRental from "../assets/projects/luxuryCarRental.webp";
import devScope from "../assets/projects/devscope.webp";
import mobileStore from "../assets/projects/mobile-store.webp";
import sanaa from "../assets/projects/sanaa.webp";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DevScope",
    subtitle: "GitHub Developer Analytics Platform",
    category: "ASP.NET Core Web API + React",
    description:
      "A full-stack analytics platform that helps developers explore their GitHub profiles, analyze repository statistics, and visualize programming language usage through an interactive dashboard.",
    image: devScope,
    featured: true,
    technologies: [
      "ASP.NET Core Web API",
      "C#",
      "React",
      "TypeScript",
      "GitHub OAuth 2.0",
      "REST API",
    ],
    features: [
      "GitHub OAuth Login",
      "Developer Statistics",
      "Repository Explorer",
      "Repository Search & Filtering",
      "Language Analytics",
      "Interactive Charts",
    ],
    github: "https://github.com/ahmedkamal-31/DevScope",
    demo: "https://dev-scope-nu.vercel.app/",
  },

  {
    id: 2,
    title: "FurniCraft",
    subtitle: "Furniture E-Commerce & Customization Platform",
    category: "Full Stack ASP.NET Core MVC",
    description:
      "A full-stack furniture e-commerce platform that allows customers to browse products, customize furniture options, manage their cart, and place orders.",
    image: furnicraft,
    featured: true,
    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "ASP.NET Core Identity",
      "Bootstrap",
      "JavaScript",
    ],
    features: [
      "Product Catalog",
      "Product Customization",
      "Shopping Cart",
      "User Authentication",
      "Order Management",
      "Admin Dashboard",
      "Inventory Management",
    ],
    github: "https://github.com/ahmedkamal-31/FurniCraft",
    demo: "http://furnicraft-ahmed-kamal.runasp.net/",
  },

  {
    id: 3,
    title: "Luxury Car Rental",
    subtitle: "Premium Car Rental Platform",
    category: "ASP.NET Core MVC Platform",
    description:
      "A premium car rental platform for browsing luxury vehicles, viewing detailed car information, and managing rental bookings.",
    image: luxuryCarRental,
    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "ASP.NET Core Identity",
      "HTML",
      "CSS",
    ],
    features: [
      "Luxury Car Catalog",
      "Car Details",
      "Online Booking",
      "User Authentication",
      "Admin Dashboard",
      "Car Management",
      "Booking Management",
    ],
    github: "https://github.com/ahmedkamal-31/Luxury-Car-Rental",
    demo: "http://luxury-car-rental.runasp.net/",
  },

  {
    id: 4,
    title: "Mobile Store",
    subtitle: "Full Stack E-Commerce Website",
    category: "E-Commerce MVC Architecture",
    description:
      "A complete e-commerce platform for buying and selling mobile phones with authentication, product management, shopping cart, and order management.",
    image: mobileStore,
    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework",
      "SQL Server",
      "Bootstrap",
    ],
    features: [
      "Authentication & Authorization",
      "Shopping Cart",
      "Admin Dashboard",
      "Seller Dashboard",
      "Order Management",
    ],
    github: "https://github.com/ahmedkamal-31/mobile-store",
    demo: "http://mobile-store.somee.com/",
  },

  {
    id: 5,
    title: "Sanaa",
    subtitle: "Craftsmen Booking Platform",
    category: "Full Stack Service Platform",
    description:
      "A platform connecting customers with skilled workers such as electricians and plumbers, making it easier to discover and book reliable services.",
    image: sanaa,
    technologies: [
      "React",
      "ASP.NET Core",
      "SQL Server",
    ],
    features: [
      "Service Booking",
      "User Authentication",
      "Ratings & Reviews",
      "Chat",
      "Location",
    ],
    github: "https://github.com/ahmedkamal-31/Sanna-project",
    demo: "",
  },
];
