"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import { Calendar, Circle, CircleCheck, Flag } from "lucide-react";
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

type TaskProps = {
  // onClick?: React.MouseEventHandler;
  task: Task;
  // props: any;
  onClick?: () => void;
};

function TaskWrapper({ task, onClick }: TaskProps) {
  let color = "";
  let colour = ``;

  switch (task.priority) {
    case "A":
      color = " stroke-[#0fbcf9] fill-[#0fbcf9]/[0.05]";
      colour = "border-[#0fbcf9] bg-[#0fbcf9]/[0.02]";

      break;
    case "B":
      color = " stroke-main-2 fill-main-2/[0.05]";
      colour = "border-main-2 bg-main-2/[0.02]";

      break;
    case "C":
      color = "  stroke-[#005bc5] fill-[#005bc5]/[0.05]";
      colour = "border-[#005bc5] bg-[#005bc5]/[0.02]";

      break;
    case "D":
      color = " stroke-blue-800 fill-blue-800/[0.05]";
      colour = "border-[#0fbcf9] bg-[#0fbcf9]/[0.02]";

      break;
    default:
      color = " stroke-blue-800 fill-blue-800/[0.05]";
      colour = "border-[#0fbcf9] bg-[#0fbcf9]/[0.02]";
      break;
  }

  return (
    <>
      <Wrapper color={colour} className="flex-col">
        {/* Header */}

        <div className="flex items-center">
          {/* Status */}
          <Button
            variant={"ghost"}
            size={"i"}
            className={`stroke-[.5]  ${color} text-4xl `}>
            {task.status ? (
              <CircleCheck className={`stroke-[2]  ${color} `} />
            ) : (
              <Circle className={`stroke-[2]  ${color} `} />
            )}
          </Button>

          {/* Name */}
          {task.status ? (
            <h5
              className={cn(
                "flex-1 text-sm font-normal text-slate-700 dark:text-white pl-1 ",
                task.status && "line-through text-slate-400 dark:text-slate-200"
              )}>
              {task.name}
            </h5>
          ) : (
            <textarea
              defaultValue={task.name}
              placeholder="Añade una tarea"
              className=" flex-1 text-sm font-normal bg-transparent text-slate-700 dark:text-white resize-none w-full focus:outline-none active:outline-none h-6 pt-[2px]"></textarea>
          )}

          <Button
            variant={"ghost"}
            size={"i"}
            className=" opacity-0 group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots "
              viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
          </Button>
        </div>

        {/* Descripción */}
        <div className="">
          <textarea
            className="text-xs bg-transparent text-slate-700 dark:text-white resize-none w-full focus:outline-none active:outline-none h-5 pt-[2px] "
            placeholder="Añade una descripción"
            defaultValue={task.description}></textarea>
        </div>

        {/* Info */}
        <div className="text-xs flex flex-row ">
          {task.duration && (
            <Button variant="ghost" size={"xs"} className="">
              <IconStopWatch height="12" />
              {task.duration} min
            </Button>
          )}

          {task.deadline && (
            <Button variant="ghost" size={"xs"} className=" text-xs ">
              <IconCalendar height="12" />
              <p>{task.deadline}</p>
            </Button>
          )}

          {task.priority !== "none" && (
            <Button variant="ghost" size={"xs"} className="w-12">
              <IconFlag height="12" />
              <p>{task.priority}</p>
            </Button>
          )}
        </div>
      </Wrapper>
    </>
  );
}

export default TaskWrapper;
