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

import { convertData, formatPrice } from "../../helpers/convertData";

// styles
const containerStyle =
  "fixed inset-0 w-full h-full backdrop-blur-sm grid place-items-center";
const backgroundDivStyle = "absolute top-0 right-0 left-0 bottom-0 ";
const chartDivStyle =
  "relative w-[1200px] bg-[#080808d8] border border-[#232530] text-[#9295A6] rounded-lg p-10";
const nameStyle = "";
const graphStyle = "w-full h-[450px]";
const typesStyle = "";
const detailsStyle = "";
const detailsItemStyle = "";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };
  return (
    <div className={containerStyle}>
      <div className={backgroundDivStyle} onClick={() => setChart(null)}></div>
      <div className={chartDivStyle}>
        <div className={nameStyle}>
          <img src={chart.coin.image} alt={chart.coin.name} className="w-10" />
          <p>{chart.coin.name}</p>
        </div>
        <div className={graphStyle}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={typesStyle} onClick={typeHandler}>
          <button className={type === "prices" ? "bg-[#5367FF]" : ""}>
            Prices
          </button>
          <button className={type === "market_caps" ? "bg-[#5367FF]" : ""}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? "bg-[#5367FF]" : ""}>
            Total Volumes
          </button>
        </div>
        <div className={detailsStyle}>
          <div className={detailsItemStyle}>
            <p>Prices:</p>
            <span>{formatPrice(chart.coin.current_price)}</span>
          </div>
          <div className={detailsItemStyle}>
            <p>ATH:</p>
            <span>{formatPrice(chart.coin.ath)}</span>
          </div>
          <div className={detailsItemStyle}>
            <p>Market Cap:</p>
            <span>{formatPrice(chart.coin.market_cap)}</span>
          </div>
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
        <Line
          type="monotone"
          dataKey={type}
          stroke="#5367FF"
          strokeWidth="2px"
        />
        <YAxis
          dataKey={type}
          tickFormatter={formatPrice}
          domain={["auto", "auto"]}
        />
        <XAxis dataKey="date" domain={["auto", "auto"]} />
        <Legend verticalAlign="top" height={40} />
        <Tooltip cursor={{ stroke: "#5367FF", strokeWidth: 0.5 }} />
        <CartesianGrid stroke="#9295A630" />
      </LineChart>
    </ResponsiveContainer>
  );
};
