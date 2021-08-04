import "../style/currencySelector.css"
import {useDispatch, useSelector} from "react-redux";
import {updateFromCurrency, updateToCurrency, getApiData} from "../actions";

const CurrencySelector = () => {

    const dispatch = useDispatch();

    const from = useSelector((state) => state.fromCurrency)
    const to = useSelector((state) => state.toCurrency)
    const apiData = useSelector((state) => state.apiData)

    return (<div>
        <select id="from-currency" className="dropdown-content" onChange={e => {
            dispatch(updateFromCurrency(e.target.value));
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
            dispatch(updateToCurrency(e.target.value));
        }}
        >
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

        <button onClick={() => {
            dispatch(getApiData(from, to))
        }}>Submit
        </button>
    </div>)
}

export default CurrencySelector