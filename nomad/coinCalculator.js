//to-do list
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios.get("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.data)
    .then((data)=>{
      setCoins(data);
      setLoading(false);
    });
  }, []);

  const [myMoney, setMyMoney] = useState(0);
  const [selected, setSelected] = useState(0);

  const onChangeInput = (event) => setMyMoney(event.target.value);
  
  const onChangeSelect = (event) => setSelected(event.target.value);

  const onClickConfirm = () => {
    setHowMuch(true);
  };
  const onClickRenew = () => {
    setHowMuch(false);
    setMyMoney(0);
  };

  const [howMuch, setHowMuch] = useState(false);
  

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {
      loading
      ? <strong>Loading...</strong>
      :
      <div>
        <select onChange={onChangeSelect}>
          {coins.map((a,i)=>{
            return (
              <option key={i} value={i}>
                {a.name} ({a.symbol}) : {a.quotes.USD.price} USD
              </option>
            );
          })}
        </select>
        <hr />
        <div>
          <label htmlFor="myEarning">I have...</label>
          <br />
          <input
            value={myMoney}
            onChange={onChangeInput}
            id="myEarning"
            type="number"
            disabled={howMuch}
          />
          <label htmlFor="myEarning"> USD</label>
          <br />
          <button
            onClick={onClickConfirm}
          >
            confirm
          </button>
          <button
           onClick={onClickRenew}
          >
            renew
          </button>
        </div>
      </div>
      }
      {
        howMuch
        ? <h2>You can buy {coins[selected].quotes.USD.price/myMoney+" "+coins[selected].symbol}</h2>
        : null
      }
      
    </div>
  );
}

export default App;