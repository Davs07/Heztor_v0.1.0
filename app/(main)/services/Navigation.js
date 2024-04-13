import IconDashboard from "../Icons/NavigationLinks/IconDashboard";
import IconTask from "../Icons/NavigationLinks/IconTask";
import IconHabit from "../Icons/NavigationLinks/IconHabit";
import IconFinance from "../Icons/NavigationLinks/IconFinance";
import IconStats from "../Icons/NavigationLinks/IconStats";

const navigation = [
  {
    title: "Vista General",
    src: "/dashboard",
    icon: <IconDashboard />,
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
