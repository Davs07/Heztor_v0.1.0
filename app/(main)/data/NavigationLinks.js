import {
  BadgeDollarSign,
  FolderKanban,
  FolderPen,
  Home,
  NotebookPen,
  Pen,
  SquareCheck,
  SquareCheckBig,
  WalletMinimal,
} from "lucide-react";

const navigation = [
  {
    title: "Vista General",
    src: "/dashboard",
    source: "/dashboard",
    icon: <Home size={18} />,
  },
  {
    title: "Hábitos",
    src: "/habits/day",
    source: "/habits",
    icon: <SquareCheck size={18} />,
  },
  {
    title: "Diario",
    src: "/journal",
    source: "/journal",
    icon: <Pen size={18} />,
  },
  {
    title: "Proyectos",
    src: "/projects/day",
    source: "/projects",
    icon: <FolderKanban size={18} />,
  },
  {
    title: "Carpeta",
    src: "/folder/day",
    source: "/folder",
    icon: <FolderPen size={18} />,
  },
  {
    title: "Finanzas",
    src: "/finance",
    source: "/finance",
    icon: <WalletMinimal size={18} />,
  },
];

export { navigation };
