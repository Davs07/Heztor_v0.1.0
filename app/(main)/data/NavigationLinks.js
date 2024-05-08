import IconDashboard from "../Icons/NavigationLinks/IconDashboard";
import IconTask from "../Icons/NavigationLinks/IconTask";
import IconHabit from "../Icons/NavigationLinks/IconHabit";
import IconFinance from "../Icons/NavigationLinks/IconFinance";
import IconStats from "../Icons/NavigationLinks/IconStats";
import IconNote from "../Icons/NavigationLinks/IconNote";
import {
  BarChart2,
  BarChart3,
  FolderCog,
  FolderDot,
  FolderDotIcon,
  FolderKanban,
  FolderPen,
  Goal,
  Home,
} from "lucide-react";
import { IconControl } from "../Icons/NavigationLinks/IconControl";
import { IconGestion } from "../Icons/NavigationLinks/IconGestion";

const navigation = [
  {
    title: "Vista General",
    src: "/dashboard",
    source: "/dashboard",
    icon: <Home size={18} strokeWidth={2} />,
  },
  {
    title: "Control",
    src: "/control/day",
    source: "/control",
    icon: <FolderCog size={18}/>,
  },
  {
    title: "Gestión",
    src: "/managment/day",
    source: "/managment",
    icon: <FolderKanban size={18}/>,
  },
  {
    title: "Noción",
    src: "/notion/day",
    source: "/notion",
    icon: <FolderPen size={18}/>,
  },

  {
    title: "Estadísticas",
    src: "/stats",
    source: "/stats",
    icon: <BarChart3 size={18} />,
  },
];

export { navigation };
