"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import TaskWrapper from "../../_components/TaskWrapper";
import TittleSection from "../../_components/TittleSection";
import { Ellipsis, Settings2 } from "lucide-react";

interface Task {
  id: number;
  name: string;
  description?: string;
  deadline: string;
  duration?: string;
  priority?: string;
  status: boolean;
}

const tasksPage: React.FC = () => {
  const InititalTasks = [
    {
      id: 1,
      name: "Tarea 1",
      description: "Descripción de la tarea 1. ",
      deadline: "25 Abr",
      duration: "120",
      priority: "A",
      status: false,
    },
    {
      id: 2,
      name: "Tarea 2",
      description: "Descripción de la tarea 2",
      deadline: "22 Abr",
      duration: "60",
      priority: "C",
      status: false,
    },
    {
      id: 30,
      name: "Tarea 3",
      deadline: "23 Abr",
      priority: "B",
      status: false,
    },
    {
      id: 23,
      name: "Tarea 2",
      description: "Descripción de la tarea 2",
      deadline: "22 Abr",
      duration: "60",
      priority: "C",
      status: true,
    },
    {
      id: 3,
      name: "Tarea 3",
      deadline: "23 Abr",
      priority: "B",
      status: true,
    },
    {
      id: 100,
      name: "Tarea 4",
      deadline: "23 Abr",
      priority: "A",
      status: true,
    },
    {
      id: 4,
      name: "Tarea 4",
      description:
        "Descripción de la tarea 4. lorem ipsum dolor sit amet consectetur adipisicing elit.",
      deadline: "25 Abr",
      duration: "120",
      priority: "A",
      status: true,
    },
    {
      id: 5,
      name: "Tarea 5",
      deadline: "22 Abr",
      duration: "60",
      priority: "D",
      status: true,
    },
    {
      id: 6,
      name: "Tarea 6",
      deadline: "23 Abr",
      priority: "B",
      status: false,
    },
    {
      id: 7,
      name: "Tarea 4",
      description:
        "Descripción de la tarea 4. lorem ipsum dolor sit amet consectetur adipisicing elit.",
      deadline: "25 Abr",
      duration: "120",
      priority: "A",
      status: true,
    },
    {
      id: 8,
      name: "Tarea 5",
      deadline: "22 Abr",
      duration: "60",
      priority: "none",
      status: false,
    },
    {
      id: 9,
      name: "Tarea 6",
      description: "Descripción de la tarea 6",
      deadline: "23 Abr",
      priority: "B",
      status: true,
    },
    {
      id: 10,
      name: "Tarea 4",
      description:
        "Descripción de la tarea 4. lorem ipsum dolor sit amet consectetur adipisicing elit.",
      deadline: "25 Abr",
      duration: "120",
      priority: "C",
      status: false,
    },
    {
      id: 11,
      name: "Tarea 5",
      deadline: "22 Abr",
      duration: "60",
      priority: "D",
      status: false,
    },
    {
      id: 12,
      name: "Tarea 6",
      description: "Descripción de la tarea 6",
      deadline: "23 Abr",
      priority: "none",
      status: true,
    },
  ];

  const [tasks, setTasks] = useState(InititalTasks);

  // Función para añadir una tarea
  const AddNewTask = () => {
    setTasks([
      ...tasks,
      {
        id: 100,
        name: "",
        description: "",
        status: false,
        deadline: "",
        duration: "",
        priority: "",
      },
    ]);
  };

  return (
    <>
      <div className="w-[100vw] h-16 flex items-center justify-around bg-main-superlight dark:bg-main-hiperdark fixed  ">
        <div className="w-12"></div>
        <TittleSection>Lista de tareas 1</TittleSection>
        <div className="flex gap-2 w-12 justify-around">
          <Ellipsis className="h-4 w-4" />
          <Settings2 className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-col  mb-40 mt-24  group/sec">
        {tasks
          .filter((task) => !task.status)
          // .sort((a, b) => a.priority.localeCompare(b.priority))
          .map((task) => (
            <TaskWrapper key={task.id} task={task} />
          ))}
        <Button
          variant={"ghost"}
          onClick={AddNewTask}
          className="mt-1 rounded-2xl flex justify-center text-sm items-center text-main-extradark/50 gap-1 group hover:text-main-extradark/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          <p>Añadir tarea</p>
        </Button>
        <div className="text-sm font-semibold text-slate-500 items-center text-start flex flex-row my-2 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="bi bi-chevron-right rotate-90 transition-all duration-300 ease-in-out"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
          <h3>Completado</h3>
        </div>
        {tasks
          .filter((task) => task.status)
          .map((task) => (
            <TaskWrapper key={task.id} task={task} />
          ))}
      </div>
    </>
  );
};

export default tasksPage;
