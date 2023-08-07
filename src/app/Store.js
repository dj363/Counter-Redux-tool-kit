import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../features/CounterSlice';


const Store = configureStore({
    reducer: {
        counter: CounterReducer,
    },
});

export default Store;