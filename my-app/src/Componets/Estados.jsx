import { useState } from 'react';

function Counter(){
    // Creo el Hook
    const [counter, SetCounter] = useState(0);
    //Creo funcion flecha para sumar 
    const sumarClick = () => {
        SetCounter(counter + 1);
    }
    return(
        <div className="text-center" mt-4>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={sumarClick} className="btn btn-primary">Sumar</button>
        </div>
    )
}
export function Estados(){
    return(
        <div>
            <Counter/>
        </div>
    )
};