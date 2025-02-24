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
    title: "Ingeniería Informática",
    img: "/images/uoc-2.png",
    height: 90,
    width: 90,
    institution: "Universidad Oberta de Catalunya",
    year: "2024",
    type: "Carrera",
    completed: false,
    description:
      "Desarrollo de software, arquitectura de software, diseño de interfaces, bases de datos y sistemas operativos.",
    skills: ["Computadores", "Matematicas"],
  },
  {
    id: 2,
    title: "Desarrollo de Aplicaciones Web con Blockchain",
    img: "/images/cesur-2.png",
    height: 50,
    width: 90,
    institution: "Cesur Formación",
    year: "2024 - 2025",
    type: "Grado Superior",
    completed: false,
    description: "Desarrollo y despliegue de aplicaciones web, desarrollo de smart contracts y criptomonedas.",
    skills: ["JavaScript", "React", "Solidity", "Web3"],
  },
  {
    id: 3,
    title: "Desarrollo de Aplicaciones Multiplataforma (Dual)",
    img: "/images/cesur-2.png",
    height: 50,
    width: 90,
    institution: "Cesur Formación",
    year: "2022 - 2024",
    type: "Grado Superior",
    completed: true,
    description:
      "Aplicaciones backend, aplicaciones móviles, bases de datos, srypts de python",
    skills: ["Java", "SQL", "MongoDB", "Android"],
  },
];

// Actualizamos la función para tomar la anchura de pantalla como parámetro
export function getStudies(screenWidth: number) {
  return studies.map(study => {
    let multiplier = screenWidth > 1600 ? 1.5 : 1;
    // Para el primer estudio usar un crecimiento menor
    if (study.id === 1 && screenWidth > 1600) {
      multiplier = 1.2;
    }
    return { ...study, width: study.width * multiplier };
  });
}
