import { Button } from "@/components/ui/button";
import React from "react";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import { Circle, CircleCheck } from "lucide-react";

function TaskWrapper({ task }: { task: any }) {
  let color = "";

  switch (task.priority) {
    case "A":
      color = " stroke-[#0fbcf9] fill-[#0fbcf9]/[0.05]";
      break;
    case "B":
      color = " stroke-main-2 fill-main-2/[0.05]";
      break;
    case "C":
      color = "  stroke-[#005bc5] fill-[#005bc5]/[0.05]";
      break;
    case "D":
      color = " stroke-blue-800 fill-blue-800/[0.05]";
      break;
    default:
      break;
  }
  let colour = ``;

  switch (task.priority) {
    case "A":
      colour = "border-[#0fbcf9] bg-[#0fbcf9]/[0.02]";
      break;
    case "B":
      colour = "border-main-2 bg-main-2/[0.02]";
      break;
    case "C":
      colour = "border-[#005bc5] bg-[#005bc5]/[0.02]";
      break;
    case "D":
      colour = "border-[#0fbcf9] bg-[#0fbcf9]/[0.02]";
      break;
    default:
      colour = "bg-[#0fbcf9]/[0.02]";
      break;
  }

  return (
    <>
      <Wrapper color={colour} className="flex-col">
        <div className="flex items-center">
          <Button
            variant={"ghost"}
            size={"i"}
            className={`stroke-[.5]  ${color} text-4xl `}>
            {task.status ? (
              /*  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.535 6.381l-4.95 4.95l-2.12-2.121a1 1 0 0 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0l5.586-5.586a1 1 0 0 0-1.415-1.415" />
              </svg> */
              /*  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512">
                <path d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m113-303L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg> */
              <CircleCheck className={`stroke-[2]  ${color} `} />
            ) : (
              /*   <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  opacity={`${!task.status ? "0.1" : "0.9"} `}
                />
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8" />
              </svg> */
              <Circle className={`stroke-[2]  ${color} `} />
            )}
          </Button>

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
        <div className="">
          {/* <p className="text-xs ml-7">{task.description}</p> */}
          <textarea
            className="text-xs bg-transparent text-slate-700 dark:text-white resize-none w-full focus:outline-none active:outline-none h-5 pt-[2px] "
            placeholder="Añade una descripción"
            defaultValue={task.description}></textarea>
        </div>
        <div className="text-xs flex flex-row ">
          {task.duration && (
            <Button variant="ghost" size={"xs"} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-stopwatch"
                viewBox="0 0 16 16">
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
              </svg>
              {task.duration} min
            </Button>
          )}

          {task.deadline && (
            <Button variant="ghost" size={"xs"} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-stopwatch"
                viewBox="0 0 16 16">
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              <p>{task.deadline}</p>
            </Button>
          )}

          {task.priority !== "none" && (
            <Button variant="ghost" size={"xs"} className="w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-flag"
                viewBox="0 0 16 16">
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z" />
              </svg>
              <p>{task.priority}</p>
            </Button>
          )}
        </div>
      </Wrapper>
    </>
  );
}

export default TaskWrapper;
