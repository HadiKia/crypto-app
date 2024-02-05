import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { convertData } from "../../helpers/convertData";

// styles
const containerStyle =
  "fixed inset-0 w-full h-full backdrop-blur-sm grid place-items-center";
const backgroundDivStyle = "absolute top-0 right-0 left-0 bottom-0";
const chartDivStyle =
  "relative w-[800px] h-[400px] bg-[#08080899] border border-[#232530]  text-[#9295A6] rounded-lg";
const graphStyle = "w-[760px] h-[300px]";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  return (
    <div className={containerStyle}>
      <div className={backgroundDivStyle} onClick={() => setChart(null)}></div>
      <div className={chartDivStyle}>
        <div className={graphStyle}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        {/* <CartesianGrid stroke="#9295A6" /> */}
        <Line
          type="monotone"
          dataKey={type}
          stroke="#5367FF"
          strokeWidth="2px"
        />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" domain={["auto", "auto"]} />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
