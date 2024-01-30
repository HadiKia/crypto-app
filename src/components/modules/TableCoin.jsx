import { RotatingLines } from "react-loader-spinner";

import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

// Styles
const containerStyle =
  "flex justify-center mt-[50px] mb-10 min-h-[1000px] bg-[#121318] mx-5 lg:mx-0 py-6 px-4 md:px-6 md:py-8 lg:p-8 xl:p-9 rounded-xl text-[#F1F1F1] ";
const tableStyle = "w-full block overflow-y-scroll lg:table";
const theadStyle = "border-b-2 border-[#232530] text-[#9295A6]";
const thStyle = "text-sm lg:text-base px-4 text-left pb-4 font-medium";
const trStyle =
  "h-16 md:h-[72px] bg-[#121318] hover:bg-[#080808] duration-500 cursor-pointer text-sm lg:text-base";
const tdStyle = "px-4";
const symbolStyle = "flex items-center justify-start gap-x-2 md:gap-x-3";
const symbolImgStyle = "w-8 lg:w-10";
const symbolSpanStyle = "text-[#9295A6] text-xs font-medium pt-0.5";
const successStyle = "text-[#57bc7c] font-medium";
const errorStyle = "text-[#d33636] font-medium";
const chartImgStyle = "w-full  lg:w-fit lg:scale-100"
const rankStickyStyle = "px-2 md:px-4 sticky left-0 bg-inherit"
const coinStickyStyle = "sticky left-[33px] bg-inherit"

function TableCoin({ coins, isLoading }) {
  return (
    <div className={containerStyle}>
      {isLoading ? (
        <RotatingLines
          height="50"
          width="50"
          strokeColor="#69717d"
          strokeWidth="2"
          animationDuration="2"
        />
      ) : (
        <table className={tableStyle}>
          <thead className={theadStyle}>
            <tr className="bg-[#121318]">
              <th className={`${thStyle} ${rankStickyStyle}`}>#</th>
              <th className={`${thStyle} ${coinStickyStyle}`}>Coin</th>
              <th className={thStyle}>Price</th>
              <th className={thStyle}>24H</th>
              <th className={thStyle}>24h Volume</th>
              <th className={thStyle}>Market Cap </th>
              <th className={thStyle}></th>
            </tr>
          </thead>

          <tbody className="overflow-scroll">
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    market_cap_rank: rank,
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    market_cap,
    total_volume,
  },
}) => {
  return (
    <tr className={trStyle}>
      <td className={`${tdStyle} ${rankStickyStyle}`}>{rank}</td>
      <td className={`${tdStyle} ${coinStickyStyle}`}>
        <div className={symbolStyle}>
          <img src={image} alt={name} className={symbolImgStyle} />
          <div className="flex flex-col pr-8 md:pr-0 lg:flex-row lg:items-center lg:gap-x-3">
          <span>{name}</span>
          <span className={symbolSpanStyle}>{symbol.toUpperCase()}</span>
          </div>
        </div>
      </td>
      <td className={tdStyle}>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? successStyle : errorStyle}>
        {price_change > 0 && <span>+</span>}
        {price_change}%
      </td>
      <td className={tdStyle}>${total_volume.toLocaleString()}</td>
      <td className={tdStyle}>${market_cap.toLocaleString()}</td>
      <td >
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} className={chartImgStyle} />
      </td>
    </tr>
  );
};
