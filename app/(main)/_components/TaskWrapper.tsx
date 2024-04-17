"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Circle,
  CircleCheck,
  Ellipsis,
  Flag,
  Trash,
} from "lucide-react";
import IconCalendar from "../Icons/FeaturesIcons/IconCalendar.jsx";
import IconFlag from "../Icons/FeaturesIcons/IconFlag";
import IconStopWatch from "../Icons/FeaturesIcons/IconStopWatch";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TaskModal from "./TaskModal";

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
  CompleteTask: (id: number) => void;
  DeleteTask: (id: number) => void;
  EditTask: (id: number) => void;
};

function TaskWrapper({ task, CompleteTask, DeleteTask, EditTask }: TaskProps) {
  let color = "";
  let colour = ``;

  switch (task.priority) {
    case "A":
      color = " stroke-[#0fbcf9] fill-[#0fbcf9]/[0.05] hover:fill-[#0fbcf9]";
      colour = "border-[#0fbcf9] bg-[#0fbcf9]/[0.02]";

      break;
    case "B":
      color = " stroke-main-2 fill-main-2/[0.05] hover:fill-main-2";
      colour = "border-main-2 bg-main-2/[0.02]";

      break;
    case "C":
      color = "  stroke-[#005bc5] fill-[#005bc5]/[0.05] hover:fill-[#005bc5]";
      colour = "border-[#005bc5] bg-[#005bc5]/[0.02]";

      break;
    case "D":
      color = " stroke-slate-500 fill-slate-500/[0.05] hover:fill-slate-500";
      colour = "border-[#0fbcf9] bg-[#0fbcf9]/[0.02]";

      break;
    default:
      color = " stroke-slate-500 fill-slate-500/[0.05] hover:fill-slate-500";
      colour = "border-[#0fbcf9] bg-[#0fbcf9]/[0.02]";
      break;
  }

  return (
    <Wrapper className="flex-col bg-white border-0 focus:ring-slate-950">
      {/* Header */}

      <div className="flex items-center">
        {/* Status */}
        <Button
          variant={"ghost"}
          size={"i"}
          className={`stroke-[.5] hover:bg-transparent  ${color}`}>
          {task.status ? (
            <CircleCheck
              className={`stroke-[2]  ${color}  `}
              height={18}
              onClick={() => CompleteTask(task.id)}
            />
          ) : (
            <Circle
              className={`stroke-[2]  ${color} `}
              height={18}
              onClick={() => CompleteTask(task.id)}
            />
          )}
        </Button>

        {/* Name */}

        <h5
          className={cn(
            "flex-1 text-sm font-normal text-slate-700 dark:text-white pl-1 ",
            task.status && "line-through text-slate-400 dark:text-slate-200"
          )}>
          {task.name}
        </h5>

        <Button
          variant={"ghost"}
          size={"i"}
          className=" opacity-0 group-hover:opacity-100 z-50"
          onClick={() => DeleteTask(task.id)}>
          <Trash height={16} />
        </Button>
        <Dialog>
          <DialogTrigger>
            <Button
              variant={"ghost"}
              size={"i"}
              onClick={() => {
                console.log(task.status);
              }}
              className=" opacity-0 group-hover:opacity-100 z-50">
              <Ellipsis height="16" />
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-[820px] h-[780px] top-[55px] left-[35%] shadow-4">
            <DialogHeader>
              <DialogTitle className="text-base">Lista de tareas 1</DialogTitle>
              <TaskModal
                task={task}
                EditTask={EditTask}
                DeleteTask={DeleteTask}
                CompleteTask={CompleteTask}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {/* Descripción */}
      <div className="">
        <p className="text-xs  dark:text-white  ">{task.description}</p>
      </div>

      {/* Info */}
      <div className="text-xs flex flex-row ">
        {task.duration && (
          <Badge variant="ghost">
            <IconStopWatch height="12" />
            <p>{task.duration}</p>
          </Badge>
        )}

        {task.deadline && (
          <Badge variant="ghost">
            <IconCalendar height="12" />
            <p>{task.deadline}</p>
          </Badge>
        )}

        {task.priority !== "none" && (
          <Badge variant="ghost">
            <IconFlag height="12" />
            <p>{task.priority}</p>
          </Badge>
        )}
      </div>
    </Wrapper>
  );
}

export default TaskWrapper;
