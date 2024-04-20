"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Circle,
  CircleCheck,
  Flag,
  SendHorizontal,
  X,
} from "lucide-react";
import IconCalendar from "../Icons/FeaturesIcons/IconCalendar.jsx";
import IconFlag from "../Icons/FeaturesIcons/IconFlag";
import IconStopWatch from "../Icons/FeaturesIcons/IconStopWatch";
import SelectPriority from "./SelectPriority";

interface Task {
  id: number;
  name: string;
  description?: string;
  deadline: string;
  duration?: string;
  priority?: string;
  status: boolean;
}

type AddTaskFunction = (taskNew: Task) => void;

type TaskProps = {
  // onClick?: React.MouseEventHandler;
  task: Task;
  // onClick?: () => void;
  AddTask: AddTaskFunction;
  closeAdding: () => void;
};

function TaskCreateWrapper({ task, AddTask, ...props }: TaskProps) {
  const [newTask, setNewTask] = useState<Task>(task);


  const changeDataText = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    type: string
  ) => {
    setNewTask({ ...newTask, [type]: event.target.value.trim() });
  };

  const changeDataInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setNewTask({ ...newTask, [type]: event.target.value.trim() });
  };

  const changePriority = (priority: string) => {
    setNewTask({
      ...newTask,
      priority: priority,
    });
  };

  useEffect(() => {
    console.log(newTask);
  }, [newTask]);

  const autoResizing = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    type: string
  ) => {
    let textAreaHeight: string;
    switch (type) {
      case "name":
        textAreaHeight = "24px";
        break;
      case "description":
        textAreaHeight = "20px";
        break;
      default:
        textAreaHeight = "20px";
        break;
    }

    event.target.style.height = textAreaHeight;
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <Wrapper
      className="flex-col bg-transparent  text-white border-main-2 border "
      {...props}>
      {/* Header */}
      <div className="flex items-center">
        {/* Name */}
        <textarea
          defaultValue={newTask.name}
          placeholder="Nombre de la tarea"
          onChange={(event) => {
            changeDataText(event, "name");
            autoResizing(event, "name");
          }}
          className=" flex-1 text-sm font-normal bg-transparent text-slate-900 placeholder:text-slate-400 dark:text-white resize-none w-full focus:outline-none active:outline-none h-6 pt-[2px]"></textarea>
      </div>

      {/* Descripción */}
      <div className="">
        <textarea
          className="text-xs bg-transparent text-slate-500 dark:text-white resize-none w-full focus:outline-none active:outline-none h-5 pt-[2px] "
          placeholder="Descripción"
          onChange={(event) => {
            changeDataText(event, "description");
            autoResizing(event, "description");
          }}
          defaultValue={newTask.description}></textarea>
      </div>

      {/* Info */}
      <div className="w-full flex flex-col gap-2 sm:flex-row justify-evenly">
        <div className="text-xs flex flex-wrap gap-3 w-full items-end ">
          <Button variant="none" size={"i"} className=" text-xs w-max px-1">
            <label htmlFor="duration">
              <IconStopWatch height="14" />
            </label>
            {/* <p>{newTask.duration}</p> */}
            <input
              type="time"
              name=""
              step={1}
              id="duration"
              className="bg-transparent"
              onChange={(event) => changeDataInput(event, "duration")}
            />
          </Button>
          <Button variant="none" size={"i"} className=" text-xs w-max px-1 ">
            <label htmlFor="deadline">
              {/* <p>{newTask.deadline}</p> */}
              <IconCalendar height="14" />
            </label>
            <input
              type="date"
              placeholder="Fecha límite"
              name="fecha"
              id="deadline"
              className="bg-transparent bg-none"
              onChange={(event) => changeDataInput(event, "deadline")}
            />
          </Button>

          {/* <Button variant="none" size={"i"} className="">
            <IconFlag height="14" />
            <p>{newTask.priority}</p>
          </Button> */}

          <SelectPriority changePriority={changePriority} />
        </div>
        <div className="flex gap-2 justify-end items-end">
          <Button
            onClick={props.closeAdding}
            variant="none"
            size={"i"}
            className="border border-main-2 text-main-2 w-max px-2 text-sm">
            Cancelar
          </Button>
          <Button
            onClick={() => AddTask(newTask)}
            variant="none"
            size={"i"}
            className="bg-main-2 hover:bg-main-2 text-main-superlight w-max px-2 text-sm">
            Agregar
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default TaskCreateWrapper;
