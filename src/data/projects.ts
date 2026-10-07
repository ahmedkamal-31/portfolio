import furnicraft from "../assets/projects/furnicraft.png";
import luxuryCarRental from "../assets/projects/luxuryCarRental.png";
import mobileStore from "../assets/projects/mobile-store.png";
import sanaa from "../assets/projects/sanaa.png";

export const projects = [
  {
    id: 1,
    title: "FurniCraft",
    subtitle: "Furniture E-Commerce & Customization Platform",

    description:
      "A full-stack furniture e-commerce platform that allows customers to browse products, customize furniture options, manage their cart, and place orders.",

    image: furnicraft,

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
    id: 2,
    title: "Luxury Car Rental",
    subtitle: "Premium Car Rental Platform",

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
    id: 3,
    title: "Mobile Store",
    subtitle: "Full Stack E-Commerce Website",

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
    id: 4,
    title: "Sanaa",
    subtitle: "Craftsmen Booking Platform",

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

    demo: "https://sanna-project-production.up.railway.app",
  },
];
