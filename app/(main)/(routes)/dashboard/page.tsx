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

            <Card>
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
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>
                    A quick overview of your most recent projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          alt="Project logo"
                          className="rounded-lg"
                          height={48}
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "48/48",
                            objectFit: "cover",
                          }}
                          width={48}
                        />
                        <div>
                          <h4 className="text-lg font-semibold">
                            Acme Website
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Redesign and development
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          alt="Project logo"
                          className="rounded-lg"
                          height={48}
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "48/48",
                            objectFit: "cover",
                          }}
                          width={48}
                        />
                        <div>
                          <h4 className="text-lg font-semibold">
                            Marketing Campaign
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Social media and advertising
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          alt="Project logo"
                          className="rounded-lg"
                          height={48}
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "48/48",
                            objectFit: "cover",
                          }}
                          width={48}
                        />
                        <div>
                          <h4 className="text-lg font-semibold">
                            Mobile App Development
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            iOS and Android
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>
                    A list of your upcoming tasks and deadlines.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                          <CalendarDaysIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">
                            Finalize project proposal
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Due tomorrow
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                          <BriefcaseIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">
                            Prepare client presentation
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Due in 2 days
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                          <UsersIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">
                            Schedule team meeting
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Due in 5 days
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
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
