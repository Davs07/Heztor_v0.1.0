"use client";
import { useEffect, useState } from "react";
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

interface Task {
  id: number;
  name: string;
  description?: string;
  deadline?: string;
  duration?: string;
  priority?: string;
  startTime?: string;
  endTime?: string;
  status: boolean;
}

const tasks: Task[] = [
  {
    id: 10000,
    name: "Cocinar",
    description: "Descripción de la tarea 1",
    startTime: "2023-06-12T10:30",
    endTime: "2023-06-12T12:30",
    priority: "A",
    status: false,
  },
  {
    id: 10001,
    name: "Asistir al curso de Finanzas Corporativas",
    description:
      "Este curso de Finanzas me ayudará a adquirir conocimientos de la vida financiera corporativa.",
    startTime: "2023-06-12T12:30",
    endTime: "2023-06-12T15:00",
    priority: "B",
    status: false,
  },
  // Agregar más tareas aquí
  {
    id: 10002,
    name: "Reunión con el equipo de proyecto",
    description: "Reunión semanal para discutir el progreso del proyecto.",
    startTime: "2023-06-12T15:30",
    endTime: "2023-06-12T17:00",
    priority: "C",
    status: false,
  },
  {
    id: 10003,
    name: "Hacer ejercicio",
    description: "Ejercicio físico para mantenerse saludable.",
    startTime: "2023-06-12T18:00",
    endTime: "2023-06-12T19:00",
    priority: "B",
    status: false,
  },
  {
    id: 10004,
    name: "Lavar ropa",
    description: "Lavar la ropa antes de dormir.",
    startTime: "2023-06-12T20:00",
    endTime: "2023-06-12T21:00",
    priority: "A",
    status: false,
  },
  {
    id: 10005,
    name: "Ir al cine",
    description: "Ir al cine con mis amigos.",
    startTime: "2023-06-12T22:00",
    endTime: "2023-06-12T23:00",
    priority: "C",
    status: false,
  },
  {
    id: 10006,
    name: "Ir al supermercado",
    description: "Ir al supermercado antes de dormir.",
    startTime: "2023-06-12T23:30",
    endTime: "2023-06-13T00:30",
    priority: "B",
    status: false,
  },
];

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
      <div className="h-full w-96 bg-white">
        <div className="bg-white dark:bg-gray-900 overflow-auto w-full p-2  ">
          <Card className="w-full">
            <CardHeader className="border-b flex items-center justify-center  w-full bg-white sticky top-0">
              <div className="flex items-center space-x-4">
                <Button size="icon" variant="ghost">
                  <ChevronLeftIcon className="h-5 w-5" />
                </Button>
                <CalendarIcon className="h-6 w-6" />
                <div className="text-sm font-medium leading-none">
                  April 26, 2024
                </div>
                <Button size="icon" variant="ghost">
                  <ChevronRightIcon className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0 ">
              <div className="grid border-t border-gray-200 dark:border-gray-800 last:border-b divide-y divide-gray-200 dark:divide-gray-800">
                {tasks.map((task) => (
                  <div className="flex items-center p-4 gap-4">
                    <div className="text-sm w-16 font-medium">
                      {task.startTime?.split("T")[1]}
                    </div>
                    <div className="flex-1">
                      <Card>
                        <CardContent className="p-2">
                          <div className="grid gap-1.5">
                            <div className="text-sm font-medium">
                              {task.name}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

/* 
<div className="w-full h-full flex  flex-col justify-center items-center">
        <div>
          <p>{time.toLocaleTimeString()}</p>

          <div>
            {tasks.map(
              (task) =>
                task.startTime && (
                  <>
                    <p>{task.startTime.split("T")[1]}</p>

                    <div className="h-max flex flex-row gap-2">
                      <div className="min-h-full w-[2px] rounded-xl bg-slate-300"></div>
                      <Wrapper className="w-[300px] flex-col">
                        <div className="text-sm">
                          <p>{task.name}</p>
                        </div>
                        <div className="text-xs">
                          <p>details</p>
                        </div>
                      </Wrapper>
                    </div>
                  </>
                )
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[400px] h-full flex flex-col justify-start items-center p-4  gap-4">
        {POMODORO}
        {/* <Pomodoro /> */
// <HeztorChat />

// * CALENDAR DAY *
/*   <div className="bg-white dark:bg-gray-900 overflow-auto w-full p-2  ">
    <Card className="w-full">
      <CardHeader className="border-b flex items-center justify-center  w-full bg-white sticky top-0">
        <div className="flex items-center space-x-4">
          <Button size="icon" variant="ghost">
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          <CalendarIcon className="h-6 w-6" />
          <div className="text-sm font-medium leading-none">
            April 26, 2024
          </div>
          <Button size="icon" variant="ghost">
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 ">
        <div className="grid border-t border-gray-200 dark:border-gray-800 last:border-b divide-y divide-gray-200 dark:divide-gray-800">
          {tasks.map((task) => (
            <div className="flex items-center p-4 gap-4">
              <div className="text-sm w-16 font-medium">
                {task.startTime?.split("T")[1]}
              </div>
              <div className="flex-1">
                <Card>
                  <CardContent className="p-2">
                    <div className="grid gap-1.5">
                      <div className="text-sm font-medium">
                        {task.name}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
</div> */
