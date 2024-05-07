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
    source: "/dashboard",
    icon: <IconDashboard />,
  },
  {
    title: "Control",
    src: "/control/day",
    source: "/control",
    icon: <IconControl />,
  },
  {
    title: "Gestión",
    src: "/managment/day",
    source: "/managment",

    icon: <IconGestion />,
  },
  {
    title: "Noción",
    src: "/notion/day",
    source: "/notion",

    icon: <IconNote />,
  },

  {
    title: "Estadísticas",
    src: "/stats",
    source: "/stats",
    icon: <IconStats />,
  },
];

export { navigation };
