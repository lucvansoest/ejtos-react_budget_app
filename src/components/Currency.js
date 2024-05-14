import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Currency:</span>
<input type="text"value={newCurrency} onChange={handleCurrencyChange}></input>

<label>

Currency:

       <select value={newCurrency} onChange={handleCurrencyChange}>

         <option value="$">$ Dollar</option>

         <option value="£">£ Pound</option>

         <option value="€">€ Euro</option>

        <option value="₹">₹ Ruppee</option>

       </select>

     </label>

</div>
    );
};
export default Currency;
