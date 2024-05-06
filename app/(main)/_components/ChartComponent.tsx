import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
  {
    date: "Jul 22",
    SemiAnalysis: 3490,
    "The Pragmatic Engineer": 1982,
  },
  {
    date: "Aug 22",
    SemiAnalysis: 2903,
    "The Pragmatic Engineer": 2012,
  },
  {
    date: "Sep 22",
    SemiAnalysis: 2643,
    "The Pragmatic Engineer": 2342,
  },
  {
    date: "Sep 22",
    SemiAnalysis: 2643,
    "The Pragmatic Engineer": 2342,
  },
];

const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export function AreaChartHero() {
  return (
    <AreaChart
      className="h-60"
      data={chartdata}
      index="date"
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      colors={["indigo", "rose"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      showXAxis={true}
      showLegend={false}
      onValueChange={(v) => console.log(v)}
    />
  );
}
