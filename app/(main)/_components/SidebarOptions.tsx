import { AlignLeft } from "lucide-react";
import * as React from "react";

interface taskLists {
  name: string;
  id: number;
  description?: string;
  favorite: boolean;
}

const taskList: Array<taskLists> = [
  {
    name: "StartUp",
    id: 1,
    description:
      "Una lista de las tareas y pasos que me ayudarán a fundar mi primera startup",
    favorite: true,
  },
  {
    name: "English",
    id: 2,
    description: "Una lista de los temas que me ayudarán a mejorar mi inglés",
    favorite: false,
  },
  {
    name: "Books",
    id: 3,
    description:
      "Una lista de los libros que me ayudarán a aprender algo nuevo",
    favorite: false,
  },
  {
    name: "Coding",
    id: 4,
    description: "Un proyecto para mejorar mis habilidades de programación",
    favorite: true,
  },
  {
    name: "Work",
    id: 5,
    description:
      "Una lista de las tareas y pasos que me ayudarán a mejorar mi trabajo",
    favorite: false,
  },
];

const SidebarOptions: React.FC = () => {
  return (
    <div className="w-full p-3 pt-8 flex flex-col gap-3 text-sm">
      <ul className="flex flex-col gap-1">
        <li>
          <p>Día</p>
        </li>
        <li>
          <p>Semana</p>
        </li>
        <li>
          <p>Mes</p>
        </li>
      </ul>

      <ul className="flex flex-col gap-1">
        <p className="font-semibold text-slate-500">Favoritos</p>
        {taskList
          .filter((task) => task.favorite)
          .map((task) => (
            <li key={task.id} className="flex items-center ">
              <AlignLeft height={12} />
              <p>{task.name}</p>
            </li>
          ))}
      </ul>

      <ul className="flex flex-col gap-1">
        <p className="font-semibold text-slate-500">Mis proyectos</p>
        {taskList.map((task) => (
          <li key={task.id} className="flex items-center ">
            <AlignLeft height={12} />
            <p>{task.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarOptions;
