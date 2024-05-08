"use client";
import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import { Button } from "@/components/ui/button";
import { CodeXml, Sun } from "lucide-react";
import {
  Apple,
  BookOpenText,
  BriefcaseBusiness,
  Brush,
  Coins,
  Cross,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  Popcorn,
  Rocket,
  SquareUserRound,
  TreeDeciduous,
  TrendingUp,
  Workflow,
} from "lucide-react";

/* interface Habit {
  id: number;
  name: string;
  description: string;
  frequency: string;
  priority: string;
  category: HabitCategory;
} */

interface Habit {
  id: number;
  name: string;
  description: string;
  category: string;
  frequency: string;
  priority: Priority;
}
type Priority = "P1" | "P2" | "P3" | "P4";

enum HabitCategory {
  A = "Salud",
  B = "Ejercicio",
  C = "Educación",
  D = "Productividad",
  E = "Profesión",
  F = "Trabajo",
  G = "Creatividad",
  H = "Finanzas",
  I = "Relaciones",
  J = "Ocio",
  K = "Alimentación",
  L = "Autocuidado",
  M = "Organización",
  N = "Medio ambiente",
  O = "Desarrollo Personal",
  P = "Programar",
}

// Define una interfaz para el objeto que contiene el ícono y el color
interface CategoryProperties {
  icon: React.ReactNode;
  color: string;
}

// Extiende el enum HabitCategory con las propiedades de ícono y color
type ExtendedHabitCategory = Record<HabitCategory, CategoryProperties>;

const categoryProperties: ExtendedHabitCategory = {
  [HabitCategory.A]: {
    icon: <Cross className="w-8 h-8 stroke-rose-700 " />,
    color: "#ff0000",
  },
  [HabitCategory.B]: {
    icon: <Dumbbell className="w-8 h-8" />,
    color: "#00ff00",
  },
  [HabitCategory.C]: {
    icon: <BookOpenText className="w-8 h-8" />,
    color: "#0000ff",
  },
  [HabitCategory.D]: {
    icon: <TrendingUp className="w-8 h-8" />,
    color: "#ffff00",
  },
  [HabitCategory.E]: {
    icon: <GraduationCap className="w-8 h-8" />,
    color: "#ff00ff",
  },
  [HabitCategory.F]: {
    icon: <BriefcaseBusiness className="w-8 h-8" />,
    color: "#00ffff",
  },
  [HabitCategory.G]: {
    icon: <Brush className="w-8 h-8       " />,
    color: "#ff8000",
  },
  [HabitCategory.H]: { icon: <Coins className="w-8 h-8" />, color: "#8000ff" },
  [HabitCategory.I]: {
    icon: <HeartHandshake className="w-8 h-8" />,
    color: "#008000",
  },
  [HabitCategory.J]: {
    icon: <Popcorn className="w-8 h-8" />,
    color: "#00ff00",
  },
  [HabitCategory.K]: {
    icon: <Apple className="w-8 h-8     " />,
    color: "#ff0000",
  },
  [HabitCategory.L]: {
    icon: <SquareUserRound className="w-8 h-8" />,
    color: "#0000ff",
  },
  [HabitCategory.M]: {
    icon: <Workflow className="w-8 h-8" />,
    color: "#ffff00",
  },
  [HabitCategory.N]: {
    icon: <TreeDeciduous className="w-8 h-8" />,
    color: "#ff00ff",
  },
  [HabitCategory.O]: {
    icon: <Rocket className="w-8 h-8     " />,
    color: "#00ffff",
  },
  [HabitCategory.P]: {
    icon: <CodeXml className="w-8 h-8     " />,

    color: "#00ffff",
  },
};

function HabitWrapper({ habit }: { habit: Habit }) {
  const mode = 7;
  const divs = [];
  const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  const daysDivs = [];

  for (let i = 0; i < mode; i++) {
    divs.push(
      <div
        key={i}
        className="h-8 w-8 border-2 border-main-extradark/30 rounded-lg content-center text-center">
        {i + 1}
      </div>
    );
  }

  for (let index = 0; index < days.length; index++) {
    daysDivs.push(
      <p key={index} className="text-xs text-center">
        {days[index]}
      </p>
    );
  }

  let colour = ``;

  switch (habit.priority) {
    case "P1":
      colour = " border-[#0fbcf9]* bg-[#0fbcf9]/[0.02]";
      break;
    case "P2":
      colour = "border-main-2* bg-main-2/[0.02]";
      break;
    case "P3":
      colour = "border-[#005bc5]* bg-[#005bc5]/[0.02]";
      break;
    case "P4":
      colour = "border-[#0fbcf9]* bg-[#0fbcf9]/[0.02]";
      break;
    default:
      break;
  }

  // console.log(habit.categoryProperties);

  // console.log(categoryProperties[habit.category].icon,)

  return (
    <Wrapper className="flex flex-col  justify-between items-center gap-3">
      <div className=" w-full flex justify-between">
        <div>
          <h5>{habit.name}</h5>
        </div>
        <Button
          variant={"ghost"}
          size={"i"}
          className=" opacity-0 group-hover:opacity-100 self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>
        </Button>
      </div>

      {/* content: days */}

      <div className="w-max flex flex-col items-start">
        <div className="flex flex-row w-full justify-between gap-5 text-center">
          {daysDivs}
        </div>
        <div className="flex flex-row w-full justify-between gap-5">{divs}</div>
      </div>

      {/* footer: info */}
      <div className="flex justify-start gap-2 w-full">
        <div className="text-xs flex gap-1 text-slate-400  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            className="bi bi-calendar3-week"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
            <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
          <p>{habit.frequency}</p>
        </div>
        <div className="text-xs flex gap-1 text-slate-400  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="bi bi-flag"
            viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z" />
          </svg>
          <p>{habit.priority}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default HabitWrapper;
