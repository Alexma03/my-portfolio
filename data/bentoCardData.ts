import StudiesTimeline from "@/components/StudiesTimeline";
import { IconCloudHero } from "@/components/IconCloud";
import WorkExperienceTimeline from "@/components/WorkTimeline";
import { NameCard } from "@/components/NameCard";

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
  smRowStart?: number;
  smColStart?: number;
  smRowSpan?: number;
  smColSpan?: number;
  component?: React.ComponentType<any>;
}

export const cards: Card[] = [
  {
    id: 1,
    component: NameCard,
    colSpan: 4,
    rowSpan: 2,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 1,
    mdRowStart: 1,
    colStart: 1,
    rowStart: 1,
    smRowStart: 1,
    smRowSpan: 2,
  },
  {
    id: 2,
    image: "/images/alejandro-marcos.jpg",
    colSpan: 4,
    rowSpan: 8,
    mdRowSpan: 2,
    mdColSpan: 1,
    mdColStart: 2,
    mdRowStart: 1,
    colStart: 5,
    rowStart: 1,
    smRowStart: 3,
    smRowSpan: 8,
  },
  {
    id: 3,
    component: IconCloudHero,
    colSpan: 4,
    rowSpan: 6,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 1,
    mdRowStart: 2,
    colStart: 9,
    rowStart: 1,
    smRowStart: 11,
    smRowSpan: 6,
  },
  {
    id: 4,
    component: WorkExperienceTimeline,
    colSpan: 4,
    rowSpan: 6,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 1,
    mdRowStart: 3,
    colStart: 1,
    rowStart: 3,
    smRowStart: 17,
    smRowSpan: 6,
  },
  {
    id: 5,
    title: "Card 5",
    content: "Content 5",
    colSpan: 4,
    rowSpan: 3,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 2,
    mdRowStart: 3,
    colStart: 9,
    rowStart: 7,
    smRowStart: 23,
    smRowSpan: 3,
  },
  {
    id: 6,
    component: StudiesTimeline,
    colSpan: 8,
    rowSpan: 4,
    mdRowSpan: 1,
    mdColSpan: 2,
    mdColStart: 1,
    mdRowStart: 4,
    colStart: 1,
    rowStart: 9,
    smRowStart: 26,
    smRowSpan: 4,
  },
  {
    id: 7,
    title: "Card 7",
    content: "Content 7",
    colSpan: 4,
    rowSpan: 3,
    mdRowSpan: 1,
    mdColSpan: 2,
    mdColStart: 1,
    mdRowStart: 5,
    colStart: 9,
    rowStart: 10,
    smRowStart: 30,
    smRowSpan: 3,
  }
];