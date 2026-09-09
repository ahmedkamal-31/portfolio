import mobileStore from "../assets/projects/mobile-store.png";
import sanaa from "../assets/projects/sanaa.png";
import luxuryCarRental from "../assets/projects/luxury-car-rental.png";
export const projects = [
  {
    id: 1,
    title: "Mobile Store",
    subtitle: "Full Stack E-Commerce Website",

    description:
      "A complete e-commerce platform for buying and selling mobile phones with authentication, admin dashboard and product management.",

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
    id: 2,
    title: "Sanaa",
    subtitle: "Craftsmen Booking Platform",

    description:
      "A platform connecting customers with skilled workers such as electricians and plumbers.",

    image: sanaa,

    technologies: [
      "React",
      "ASP.NET Core",
      "SQL Server",
    ],

    features: [
      "Booking",
      "Authentication",
      "Ratings",
      "Chat",
      "Location",
    ],

    github: "https://github.com/ahmedkamal-31/Sanna-project",

    demo: " https://sanna-project-production.up.railway.app",
  },

{
  id: 3,
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
    "Html",
     "Css",
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

  demo: "YOUR_DEPLOYED_LINK",
},


];
