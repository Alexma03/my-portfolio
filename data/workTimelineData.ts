export interface WorkExperienceItem {
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string | null;
    technologies: string[];
    logo: string;
    height: number;
    width: number;
    description: string;
  }
  
  export const workExperienceItems: WorkExperienceItem[] = [
    {
      company: "Santander Digital Services",
      position: "Ingeniero de Software Analista",
      location: "Madrid, España",
      startDate: "Julio 2024",
      endDate: null,
      technologies: ["Spring Boot", "Java", "SQL", "Github"],
      logo: "/images/santander.png",
      height: 50,
      width: 60,
      description:
        "Lideré el desarrollo de aplicaciones web escalables utilizando arquitecturas de microservicios. Implementé soluciones robustas con Spring Boot y Java, optimizando el rendimiento y la seguridad de las aplicaciones bancarias. Colaboré en la definición de estándares de desarrollo y mejores prácticas del equipo.",
    },
    {
      company: "Carrefour Tech",
      position: "Full Stack Developer",
      location: "Madrid, España",
      startDate: "Junio 2023",
      endDate: "Junio 2024",
      technologies: ["Spring Boot", "Angular", "MongoDB", "PostgreSQL"],
      logo: "/images/carrefour.png",
      height: 50,
      width: 65,
      description:
        "Desarrollé y mantuve aplicaciones web full-stack para diversos sectores comerciales. Implementé nuevas funcionalidades utilizando Angular en el frontend y Spring Boot en el backend. Gestioné bases de datos MongoDB y PostgreSQL, optimizando consultas y mejorando el rendimiento de las aplicaciones.",
    },
  ];