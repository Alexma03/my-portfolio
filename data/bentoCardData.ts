import EducationTimeline from "@/components/EducationTimeline";
import { IconCloudHero } from "@/components/IconCloud";
import WorkExperienceTimeline from "@/components/WorkTimeline";

export interface Card {
  id: number;
  title?: string;
  content?: string;
  image?: string;
  colSpan: number;
  rowSpan: number;
  mdRowSpan: number;
  mdColSpan: number;
  colStart: number;
  rowStart: number;
  mdColStart?: number;
  mdRowStart?: number;
  component?: React.ComponentType<any>;
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Alejandro Marcos",
    content: "Ingeniero de Software",
    colSpan: 4,
    rowSpan: 2,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 1,
    mdRowStart: 1,
    colStart: 1,
    rowStart: 1,
  },
  {
    id: 2,
    image: "/images/alejandro-marcos.jpg",
    colSpan: 4,
    rowSpan: 8,
    mdRowSpan: 5,
    mdColSpan: 1,
    mdColStart: 2,
    mdRowStart: 1,
    colStart: 5,
    rowStart: 1,
  },
  {
    id: 3,
    component: IconCloudHero,
    colSpan: 4,
    rowSpan: 6,
    mdRowSpan: 4,
    mdColSpan: 1,
    mdColStart: 1,
    mdRowStart: 2,
    colStart: 9,
    rowStart: 1,
  },
  {
    id: 4,
    component: WorkExperienceTimeline,
    colSpan: 4,
    rowSpan: 6,
    mdRowSpan: 4,
    mdColSpan: 2,
    mdColStart: 1,
    mdRowStart: 6,
    colStart: 1,
    rowStart: 3,
  },
  {
    id: 5,
    title: "Card 5",
    content: "Content 5",
    colSpan: 4,
    rowSpan: 3,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 1,
    mdRowStart: 10,
    colStart: 9,
    rowStart: 7,
  },
  {
    id: 6,
    component: EducationTimeline,
    colSpan: 8,
    rowSpan: 4,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 2,
    mdRowStart: 10,
    colStart: 1,
    rowStart: 9,
  },
  {
    id: 7,
    title: "Card 7",
    content: "Content 7",
    colSpan: 4,
    rowSpan: 3,
    mdRowSpan: 2,
    mdColSpan: 2,
    mdColStart: 1,
    mdRowStart: 18,
    colStart: 9,
    rowStart: 10,
  }
];
