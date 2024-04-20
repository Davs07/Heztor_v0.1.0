"use client";
import React, { useEffect, useState } from "react";

// Components
import { Button } from "@/components/ui/button";
import TaskWrapper from "../../_components/TaskWrapper";
import TittleSection from "../../_components/TittleSection";
import TaskCreateWrapper from "../../_components/TaskCreateWrapper";
// Utilities
import { cn } from "@/lib/utils";
// Icons
import { ChevronRight, Ellipsis, Plus, Settings2 } from "lucide-react";

// Interface
interface Task {
  id: number;
  name: string;
  description?: string;
  deadline: string;
  duration?: string;
  priority?: string;
  status: boolean;
}

// Initial Tasks
const InititalTasks: Task[] = [
  {
    id: 1,
    name: "Tarea 1",
    description: "Descripción de la tarea 1. ",
    deadline: "2024-07-10",
    duration: "00:20:30",
    priority: "A",
    status: false,
  },
  {
    id: 2,
    name: "Tarea 2",
    description: "",
    deadline: "",
    duration: "00:01:30",
    priority: "B",
    status: true,
  },
  {
    id: 3,
    name: "Tarea 3",
    deadline: "2024-07-10",
    duration: "00:20:30",
    priority: "C",
    status: false,
  },
  {
    id: 4,
    name: "Tarea 4",
    description: "Descripción de la tarea 2",
    deadline: " 2024-07-07",
    duration: "00:30:00",
    priority: "D",
    status: true,
  },
];

function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 10000); // Número aleatorio entre 0 y 9999
  return timestamp + randomNumber;
}

const taskTmp: Task = {
  id: generateUniqueId(),
  name: "",
  description: "",
  status: false,
  deadline: "",
  duration: "",
  priority: "D",
};
const tasksPage: React.FC = () => {
  const [tasks, setTasks] = useState(InititalTasks);
  const [taskTemp, setTaskTemp] = useState(taskTmp);
  const [isAdding, setIsAdding] = useState(false);
  const [isShowingCompleteds, setIsShowingCompleteds] = useState(false);

  useEffect(() => {
    console.log("-----------");
    const completedTasks = tasks.filter((task) => task.status === true);
    console.log("filter para tareas completadas", completedTasks);
    const taskNames = tasks.map((task) => task.name);
    console.log("map para mostrar los nombres de las tareas", taskNames);
    const taskId = 5;
    const taskById = tasks.find((task) => task.id === taskId);
    console.log("find para mostrar las tareas por id", taskById);

    const hasPendingTasks = tasks.some((task) => !task.status);
    console.log("some para ver si hay tareas pendientes", hasPendingTasks);

    const allTasksHavePriority = tasks.every((task) => task.priority);
    console.log(
      "every para ver si todas las tareas tienen prioridad",
      allTasksHavePriority
    );
  }, [tasks]);

  /* CRUD TAREA */

  // Función para crear una tarea
  const AddTask = (taskNew: Task) => {
    if (taskNew.name === "") {
      alert("El nombre de la tarea no puede estar vacío");
      return;
    }

    setTasks([...tasks, { ...taskNew, id: generateUniqueId() }]);
    setIsAdding(false);
  };

  // Función para editar una tarea
  const EditTask = (id: number) => {
    const idd = tasks.filter((task) => task.id === id);
    console.log(idd);
  };

  // Función para borrar una tarea
  const DeleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
    // console.log(tasks.filter((t) => t.id !== id));
  };

  // Función para cambiar el estado de una tarea
  const CompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  // BUTTONS

  const closeAdding = () => {
    setIsAdding(false);
    setTaskTemp(taskTmp);
  };

  const openAdding = () => {
    setIsAdding(true);
  };

  const showCompleteds = () => {
    setIsShowingCompleteds((prev) => !prev);
  };

  return (
    <>
      <div className="w-[100vw] h-16 flex items-center justify-around  bg-main-superlight dark:bg-main-hiperdark fixed  ">
        <div className="w-12"></div>
        <TittleSection className=" ">Lista de tareas 1</TittleSection>
        <div className="flex gap-2 w-12 justify-around">
          <Ellipsis className="h-4 w-4" />
          <Settings2 className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-col  mb-32 mt-24  group/sec">
        {tasks
          .filter((task) => !task.status)
          // .sort((a, b) => a.priority.localeCompare(b.priority))
          .map((task) => (
            <TaskWrapper
              key={task.id}
              task={task}
              CompleteTask={CompleteTask}
              DeleteTask={DeleteTask}
              EditTask={EditTask}
            />
          ))}

        {isAdding ? (
          <TaskCreateWrapper
            task={taskTemp}
            AddTask={AddTask}
            closeAdding={closeAdding}
          />
        ) : (
          <Button
            variant={"ghost"}
            onClick={openAdding}
            className="mt-1 rounded-2xl flex justify-center text-sm items-center text-main-extradark/50 gap-1 group hover:text-main-extradark/70">
            <Plus height={16} />
            <p>Añadir tarea</p>
          </Button>
        )}

        {tasks.some((task) => task.status) && (
          <div
            className="text-sm group font-semibold cursor-pointer text-slate-500 hover:text-main-2 items-center  justify-start flex flex-row mt-24 mb-4 gap-2 "
            onClick={showCompleteds}>
            <div className="h-px w-full bg-main-extradark/30 group-hover:bg-main-2" />
            <ChevronRight
              height={16}
              className={cn(
                " min-w-4 transition-transform duration-300",
                isShowingCompleteds && "rotate-90 "
              )}
            />
            <h3>Completado</h3>
            <div className="h-px w-full bg-main-extradark/30 group-hover:bg-main-2" />
          </div>
        )}

        {isShowingCompleteds &&
          tasks
            .filter((task) => task.status)
            .map((task) => (
              <TaskWrapper
                key={task.id}
                task={task}
                CompleteTask={CompleteTask}
                DeleteTask={DeleteTask}
                EditTask={EditTask}
              />
            ))}
      </div>
    </>
  );
};

export default tasksPage;
