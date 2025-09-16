import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const api = `https://v6.exchangerate-api.com/v6/dff53aaece80e818617b96af/latest/${currency}`;
  console.log('====================================');
  console.log(api);
  console.log('====================================');

  useEffect(() => {
    const fetchCurrencyData = async () => {
      const res = await fetch(api);
      const resData = await res.json();
      setData(resData.conversion_rates
);
    };
    fetchCurrencyData();
  }, [currency, api]);

  return data;
};

export default useCurrencyInfo;
