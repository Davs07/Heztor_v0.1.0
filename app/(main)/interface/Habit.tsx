import { Apple, BookOpenText, BriefcaseBusiness, Brush, Coins, Cross, Dumbbell, GraduationCap, HeartHandshake, Popcorn, Rocket, SquareUserRound, TreeDeciduous, TrendingUp, Workflow } from "lucide-react";


enum HabitCategory {
    A = "Salud",
    B = "Ejercicio",
    C = "Educación",
    D = "Productividad",
    E = "Profesión",
    F = "Trabajo",
    G = "Creatividad",
    H = "Finanzas",
    I = "Relaciones",
    J = "Ocio",
    K = "Alimentación",
    L = "Autocuidado",
    M = "Organización",
    N = "Medio ambiente",
    O = "Desarrollo Personal",
  }
  
  // Define una interfaz para el objeto que contiene el ícono y el color
  interface CategoryProperties {
    icon: React.ReactNode;
    color: string;
  }
  
  // Extiende el enum HabitCategory con las propiedades de ícono y color
  type ExtendedHabitCategory = Record<HabitCategory, CategoryProperties>;
  
  const categoryProperties: ExtendedHabitCategory = {
    [HabitCategory.A]: { icon: <Cross />, color: "#ff0000" },
    [HabitCategory.B]: { icon: <Dumbbell />, color: "#00ff00" },
    [HabitCategory.C]: { icon: <BookOpenText />, color: "#0000ff" },
    [HabitCategory.D]: { icon: <TrendingUp />, color: "#ffff00" },
    [HabitCategory.E]: { icon: <GraduationCap />, color: "#ff00ff" },
    [HabitCategory.F]: { icon: <BriefcaseBusiness />, color: "#00ffff" },
    [HabitCategory.G]: { icon: <Brush />, color: "#ff8000" },
    [HabitCategory.H]: { icon: <Coins />, color: "#8000ff" },
    [HabitCategory.I]: { icon: <HeartHandshake />, color: "#008000" },
    [HabitCategory.J]: { icon: <Popcorn />, color: "#00ff00" },
    [HabitCategory.K]: { icon: <Apple />, color: "#ff0000" },
    [HabitCategory.L]: { icon: <SquareUserRound />, color: "#0000ff" },
    [HabitCategory.M]: { icon: <Workflow />, color: "#ffff00" },
    [HabitCategory.N]: { icon: <TreeDeciduous />, color: "#ff00ff" },
    [HabitCategory.O]: { icon: <Rocket />, color: "#00ffff" },
  };
  
  
  interface Habit {
    id: number;
    name: string;
    description: string;
    frequency: string;
    priority: string;
    category: HabitCategory;
  }

  export { categoryProperties, HabitCategory,  };