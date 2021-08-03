import './App.css';
import CurrencySelector from "./component/CurrencySelector";
import Card from "./component/Card";
import {useState} from "react";

function App() {
     const [data, setData] = useState({})
    const getApiData = (fromCurrency, toCurrency) => {
        fetch(
            `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=4MISL5M4OM7ANAOZ`
        ).then(response => response.json())
            .then(data => {
                setData(data)
            })
    }
    return (
        <div className="App">
            <CurrencySelector getApiData ={getApiData}/>
            <Card data={data}/>
        </div>
    );
}

export default App;