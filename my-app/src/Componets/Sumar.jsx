
import { useState, useRef } from "react";   

export function Sumar(){
    const form = useRef();
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState(''); 
    const [rta, setrta] = useState(0);
    
    const calculaSuma = (e) => {
        //Previene que la página se recargue 
        e.preventDefault();
        //Convertir los numeros para poder sumar
        setrta(parseInt(num1) + parseInt(num2));
    }
    //Limpiar cajas
    const limpiarCajas = () => {
        setNum1('');
        setNum2('');
        setrta(0);
    }
    return(
        <div>
            <form ref={form}>
                <h1>Calcular Suma de 2 Numeros </h1>
                <input type="number" 
                        placeholder="Digite el Número 1" 
                        value={num1} 
                        onChange={(e) => setNum1(e.target.value)} />
                <input type="number" 
                        placeholder="Digite el Número 2" 
                        value={num2} 
                        onChange={(e) => setNum2(e.target.value)} />
                <br />
                <button onClick={calculaSuma}>
                    Sumar
                </button>
                <h3>Resultado de la  suma: {rta}</h3>
                <button type="button" onClick={limpiarCajas}>
                    Limpiar
                </button>
            </form>
            
        </div>
    )
}