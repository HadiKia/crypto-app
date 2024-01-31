import { useEffect, useState } from "react";

import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import { getCoinList } from "../../services/cryptoApi";
import Search from "../modules/Search";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    getData();
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin
        coins={coins}
        isLoading={isLoading}
        isError={isError}
        currency={currency}
      />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
