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
  "fixed inset-0 w-full h-full backdrop-blur-sm grid place-items-center z-10";
const backgroundDivStyle = "absolute top-0 right-0 left-0 bottom-0 ";
const crossStyle =
  "absolute z-10 right-5 top-[26px] bg-[#d336363b] text-[#d33636] px-2 rounded text-lg font-medium xl:hidden";
const chartDivStyle =
  "relative w-full h-full max-w-[1200px] xl:h-[700px] bg-[#080808ce] border border-[#232530] text-[#9295A6] rounded-lg p-5 xl:p-7";
const nameStyle =
  "flex items-center gap-x-3 font-medium mb-2 text-lg xl:text-xl";
const graphStyle = "w-full h-[450px] mb-5 xl:mb-9 xl:h-[490px]";
const typesStyle =
  "flex items-center justify-between md:text-lg xl:justify-start xl:gap-x-6";
const typeButtonStyle = "py-1 px-2 rounded duration-300";
const typeButtonSelectedStyle = `${typeButtonStyle} bg-[#5367FF] text-[#E5E7EB] font-medium`;
const detailsStyle = "flex flex-col gap-y-3 xl:flex-row xl:gap-x-8";
const detailsItemStyle = "flex items-center gap-x-2 md:text-lg";
const pStyle = "text-[#777777]";
const spanStyle = "text-[#9295A6] font-medium";

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
      <button className={crossStyle} onClick={() => setChart(null)}>
        X
      </button>
      <div className={chartDivStyle}>
        <div className={nameStyle}>
          <img
            src={chart.coin.image}
            alt={chart.coin.name}
            className="w-12 xl:w-14"
          />
          <p>{chart.coin.name}</p>
        </div>
        <div className={graphStyle}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className="flex flex-col gap-y-9 xl:flex-row xl:items-center xl:justify-between text-sm md:text-base">
          <div className={typesStyle} onClick={typeHandler}>
            <button
              className={
                type === "prices" ? typeButtonSelectedStyle : typeButtonStyle
              }
            >
              Prices
            </button>
            <button
              className={
                type === "market_caps"
                  ? typeButtonSelectedStyle
                  : typeButtonStyle
              }
            >
              Market Caps
            </button>
            <button
              className={
                type === "total_volumes"
                  ? typeButtonSelectedStyle
                  : typeButtonStyle
              }
            >
              Total Volumes
            </button>
          </div>
          <div className={detailsStyle}>
            <div className={detailsItemStyle}>
              <p className={pStyle}>Prices:</p>
              <span className={spanStyle}>
                {formatPrice(chart.coin.current_price)}
              </span>
            </div>
            <div className={detailsItemStyle}>
              <p className={pStyle}>ATH:</p>
              <span className={spanStyle}>{formatPrice(chart.coin.ath)}</span>
            </div>
            <div className={detailsItemStyle}>
              <p className={pStyle}>Market Cap:</p>
              <span className={spanStyle}>
                {formatPrice(chart.coin.market_cap)}
              </span>
            </div>
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
