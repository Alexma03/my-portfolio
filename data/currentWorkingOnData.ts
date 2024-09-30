export class ProjectCardData {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;

  constructor(
    title: string = "Mi Portfolio",
    description: string = "Trabajando en mi portfolio, con nuevas secciones y creando un apartado de blog",
    imageUrl: string = "/images/Imagen-social-network.jpeg",
    technologies: string[] = ["React", "Next.js", "Tailwind CSS"],
    projectUrl: string = "#"
  ) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.technologies = technologies;
    this.projectUrl = projectUrl;
  }
}

export const projectData = new ProjectCardData();