"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
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
  onClick?: () => void;
  AddTask: AddTaskFunction;
  closeAdding: () => void;
};

function TaskCreateWrapper({ task, onClick, AddTask, ...props }: TaskProps) {
  const [newTask, setNewTask] = useState<Task>(task);

  const saveTask = () => {
    setNewTask({
      id: task.id,
      name: newTask.name,
      description: newTask.description,
      deadline: newTask.deadline,
      duration: newTask.duration,
      priority: newTask.priority,
      status: newTask.status,
    });
  };

  const changeName = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask({ ...newTask, name: event.target.value.trim() });
  };

  return (
    <Wrapper
      className="flex-col bg-transparent  text-white border-main-2 border "
      onClick={saveTask}
      {...props}>
      {/* Header */}

      <div className="flex items-center">
        {/* Name */}

        <textarea
          defaultValue={newTask.name}
          placeholder="Nombre de la tarea"
          onChange={changeName}
          className=" flex-1 text-sm font-normal bg-transparent text-slate-900 placeholder:text-slate-400 dark:text-white resize-none w-full focus:outline-none active:outline-none h-6 pt-[2px]"></textarea>
      </div>

      {/* Descripción */}
      <div className="">
        <textarea
          className="text-xs bg-transparent text-slate-500 dark:text-white resize-none w-full focus:outline-none active:outline-none h-5 pt-[2px] "
          placeholder="Descripción"
          onChange={(e) => {
            setNewTask({ ...newTask, description: e.target.value.trim() });
          }}
          defaultValue={newTask.description}></textarea>
      </div>

      {/* Info */}
      <div className="w-full flex flex-row justify-evenly">
        <div className="text-xs flex flex-row gap-3 w-full items-end ">
          <Button
            variant="none"
            size={"i"}
            className="border border-main-2  text-main-2">
            <IconStopWatch height="14" />
            {newTask.duration}
          </Button>

          <Button variant="none" size={"i"} className=" text-xs ">
            <IconCalendar height="14" />
            <p>{newTask.deadline}</p>
          </Button>

          <Button variant="none" size={"i"} className="">
            <IconFlag height="14" />
            <p>{newTask.priority}</p>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={props.closeAdding}
            variant="none"
            size={"i"}
            className="border border-main-2 text-main-2">
            <X height="16" />
          </Button>
          <Button
            onClick={() => AddTask(newTask)}
            variant="none"
            size={"i"}
            className="bg-main-2 hover:bg-main-2 text-main-superlight w-16 text-sm">
            <SendHorizontal height="16" />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default TaskCreateWrapper;
