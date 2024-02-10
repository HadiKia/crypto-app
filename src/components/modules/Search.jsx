import { useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { searchCoin } from "../../services/cryptoApi";
import { RotatingLines } from "react-loader-spinner";

// styles
const containerStyle =
  "relative flex items-start gap-x-3 md:gap-x-5 mx-5 xl:mx-0";
const searchBoxStyle =
  "flex items-center bg-[#121318] gap-x-1 md:gap-x-2 px-4 py-4 text-[#9295A6] rounded-lg";
const inputStyle =
  "outline-none text-sm md:text-base px-2 text-[#f1f1f1] placeholder:text-[#9295A6] placeholder:text-sm bg-[#121318] w-full";
const selectStyle =
  "bg-[#121318] text-[#9295A6] px-2 outline-none rounded-lg h-[50px] md:h-[56px] ";
const searchResultStyle =
  "absolute flex items-start justify-center top-[72px] left-0 right-0 max-h-[330px] md:w-[326px] z-20 overflow-y-scroll bg-[#121318] border border-[#232530] py-4 text-[#9295A6] rounded-lg shadow-2xl shadow-[#232530]";
const ulStyle = "w-full flex flex-col";
const liStyle = `flex items-center gap-x-3 px-4 text-[#9295A6] text-sm md:text-base`;

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }

    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setIsLoading(false);
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoading(true);
    search();

    return () => controller.abort();
  }, [text]);

  return (
    <div className={containerStyle}>
      <div className={searchBoxStyle}>
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search Coin Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={inputStyle}
        />
      </div>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className={selectStyle}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!coins.length || isLoading) && (
        <div className={searchResultStyle}>
          {isLoading ? (
            <div className="h-36 grid place-items-center">
              <RotatingLines
                height="45"
                width="45"
                strokeColor="#69717d"
                strokeWidth="2"
                animationDuration="2"
              />
            </div>
          ) : (
            <ul className={ulStyle}>
              {coins.map((coin, index) => (
                <li
                  key={coin.id}
                  className={`${liStyle} ${
                    index !== coins.length - 1
                      ? "border-b border-[#232530] pb-3 mb-3"
                      : null
                  }`}
                >
                  <img src={coin.thumb} alt={coin.name} />
                  <p>{coin.name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {!coins.length && text && !isLoading && (
        <h2
          className={`${searchResultStyle} !items-center !h-[178px] lg:text-lg`}
        >
          Coin not found
        </h2>
      )}
    </div>
  );
}

export default Search;
