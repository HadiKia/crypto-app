// styles
const containerStyle =
  "fixed inset-0 w-full h-full backdrop-blur-sm grid place-items-center";
const backgroundDivStyle = "absolute top-0 right-0 left-0 bottom-0";
const chartDivStyle =
  "relative w-[800px] h-[400px] bg-[#08080899] border border-[#232530]  text-[#9295A6] rounded-lg";

function Chart({ chart, setChart }) {
  return (
    <div className={containerStyle}>
      <div className={backgroundDivStyle} onClick={() => setChart(null)}></div>
      <div className={chartDivStyle} onClick={() => setChart(true)}>
        chart
      </div>
    </div>
  );
}

export default Chart;
