"use client";
import { useEffect, useState } from "react";
import TaskWrapper from "../../_components/TaskWrapper";
import Wrapper from "../../_components/Wrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Pomodoro from "../../_components/Pomodoro";
import HeztorChat from "../../_components/HeztorChat";

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

  const EditTask = (id: number, taskEdited: Task) => {
    console.log(tasks.filter((t) => t.id !== id));
  };

  const DeleteTask = (id: number) => {
    console.log(tasks.filter((t) => t.id !== id));
  };

  const CompleteTask = (id: number) => {
    console.log(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div className=" w-full h-full flex-row flex ">
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
        {/* POMODORO */}
        {/* <Pomodoro /> */}
        <HeztorChat />

        {/* CALENDAR DAY */}
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
