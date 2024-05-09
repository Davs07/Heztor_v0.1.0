import { AreaChart, BarChart } from "@tremor/react";
import { LineChart } from "@tremor/react";

const chartData = [
  {
    date: "Mar 22",
    Projects: 10,
    Tasks: 20,
    Events: 15,
    Habits: 30,
  },
  {
    date: "Apr 22",
    Projects: 15,
    Tasks: 25,
    Events: 20,
    Habits: 35,
  },
  {
    date: "May 22",
    Projects: 20,
    Tasks: 30,
    Events: 25,
    Habits: 40,
  },
  {
    date: "Mar 22",
    Projects: 10,
    Tasks: 20,
    Events: 15,
    Habits: 30,
  },
  {
    date: "Apr 22",
    Projects: 15,
    Tasks: 25,
    Events: 20,
    Habits: 35,
  },
  {
    date: "May 22",
    Projects: 20,
    Tasks: 30,
    Events: 25,
    Habits: 40,
  },
];

export function AreaChartHero() {
  return (
    <AreaChart
      className="h-60"
      data={chartData}
      index="date"
      categories={["Projects", "Tasks", "Events", "Habits"]}
      colors={["green", "blue", "yellow", "rose"]}
      onValueChange={(value) => console.log(value)}
    />
  );
}
