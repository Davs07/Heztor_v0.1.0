"use client";
import { useEffect, useState } from "react";
import TaskWrapper from "../../_components/TaskWrapper";
import Wrapper from "../../_components/Wrapper";

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
    <div className=" w-full h-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
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
    </div>
  );
};

export default DashboardPage;
