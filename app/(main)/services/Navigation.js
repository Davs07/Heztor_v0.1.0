import IconDashboard from "../Icons/NavigationLinks/IconDashboard";
import IconTask from "../Icons/NavigationLinks/IconTask";
import IconHabit from "../Icons/NavigationLinks/IconHabit";
import IconFinance from "../Icons/NavigationLinks/IconFinance";
import IconStats from "../Icons/NavigationLinks/IconStats";
import IconNote from "../Icons/NavigationLinks/IconNote";
import { Goal } from "lucide-react";
import { IconControl } from "../Icons/NavigationLinks/IconControl";
import { IconGestion } from "../Icons/NavigationLinks/IconGestion";

const navigation = [
  {
    title: "Vista General",
    src: "/dashboard",
    icon: <IconDashboard />,
  },
  {
    title: "Control",
    src: "/habits",
    icon: <IconControl />,
  },
  {
    title: "Gestión",
    src: "/tasks",
    icon: <IconGestion />,
  },
  {
    title: "Noción",
    src: "/notes",
    icon: <IconNote />,
  },
  // {
  //   title: "Finanzas",
  //   src: "/finance",
  //   icon: <IconFinance />,
  // },
  {
    title: "Estadísticas",
    src: "/finance",
    icon: <IconStats />,
  },
];

export { navigation };
