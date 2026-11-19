export interface CuratedRepo {
  id: string;
  name: string;
  repoSlug: string; // Used to match GitHub API repos
  title: string;
  description: string;
  html_url: string;
  primaryLanguage: string;
  languageColor: string;
  technologies: string[];
  defaultStars: number;
  defaultForks: number;
  lastUpdatedText: string;
  isPrimary?: boolean;
}

export const curatedFeaturedRepos: CuratedRepo[] = [
  {
    id: "devscope",
    name: "DevScope",
    repoSlug: "DevScope",
    title: "DevScope",
    description:
      "Full-stack GitHub developer analytics platform with ASP.NET Core Web API, React, TypeScript, and OAuth 2.0. Analyzes user profiles, repositories, and language statistics.",
    html_url: "https://github.com/ahmedkamal-31/DevScope",
    primaryLanguage: "C#",
    languageColor: "#a855f7", // purple
    technologies: ["ASP.NET Core Web API", "C#", "React", "TypeScript", "OAuth 2.0", "REST API"],
    defaultStars: 5,
    defaultForks: 2,
    lastUpdatedText: "Updated recently",
    isPrimary: true,
  },
  {
    id: "luxury-car-rental",
    name: "Luxury-Car-Rental",
    repoSlug: "Luxury-Car-Rental",
    title: "Luxury Car Rental",
    description:
      "Premium car rental platform for browsing luxury vehicles, viewing vehicle specifications, and managing customer bookings built with ASP.NET Core MVC and SQL Server.",
    html_url: "https://github.com/ahmedkamal-31/Luxury-Car-Rental",
    primaryLanguage: "C#",
    languageColor: "#a855f7",
    technologies: ["ASP.NET Core MVC", "C#", "Entity Framework Core", "SQL Server", "Identity"],
    defaultStars: 3,
    defaultForks: 1,
    lastUpdatedText: "Active repository",
    isPrimary: false,
  },
  {
    id: "mobile-store",
    name: "mobile-store",
    repoSlug: "mobile-store",
    title: "Mobile Store",
    description:
      "Full-stack e-commerce website for mobile phones featuring authentication & authorization, cart management, admin dashboard, and order processing workflows.",
    html_url: "https://github.com/ahmedkamal-31/mobile-store",
    primaryLanguage: "C#",
    languageColor: "#a855f7",
    technologies: ["ASP.NET Core MVC", "C#", "Entity Framework", "SQL Server", "Bootstrap"],
    defaultStars: 3,
    defaultForks: 1,
    lastUpdatedText: "Active repository",
    isPrimary: false,
  },
  {
    id: "furnicraft",
    name: "FurniCraft",
    repoSlug: "FurniCraft",
    title: "FurniCraft",
    description:
      "Full-stack furniture e-commerce platform allowing customers to browse products, customize items, manage their cart, and place orders with ASP.NET Core MVC.",
    html_url: "https://github.com/ahmedkamal-31/FurniCraft",
    primaryLanguage: "C#",
    languageColor: "#a855f7",
    technologies: ["ASP.NET Core MVC", "C#", "EF Core", "SQL Server", "Identity", "JavaScript"],
    defaultStars: 4,
    defaultForks: 1,
    lastUpdatedText: "Active repository",
    isPrimary: false,
  },
  {
    id: "sanaa",
    name: "Sanna-project",
    repoSlug: "Sanna-project",
    title: "Sanaa",
    description:
      "Craftsmen booking platform connecting customers with skilled service providers (electricians, plumbers) featuring authentication, reviews, and service scheduling.",
    html_url: "https://github.com/ahmedkamal-31/Sanna-project",
    primaryLanguage: "C#",
    languageColor: "#a855f7",
    technologies: ["React", "ASP.NET Core", "SQL Server", "REST API"],
    defaultStars: 2,
    defaultForks: 1,
    lastUpdatedText: "Active repository",
    isPrimary: false,
  },
];
