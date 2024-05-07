import { Button } from "@/components/ui/button";
import HabitWrapper from "@/app/(main)/_components/HabitWrapper";

import { Ellipsis, Settings2 } from "lucide-react";
import TittleSection from "@/app/(main)/_components/TittleSection";

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

interface Habit {
  id: number;
  name: string;
  description: string;
  frequency: string;
  priority: string;
  category: HabitCategory;
}

const habitsPage = () => {
  const habits: Habit[] = [
    {
      id: 1,
      name: "Beber agua (3 litros)",
      description:
        "Habit 1 description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum excepturi temporibus veritatis. Hic odio beatae dolorem sint voluptatibus dicta facere accusantium est? Nam minima repellendus ea voluptatibus recusandae debitis.",
      frequency: "Todos los días",
      priority: "A",
      category: HabitCategory.A,
    },
    {
      id: 2,
      name: "Hacer ejercicios",
      description:
        "Habit 2 description. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      frequency: "4 veces por semana",
      priority: "B",
      category: HabitCategory.B,
    },
    {
      id: 3,
      name: "Programar",
      description:
        "Habit 3 description. Exercitationem rerum excepturi temporibus veritatis. Hic odio beatae dolorem sint voluptatibus dicta facere accusantium est? Nam minima repellendus ea voluptatibus recusandae debitis.",
      frequency: "3 veces por semana",
      priority: "C",
      category: HabitCategory.P,
    },
  ];

  return (
    <>
      <div className="w-[100vw] h-16 flex items-center justify-around bg-main-superlight dark:bg-main-superdark fixed">
        <div className="w-12"></div>
        <TittleSection>Mis hábitos</TittleSection>
        <div className="flex gap-2 w-12 justify-around">
          <Ellipsis className="h-4 w-4" />
          <Settings2 className="h-4 w-4" />
        </div>
      </div>
      <div className=" flex flex-col  mb-40 mt-24 ">
        {habits.map((habit) => (
          <HabitWrapper habit={habit} key={habit.id} />
        ))}
        <Button
          variant={"ghost"}
          className="flex mt-1 justify-center text-sm items-center text-main-extradark/50 gap-1 group hover:text-main-extradark/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          <p>Añadir hábito</p>
        </Button>
        {/* <HabitsTracker /> */}
      </div>
    </>
  );
};

export default habitsPage;
