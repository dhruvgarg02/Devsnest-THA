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
                <option value="USD">US Dollar</option>
                <option value="INR">Indian Rupee</option>
            </select>

            <select id="to-currency" className="dropdown-content" onChange={e => {
                setToCurrency(e.target.value)
            }}>
                <option value="">Select To</option>
                <option value="BTC">Bitcoin</option>
                <option value="USD">US Dollar</option>
                <option value="INR">Indian Rupee</option>
            </select>

        <input type="submit" value="Submit"/>
    </form>
}

export default CurrencySelector