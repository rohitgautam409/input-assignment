import "./midsection.css"
import { useState } from "react";
import { useEffect } from "react";
const Midsection = ()=>{

    const [inputValue, setInputValue] = useState('');
    const [displayedValue, setDisplayedValue] = useState('');
    const [execute, setExecuted] = useState(false)

    function handleClick(){
        setExecuted((prevValue)=>!prevValue)
    }
     console.log(execute)
    useEffect(() => {
        
        const timeout = setTimeout(() => {
          setDisplayedValue(inputValue);
        }, 1500);
    
        return () => clearTimeout(timeout);
      }, [execute]);
    

    const handleInputChange =(e)=>{
        setInputValue(e.target.value)
    }
    return (
      <div className="mid">
        <div className="input">
        <div className="form">
          <label htmlFor="assets">Select Asset</label>
          <select name="Cypto" id="assets">
            <option value="Eth">Eth</option>
            <option value="BTC">BITCOIN</option>
            <option value="NFT">NFT</option>
          </select>
          <div className="textfield">
          <label htmlFor="inputField">Borrow Amount</label>
          <p>Max Held Amount:200</p>
          </div>
          <input
           placeholder="Enter supply amount"
            type="number"
            id="inputField"
            value={inputValue}
            onChange={handleInputChange}
            step="0.01"
            min="0" 
          />
          </div>
          <button onClick={handleClick} className="form-btn" type="button">Execute</button>
        </div>
        <div className="output">
          <div className="first">
            <h3>Browwor Amount- {displayedValue}</h3>
          </div>
          <div className="second"></div>
        </div>
      </div>
    );
}
export default Midsection;