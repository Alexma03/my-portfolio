import { IconCloudHero } from "@/components/IconCloud";

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
    rowSpan: 3,
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
    title: "Card 4",
    content: "Content 4",
    colSpan: 4,
    rowSpan: 5,
    colStart: 1,
    rowStart: 4,
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
    title: "6",
    content: "",
    colSpan: 1,
    rowSpan: 2,
    colStart: 1,
    rowStart: 9,
  },
  {
    id: 7,
    title: "Card 7",
    content: "Content 7",
    colSpan: 7,
    rowSpan: 4,
    colStart: 2,
    rowStart: 9,
  },
  {
    id: 8,
    title: "Card 8",
    content: "Content 8",
    colSpan: 4,
    rowSpan: 3,
    colStart: 9,
    rowStart: 10,
  },
  {
    id: 9,
    title: "9",
    colSpan: 1,
    rowSpan: 2,
    colStart: 1,
    rowStart: 11,
  },
];
