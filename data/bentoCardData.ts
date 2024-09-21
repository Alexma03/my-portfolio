import { IconCloudHero } from "@/components/IconCloud";
import WorkExperienceTimeline from "@/components/WorkTimeline";

export interface Card {
  id: number;
  title?: string;
  content?: string;
  image?: string;
  colSpan: number;
  rowSpan: number;
  mdrowSpan: number;
  mdcolSpan: number;
  colStart: number;
  rowStart: number;
  mdcolStart?: number;
  mdrowStart?: number;
  component?: React.ComponentType<any>;
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Alejandro Marcos",
    content: "Ingeniero de Software",
    colSpan: 4,
    rowSpan: 2,
    mdrowSpan: 1,
    mdcolSpan: 1,
    mdcolStart: 1,
    mdrowStart: 1,
    colStart: 1,
    rowStart: 1,
  },
  {
    id: 2,
    image: "/images/alejandro-marcos.jpg",
    colSpan: 4,
    rowSpan: 8,
    mdrowSpan: 5,
    mdcolSpan: 1,
    mdcolStart: 2,
    mdrowStart: 1,
    colStart: 5,
    rowStart: 1,
  },
  {
    id: 3,
    component: IconCloudHero,
    colSpan: 4,
    rowSpan: 6,
    mdrowSpan: 4,
    mdcolSpan: 1,
    mdcolStart: 1,
    mdrowStart: 2,
    colStart: 9,
    rowStart: 1,
  },
  {
    id: 4,
    component: WorkExperienceTimeline,
    colSpan: 4,
    rowSpan: 6,
    mdrowSpan: 4,
    mdcolSpan: 2,
    mdcolStart: 1,
    mdrowStart: 6,
    colStart: 1,
    rowStart: 3,
  },
  {
    id: 5,
    title: "Card 5",
    content: "Content 5",
    colSpan: 4,
    rowSpan: 3,
    mdrowSpan: 1,
    mdcolSpan: 1,
    mdcolStart: 1,
    mdrowStart: 10,
    colStart: 9,
    rowStart: 7,
  },
  {
    id: 6,
    title: "Card 6",
    content: "Content 6",
    colSpan: 8,
    rowSpan: 4,
    mdrowSpan: 1,
    mdcolSpan: 1,
    mdcolStart: 2,
    mdrowStart: 10,
    colStart: 1,
    rowStart: 9,
  },
  {
    id: 7,
    title: "Card 7",
    content: "Content 7",
    colSpan: 4,
    rowSpan: 3,
    mdrowSpan: 2,
    mdcolSpan: 2,
    mdcolStart: 1,
    mdrowStart: 18,
    colStart: 9,
    rowStart: 10,
  }
];
