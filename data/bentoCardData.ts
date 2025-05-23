import StudiesTimeline from "@/components/StudiesTimeline";
import { IconCloudHero } from "@/components/IconCloud";
import WorkExperienceTimeline from "@/components/WorkTimeline";
import { NameCard } from "@/components/NameCard";
import CurrentWorkingOn from "@/components/CurrentWorkingOn";
import ContactCard from "@/components/ContactCard";

export interface Card {
  id: number;
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
    component: NameCard,
    colSpan: 3,
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
    image: "/images/Foto-Perfil.jpg",
    colSpan: 5,
    rowSpan: 6,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 2,
    mdRowStart: 1,
    colStart: 4,
    rowStart: 1,
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
  },
  {
    id: 4,
    component: WorkExperienceTimeline,
    colSpan: 3,
    rowSpan: 6,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 1,
    mdRowStart: 3,
    colStart: 1,
    rowStart: 3,
  },
  {
    id: 5,
    component: CurrentWorkingOn,
    colSpan: 4,
    rowSpan: 3,
    mdRowSpan: 1,
    mdColSpan: 1,
    mdColStart: 2,
    mdRowStart: 3,
    colStart: 9,
    rowStart: 7,
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
  },
  {
    id: 7,
    component: ContactCard,
    colSpan: 4,
    rowSpan: 3,
    mdRowSpan: 1,
    mdColSpan: 2,
    mdColStart: 1,
    mdRowStart: 5,
    colStart: 9,
    rowStart: 10,
  }
];