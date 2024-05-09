import { AreaChart, BarChart } from "@tremor/react";
import { LineChart } from "@tremor/react";

const chartData = [
  {
    date: "Mar 22",
    Projects: 15,
    Tasks: 21,
    Events: 17,
    Habits: 33,
  },
  {
    date: "Apr 22",
    Projects: 15,
    Tasks: 25,
    Events: 23,
    Habits: 5,
  },
  {
    date: "May 22",
    Projects: 22,
    Tasks: 33,
    Events: 52,
    Habits: 43,
  },
  {
    date: "Jun 22",
    Projects: 5,
    Tasks: 17,
    Events: 27,
    Habits: 33,
  },
  {
    date: "Jul 22",
    Projects: 7,
    Tasks: 12,
    Events: 15,
    Habits: 23,
  },
  {
    date: "Aug 22",
    Projects: 23,
    Tasks: 13,
    Events: 15,
    Habits: 50,
  },
];

export function AreaChartHero() {
  return (
    <LineChart
      className="h-60 "
      data={chartData}
      index="date"
      categories={["Projects", "Tasks", "Events", "Habits"]}
      colors={["teal", "sky", "purple", "rose"]}
      onValueChange={(value) => console.log(value)}
    />
  );
}
