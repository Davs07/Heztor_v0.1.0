"use client";

import React from "react";
import IconCalendarDay from "../Icons/Calendar/IconCalendarDay";
import IconCalendarMonth from "../Icons/Calendar/IconCalendarMonth";
import IconCalendarWeek from "../Icons/Calendar/IconCalendarWeek";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import IconNote from "../Icons/NavigationLinks/IconNote";

const TasksListsSideBar = {
  type: "post",
  items: [
    {
      id: 1,
      name: "Día",
      icon: <IconCalendarDay height={12} width={24}/>,
    },
    {
      id: 2,
      name: "Semana",
      icon: <IconCalendarWeek height={12} width={24}/>,
    },
    {
      id: 3,
      name: "Mes",
      icon: <IconCalendarMonth height={12} width={24}/>,
    },
  ],
};

const NotesSidebar = {
  type: "post",
  items: [
    {
      id: 1,
      name: "Todos",
      icon: <IconCalendarMonth height={12} width={24}/>, //height={12} width={24}
    },
  ],
};

export const TasksListsSidebarMenu = TasksListsSideBar;
export const NotesSidebarMenu = NotesSidebar;
