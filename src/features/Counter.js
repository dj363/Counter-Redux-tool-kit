// import react
import React, { useState } from "react";

// import react-redux
import { useSelector, useDispatch } from 'react-redux';

// import features / counterSlice
import { decreament, increament, increamentAsync, increamentByAmount, selectCount } from "./CounterSlice";


export default function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch();
    const [increamentAmount, setIncreamentAmount] = useState(2)
    return (
        <div>
            <div>
                <button aria-label="Increament value"
                    onClick={() => dispatch(increament())}>
                    Increament
                </button>
                <span>{count}</span>
                <button aria-label="Decreament value"
                    onClick={() => dispatch(decreament())}>
                    Decreament
                </button>
            </div>
            <div>
                <input area-aria-label=" Set Increament amount"
                    value={increamentAmount}
                    onChange={e => setIncreamentAmount(e.target.value)}
                />
                <button onClick={() => dispatch(increamentByAmount(Number(increamentAmount) || 0))}>
                    Add Amount
                </button>
                <button onClick={() => dispatch(increamentAsync(Number(increamentAmount) || 0))}>
                    Add Async
                </button>
            </div>
        </div>
    )
};