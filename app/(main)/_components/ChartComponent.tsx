import { AreaChart } from "@tremor/react";
import { LineChart } from '@tremor/react';

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
  // Agrega más datos aquí según sea necesario
];

const dataFormatter = (number: number) => number.toString();

export function AreaChartHero() {
  return (
    <LineChart
      className="h-60"
      data={chartData}
      index="date"
      categories={["Projects", "Tasks", "Events", "Habits"]}
      colors={["indigo", "blue", "green", "cyan"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      showXAxis={true}
      showLegend={false}
      onValueChange={(value) => console.log(value)}
    />
  );
}
