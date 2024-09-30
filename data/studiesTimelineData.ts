export interface Study {
  id: number;
  title: string;
  img: string;
  height: number;
  width: number;
  institution: string;
  year: string;
  type: "Grado Superior" | "Carrera" | "Certification";
  completed: boolean;
  description: string;
  skills: string[];
}

export const studies: Study[] = [
  {
    id: 1,
    title: "Desarrollo de Aplicaciones Multiplataforma (Dual)",
    img: "/images/cesur.png",
    height: 50,
    width: 150,
    institution: "Cesur Formación",
    year: "2022 - 2024",
    type: "Grado Superior",
    completed: true,
    description:
      "Aplicaciones backend, aplicaciones móviles, bases de datos, srypts de python",
    skills: ["Java", "SQL", "MongoDB", "Android", "Python", "Linux"],
  },
  {
    id: 2,
    title: "Desarrollo de Aplicaciones Web Especialización Blockchain",
    img: "/images/cesur.png",
    height: 50,
    width: 150,
    institution: "Cesur Formación",
    year: "2024 - 2025",
    type: "Grado Superior",
    completed: false,
    description: "Desarrollo y despliegue de aplicaciones web, desarrollo de smart contracts y criptomonedas.",
    skills: ["JavaScript", "React", "Solidity", "Web3"],
  },
  {
    id: 3,
    title: "Ingeniería Informática",
    img: "/images/uoc.png",
    height: 90,
    width: 90,
    institution: "Universidad Oberta de Catalunya",
    year: "2024 - Presente",
    type: "Carrera",
    completed: false,
    description:
      "Desarrollo de software, arquitectura de software, diseño de interfaces, bases de datos y sistemas operativos.",
    skills: ["Computadores", "Cloud Computing", "Serverless", "DevOps"],
  },
];
