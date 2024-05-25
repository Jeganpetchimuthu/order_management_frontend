import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../Style-Components/Chart.css";
const data = [
  { name: "Jan", revenue: 10000 },
  { name: "Feb", revenue: 20000 },
  { name: "Mar", revenue: 10000 },
  { name: "Apr", revenue: 20000 },
  { name: "May", revenue: 10000 },
  // Add more data as needed
];

const Chart = () => {
  return (
    <div className="chart">
      <p>Last 6 Months Revenu</p>
      <AreaChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
