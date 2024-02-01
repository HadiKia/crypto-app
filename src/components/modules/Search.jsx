import { useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { searchCoin } from "../../services/cryptoApi";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]);
    if (!text) return;

    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
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
    search();

    return () => controller.abort();
  }, [text]);

  return (
    <div>
      <div>
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search Coin Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <div>
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <span>{coin.market_cap_rank}</span>
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
