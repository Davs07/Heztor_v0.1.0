import IconDashboard from "../Icons/NavigationLinks/IconDashboard";
import IconTask from "../Icons/NavigationLinks/IconTask";
import IconHabit from "../Icons/NavigationLinks/IconHabit";
import IconFinance from "../Icons/NavigationLinks/IconFinance";
import IconStats from "../Icons/NavigationLinks/IconStats";
import IconNote from "../Icons/NavigationLinks/IconNote";
import { Goal } from "lucide-react";

const navigation = [
  {
    title: "Vista General",
    src: "/dashboard",
    icon: <IconDashboard />,
  },
  {
    title: "Metas",
    src: "/goals",
    icon: <Goal className="h-[1.2rem] w-[1.2rem] " />,
  },
  {
    title: "Tareas",
    src: "/tasks",
    icon: <IconTask />,
  },
  {
    title: "Hábitos",
    src: "/habits",
    icon: <IconHabit />,
  },
  {
    title: "Notas",
    src: "/notes",
    icon: <IconNote />,
  },
  {
    title: "Finanzas",
    src: "/finance",
    icon: <IconFinance />,
  },
  {
    title: "Estadísticas",
    src: "/stats",
    icon: <IconStats />,
  },
];

export { navigation };
