"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UsersIcon,
} from "lucide-react";

import { AreaChartHero } from "../../_components/ChartComponent";
import { Calendar } from "@/components/ui/calendar";
import TaskDashboard from "../../_components/TaskDashboard";

// Genera un identificador único con la marca de tiempo actual y un valor aleatorio
const generateUniversalId = (): string => {
  // Obtiene la marca de tiempo actual en milisegundos
  const timestamp = new Date().getTime();
  // Genera un valor aleatorio entre 0 y 9999999
  const randomValue = Math.floor(Math.random() * 10000000);
  // Combina la marca de tiempo y el valor aleatorio para crear el id universal
  const universalId = `${timestamp}${randomValue}`;

  return universalId;
};

// Ejemplo de uso

type Priority = "P1" | "P2" | "P3" | "P4";

interface Task {
  id: string;
  name: string;
  description?: string;
  dueDate: Date;
  priority: Priority;
  idProject?: string;
  status: boolean;
}

interface Event {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  idProject?: string;
  status: boolean;
}

// Generación de datos ficticios para tareas
const generateTasks = (): Task[] => {
  const tasks: Task[] = [];

  for (let i = 1; i <= 3; i++) {
    const task: Task = {
      id: generateUniversalId(),
      name: `Task ${i}`,
      description: `Description for Task ${i}`,
      dueDate: new Date(`2024-05-0${i}`),
      priority: `P${i}` as Priority,
      status: false,
    };

    tasks.push(task);
  }

  return tasks;
};

// Generación de datos ficticios para eventos
const generateEvents = (): Event[] => {
  const events: Event[] = [];

  for (let i = 1; i <= 3; i++) {
    const event: Event = {
      id: generateUniversalId(),
      name: `Event ${i}`,
      description: `Description for Event ${i}`,
      startDate: new Date(`2024-05-0${i}T08:00:00`),
      endDate: new Date(`2024-05-0${i}T18:00:00`),
      status: false,
    };

    events.push(event);
  }

  return events;
};

// Ejemplo de uso
const tasks = generateTasks();
const events = generateEvents();

console.log("Tasks:", tasks);
console.log("Events:", events);

const DashboardPage = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentTime = new Date();
  function saludarSegunHora() {
    const currentHour = currentTime.getHours();

    let saludo;

    if (currentHour >= 5 && currentHour < 12) {
      saludo = "Buenos días";
    } else if (currentHour >= 12 && currentHour < 18) {
      saludo = "Buenas tardes";
    } else {
      saludo = "Buenas noches";
    }

    return saludo + ", Davy";
  }

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className=" w-full h-full flex-row flex ">
      <div className="flex-1 overflow-auto">
        <main className="p-6 grid gap-2 ">
          <div>
            <CardTitle>{saludarSegunHora()}</CardTitle>
            <CardDescription>
              ¡Gestionemos tu día satisfactoriamente!
            </CardDescription>
          </div>
          <div className="grid gap-6  lg:grid-cols-2">
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold">Projects</h3>
                  <p className="text-4xl font-bold">12</p>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold">Tasks</h3>
                  <p className="text-4xl font-bold">48</p>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold">Deadlines</h3>
                  <p className="text-4xl font-bold">6</p>
                </div>
              </div>
            </CardContent>

            <Card className="border-none">
              <CardHeader>
                <CardTitle>Actividad</CardTitle>
                <CardDescription>Esta semana ▿</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChartHero />
              </CardContent>
            </Card>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent>Ori</CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
      <div className="h-full w-96 bg-white  overflow-auto">
        <div className="flex justify-center">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
        <div className="bg-white dark:bg-gray-900 overflow-auto w-full p-2  ">
          <TaskDashboard tasks={tasks} events={events} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
