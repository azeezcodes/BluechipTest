"use client";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/utils/Charts";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts";


const chartData = [
   { month: "January", agent: 186, client: 80 },
   { month: "February", agent: 305, client: 200 },
   { month: "March", agent: 237, client: 120 },
   { month: "April", agent: 73, client: 190 },
   { month: "May", agent: 209, client: 130 },
   { month: "June", agent: 214, client: 140 },
];

const chartConfig = {
   agent: {
      label: "Agent",
      color: "#00A3FF",
   },
   client: {
      label: "Client",
      color: "#EFF2F5",
   },
} satisfies ChartConfig;

export function BarChartGraph() {
   return (
      <ResponsiveContainer width={500} height={300}>
         <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
               <CartesianGrid vertical={false} />
               <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
               />
               <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
               />
               <Bar dataKey="agent" fill="var(--color-agent)" radius={4} />
               <Bar dataKey="client" fill="var(--color-client)" radius={4} />
            </BarChart>
         </ChartContainer>
      </ResponsiveContainer>
   );
}
