import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setNewCurrency(event);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event,
        });
    }
    return (
        <div className='alert alert-secondary'>

            <Dropdown  onSelect={handleCurrencyChange}>

            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Currency ({newCurrency})
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
                <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
                <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
                <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
            
            </Dropdown>

        </div>
    );
};
export default Currency;
