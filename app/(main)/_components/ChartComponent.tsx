import { AreaChart, BarChart } from "@tremor/react";
import { LineChart } from "@tremor/react";

const chartData = [
  {
    date: "Lunes",
    Projects: 15,
    Tasks: 21,
    Events: 17,
    Habits: 33,
  },
  {
    date: "Martes",
    Projects: 15,
    Tasks: 25,
    Events: 23,
    Habits: 5,
  },
  {
    date: "Miércoles",
    Projects: 22,
    Tasks: 33,
    Events: 52,
    Habits: 43,
  },
  {
    date: "Jueves",
    Projects: 5,
    Tasks: 17,
    Events: 27,
    Habits: 33,
  },
  {
    date: "Viernes",
    Projects: 7,
    Tasks: 12,
    Events: 15,
    Habits: 23,
  },
  {
    date: "Sábado",
    Projects: 23,
    Tasks: 13,
    Events: 15,
    Habits: 50,
  },
  {
    date: "Domingo",
    Projects: 13,
    Tasks: 25,
    Events: 35,
    Habits: 22,
  },
];

export function AreaChartHero() {
  return (
    <LineChart
      className="h-60 w-full"
      data={chartData}
      index="date"
      categories={["Projects", "Tasks", "Events", "Habits"]}
      colors={["teal", "sky", "purple", "rose"]}
      onValueChange={(value) => console.log(value)}
    />
  );
}
