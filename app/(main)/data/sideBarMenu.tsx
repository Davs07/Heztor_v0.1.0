"use client";

import React from "react";
import IconCalendarDay from "../Icons/Calendar/IconCalendarDay";
import IconCalendarMonth from "../Icons/Calendar/IconCalendarMonth";
import IconCalendarWeek from "../Icons/Calendar/IconCalendarWeek";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import IconNote from "../Icons/NavigationLinks/IconNote";
import { Book, CalendarHeart, Folder, Plus, Star, Wallet } from "lucide-react";

interface SidebarMenu {
  label: string;
  icon: JSX.Element;
  type?: "button" | "filter" | "functionality";
  items?: SidebarMenu[];
  src?: string;
}

export const controlNav: SidebarMenu[] = [
  {
    label: "Añadir Hábito",
    icon: <Plus height={12} width={24} color={"blue"} />,
    type: "button",
  },
  {
    label: "Añadir Registro",
    icon: <Plus height={12} width={24} color={"blue"} />,
    type: "button",
  },
  {
    label: "Día",
    icon: <IconCalendarWeek height={12} width={24} />,
    type: "filter",
    src: "/control/day",
  },
  {
    label: "Próximo",
    icon: <IconCalendarWeek height={12} width={24} />,
    type: "filter",
    src: "/control/upcoming",
  },
  {
    label: "Finanzas",
    icon: <Wallet height={12} width={24} />,
    type: "functionality",
    src: "/control/finance",
  },
  {
    label: "Hábitos",
    icon: <CalendarHeart height={12} width={24} />,
    type: "functionality",
    src: "/control/habits",
    items: [
      {
        label: "Categorías",
        icon: <IconNote height={12} width={24} />,
        type: "functionality",
      },
      {
        label: "Mis Hábitos",
        icon: <IconNote height={12} width={24} />,
        type: "functionality",
      },
    ],
  },
];

export const managmentNav: SidebarMenu[] = [
  {
    label: "Añadir Tarea",
    icon: <Plus height={12} width={24} color={"blue"} />,
    type: "button",
  },
  {
    label: "Añadir Evento",
    icon: <Plus height={12} width={24} color={"blue"} />,
    type: "button",
  },
  {
    label: "Día",
    icon: <IconCalendarWeek height={12} width={24} />,
    type: "filter",
    src: "/managment/day",
  },
  {
    label: "Próximo",
    icon: <IconCalendarWeek height={12} width={24} />,
    type: "filter",
    src: "/managment/upcoming",
  },
  {
    label: "Proyectos",
    icon: <Folder height={12} width={24} />,
    type: "functionality",
    src: "/managment/projects",
    items: [
      {
        label: "Favoritos",
        icon: <Star height={12} width={24} />,
        type: "functionality",
      },
      {
        label: "Proyectos",
        icon: <Folder height={12} width={24} />,
        type: "functionality",
      },
    ],
  },
];

export const notionNav: SidebarMenu[] = [
  {
    label: "Añadir Entrada",
    icon: <Plus height={12} width={24} />,
    type: "button",
  },
  {
    label: "Añadir Nota",
    icon: <Plus height={12} width={24} />,
    type: "button",
  },
  {
    label: "Día",
    icon: <IconCalendarWeek height={12} width={24} />,
    type: "filter",
    src: "/notion/day",
  },
  {
    label: "Próximo",
    icon: <IconCalendarWeek height={12} width={24} />,
    type: "filter",
    src: "/notion/upcoming",
  },
  {
    label: "Diario Personal",
    icon: <Book height={12} width={24} />,
    type: "functionality",
    src: "/notion/journal",
  },
  {
    label: "Notas",
    icon: <IconNote height={12} width={24} />,
    type: "functionality",
    src: "/notion/notes",
    items: [
      {
        label: "Favoritos",
        icon: <Star height={12} width={24} />,
        type: "functionality",
      },
      {
        label: "Notas",
        icon: <IconNote height={12} width={24} />,
        type: "functionality",
      },
    ],
  },
];
