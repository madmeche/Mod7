import { useEffect } from "react";
import { useState } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState("");

  //https://hackernoon.com/cleanup-functions-in-reacts-useeffect-hook-explained
  useEffect(() => {

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`+ currency
    )

    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      console.log(json.bitcoin)

      let currentBitcoin = json.bitcoin;
      let currentKey = Object.keys(currentBitcoin)[0];
      console.log(json.bitcoin[currentKey])
      setBitcoinPrice(json.bitcoin[currency]);
    });
  },[currency])
  

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

return (
  <div>
    <h3>Bitcoin Exchange Rate</h3>
    <label>
      Choose currency:
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {options}
      </select>
    </label>
    <p>Bitcoin Price: ${bitcoinPrice}</p>
  </div>
);
}
export default BitcoinRates;

// The useEffect hook to fetch the current price of Bitcoin in the selected currency
// The useEffect hook takes a callback function as its first argument.
// This callback function is called when the component is first rendered,
// and then again whenever any of the component's dependencies change.
// In this case, the callback function fetches the current price of Bitcoin in the selected currency.
// The callback function also sets the state of the BitcoinPrice variable to the current price of Bitcoin.
// The BitcoinPrice variable is then used to display the current price of Bitcoin in the component.
