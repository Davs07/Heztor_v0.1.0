import { AlignLeft, Plus, PlusIcon } from "lucide-react";
import * as React from "react";
import IconCalendarDay from "../Icons/Calendar/IconCalendarDay";
import IconCalendarWeek from "../Icons/Calendar/IconCalendarWeek";
import IconCalendarMonth from "../Icons/Calendar/IconCalendarMonth";

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
    name: "English dsadasd asd asdsa dasd asd as",
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
    <div className="w-full p-3 pt-8 flex flex-col gap-4 text-sm">
      <ul className="flex flex-col gap-2">
        <li className="flex  items-center ">
          <IconCalendarDay height={12} width={24} />
          <p>Día</p>
        </li>
        <li className="flex items-center">
          <IconCalendarWeek height={12} width={24} />
          <p>Semana</p>
        </li>
        <li className="flex  items-center  ">
          <IconCalendarMonth height={12} width={24} />
          <p>Mes</p>
        </li>
      </ul>

      <ul className="flex flex-col gap-2">
        <p className="font-semibold text-slate-500">Favoritos</p>
        {taskList
          .filter((task) => task.favorite)
          .map((task) => (
            <li key={task.id} className="flex items-center h-5 ">
              <AlignLeft height={12} className="min-w-6"/>
              <p className="line-clamp-1">{task.name}</p>
            </li>
          ))}
      </ul>

      <ul className="flex flex-col   gap-2">
        <div className="flex items-center justify-between font-semibold text-slate-500">
          <p className="">Mis proyectos</p>
          <PlusIcon height={16} width={24} />
        </div>
        {taskList.map((task) => (
          <li
            key={task.id}
            className=" flex flex-row items-center w-full   ">
            <AlignLeft height={12} className="min-w-6" />
            <p className="line-clamp-1 ">{task.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarOptions;
