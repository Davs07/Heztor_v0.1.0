"use client";

import React from "react";
import IconCalendarDay from "../Icons/Calendar/IconCalendarDay";
import IconCalendarMonth from "../Icons/Calendar/IconCalendarMonth";
import IconCalendarWeek from "../Icons/Calendar/IconCalendarWeek";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import IconNote from "../Icons/NavigationLinks/IconNote";

const TasksListsSideBar = [
  {
    type: "post",
    items: [
      {
        id: 1,
        name: "Día",
        icon: <IconCalendarDay height={12} width={24} />,
      },
      {
        id: 2,
        name: "Semana",
        icon: <IconCalendarWeek height={12} width={24} />,
      },
      {
        id: 3,
        name: "Mes",
        icon: <IconCalendarMonth height={12} width={24} />,
      },
    ],
  },
  {
    type: "projects",
    items: [
      {
        id: 1,
        name: "StartUp",
        favorite: true,
      },
      {
        id: 2,
        name: "English dsadasd asd asdsa dasd asd as",
        favorite: false,
      },
      {
        id: 3,
        name: "Books",
        favorite: false,
      },
      {
        id: 4,
        name: "Coding",
        favorite: true,
      },
      {
        id: 5,
        name: "Work",
        favorite: false,
      },
    ],
  },
];

const NotesSidebar = [
  {
    type: "post",
    items: [
      {
        id: 1,
        name: "Todos",
        icon: <IconCalendarDay height={12} width={24} />,
      },
    ],
  },
  {
    type: "notes",
    items: [
      {
        id: 1,
        name: "Nota 1",
        icon: <IconNote height={12} width={24} />,
      },
      {
        id: 2,
        name: "Nota 2",
        icon: <IconNote height={12} width={24} />,
      },
    ],
  },
];

export const TasksListsSidebarMenu = TasksListsSideBar;
export const NotesSidebarMenu = NotesSidebar;
