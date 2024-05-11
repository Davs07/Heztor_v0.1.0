"use client";

import { Button } from "@/components/ui/button";
import HabitWrapper from "@/app/(main)/_components/HabitWrapper";

import { Ellipsis, Settings2 } from "lucide-react";
import TittleSection from "@/app/(main)/_components/TittleSection";

import { controlCollection } from "@/app/services/data";
import { useState } from "react";

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

type Priority = "P1" | "P2" | "P3" | "P4";

interface Habit {
  id: number;
  name: string;
  description: string;
  category: string;
  frequency: string;
  priority: Priority;
}

const generateUniqueId = () => {
  const timestamp = new Date().getTime(); // Obtener la marca de tiempo actual
  const randomSuffix = Math.floor(Math.random() * 10000); // Generar un sufijo aleatorio
  // return `${timestamp}-${randomSuffix}`;
  return timestamp;
};

const habitsPage = () => {
  const [habits, setHabits] = useState(controlCollection.habits);
  const agregarHabit = () => {
    // Lógica para agregar la nueva tarea
    const nuevaTarea: Habit = {
      id: generateUniqueId(), // Generar un ID único para la nueva tarea
      name: "Nueva tarea",
      description: "Descripción de la nueva tarea",
      frequency: "Frecuencia de la nueva tarea",
      priority: "P1",
      category: "sa", // Puedes asignar una categoría predeterminada o dejarla en blanco
    };

    // Actualizar el estado con la nueva tarea
    setHabits([...habits, nuevaTarea]);
  };

  return (
    <>
      <div className="w-full h-16 flex items-center justify-around bg-main-superlight dark:bg-main-superdark fixed">
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
          onClick={agregarHabit}
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
      </div>
    </>
  );
};

export default habitsPage;
