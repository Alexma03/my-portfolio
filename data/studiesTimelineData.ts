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
      "Desarrollo de software avanzado, arquitectura de sistemas distribuidos, diseño de interfaces de usuario, gestión de bases de datos relacionales y NoSQL, sistemas operativos y redes. Enfoque en metodologías ágiles y patrones de diseño.",
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
    description: 
      "Desarrollo y despliegue de aplicaciones web modernas, implementación de smart contracts en Ethereum, desarrollo de DApps, integración con Web3 y wallets. Especialización en tecnologías blockchain y criptomonedas con enfoque práctico.",
    skills: ["JavaScript", "React", "Solidity"],
  },
  {
    id: 3,
    title: "Desarrollo de Aplicaciones Multiplataforma",
    img: "/images/cesur-2.png",
    height: 50,
    width: 90,
    institution: "Cesur Formación",
    year: "2022 - 2024",
    type: "Grado Superior",
    completed: true,
    description:
      "Desarrollo de aplicaciones backend con Java y Spring Boot, aplicaciones móviles nativas para Android, gestión de bases de datos SQL y NoSQL, automatización con Python. Experiencia práctica en entorno empresarial mediante formación dual.",
    skills: ["Java", "SQL", "Android"],
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
