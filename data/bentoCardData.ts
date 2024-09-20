import { IconCloudHero } from "@/components/IconCloud";
import WorkExperienceTimeline from "@/components/WorkTimeline";

export interface Card {
  id: number;
  title?: string;
  content?: string;
  image?: string;
  colSpan: number;
  rowSpan: number;
  colStart: number;
  rowStart: number;
  component?: React.ComponentType<any>;
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Alejandro Marcos",
    content: "Ingeniero de Software",
    colSpan: 4,
    rowSpan: 2,
    colStart: 1,
    rowStart: 1,
  },
  {
    id: 2,
    image: "/images/alejandro-marcos.jpg",
    colSpan: 4,
    rowSpan: 8,
    colStart: 5,
    rowStart: 1,
  },
  {
    id: 3,
    component: IconCloudHero,
    colSpan: 4,
    rowSpan: 6,
    colStart: 9,
    rowStart: 1,
  },
  {
    id: 4,
    component: WorkExperienceTimeline,
    colSpan: 4,
    rowSpan: 6,
    colStart: 1,
    rowStart: 3,
  },
  {
    id: 5,
    title: "Card 5",
    content: "Content 5",
    colSpan: 4,
    rowSpan: 3,
    colStart: 9,
    rowStart: 7,
  },
  {
    id: 6,
    title: "Card 6",
    content: "Content 6",
    colSpan: 8,
    rowSpan: 4,
    colStart: 1,
    rowStart: 9,
  },
  {
    id: 7,
    title: "Card 7",
    content: "Content 7",
    colSpan: 4,
    rowSpan: 3,
    colStart: 9,
    rowStart: 10,
  }
];
