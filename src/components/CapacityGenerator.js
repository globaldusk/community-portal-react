import React, {useState} from 'react';
import {CapacityToday} from './CapacityToday'

export const StateValue = () => {
    const [counter, setCounter] = useState(Math.floor(Math.random() * 100))

    const increment = () => {
        setCounter(Math.floor(Math.random() * 100))
    }

    return(
        <div>
            <CapacityToday day="Monday" traffic={counter}/>
            <button onClick={increment}>Refresh</button>
        </div>
    );
}
//Higher order Component to be used inside other components
//Usestate hook used to show increment changes to capacity on the day when refreshed

