import "../style/currencySelector.css"
import {useState} from "react";

const CurrencySelector = ({getApiData}) => {

    const [fromCurrency, setFromCurrency] = useState("")
    const [toCurrency, setToCurrency] = useState("")
    const HandleInput = (e) => {
        e.preventDefault()
        getApiData(fromCurrency, toCurrency)
    }

    return <form onSubmit={HandleInput}>
        <select id="from-currency" className="dropdown-content" onChange={e => {
            setFromCurrency(e.target.value)
        }}
        >
            <option value="">Select From</option>
            <option value="BTC">Bitcoin</option>
            <option value="DICE">Etheroll</option>
            <option value="XRP">Ripple</option>
            <option value="ADA">Cardano</option>
            <option value="XLM">Stellar</option>
            <option value="LINK">Chainlink</option>
            <option value="UNI">Uniswap</option>
            <option value="DOT">Polkadot</option>
            <option value="DOGE">DogeCoin</option>
            <option value="DOPE">DopeCoin</option>
            <option value="USD">US Dollar</option>
            <option value="INR">Indian Rupee</option>
            <option value="EUR">Euro</option>
            <option value="JPY">Japanese Yen</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="AUD">Australian Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="CHF">Swiss Franc</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="NZD">New Zealand Dollar</option>
        </select>

        <select id="to-currency" className="dropdown-content" onChange={e => {
            setToCurrency(e.target.value)
        }}>
            <option value="">Select To</option>
            <option value="USD">US Dollar</option>
            <option value="INR">Indian Rupee</option>
            <option value="EUR">Euro</option>
            <option value="JPY">Japanese Yen</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="AUD">Australian Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="CHF">Swiss Franc</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="NZD">New Zealand Dollar</option>

        </select>

        <input type="submit" value="Submit"/>
    </form>
}

export default CurrencySelector