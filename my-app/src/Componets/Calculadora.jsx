import { Boton } from './Boton'
import './Calculadora.css'
import { useState } from 'react'

export const Calculadora = ()=>{
    //Agrego hook para cambiar valor de los botones
    const [data, setData] = useState({operacion:'', resultado: ''});
    
    const escritura = (event)=>{
        if(data.operacion.length >= 10) return
        setData({...data, operacion: data.operacion + event.target.innerText})
    }
    const eliminar = ()=>{
        setData({...data, operacion: data.operacion.slice(0, data.operacion.length - 1)})
    }
    const resultado = ()=>{
        const resultado = eval(data.operacion)
        setData({...data, resultado})
    }
    return(
        <index>
            <span className='resultado'>{data.resultado}</span>
            <span className='display'>{data.operacion}</span>
            <Boton texto='C' clase='gris'/>
            <Boton texto='+/-' clase='gris'/>
            <Boton texto='%' clase='gris'/>
            <Boton texto='/' clase='operacion' handleClick={escritura}/>
            <Boton texto='7' clase='numero' handleClick={escritura}/>
            <Boton texto='8' clase='numero' handleClick={escritura}/>
            <Boton texto='9' clase='numero' handleClick={escritura}/>
            <Boton texto='X' clase='operacion' handleClick={escritura}/>
            <Boton texto='4' clase='numero' handleClick={escritura}/>
            <Boton texto='5' clase='numero' handleClick={escritura}/>
            <Boton texto='6' clase='numero' handleClick={escritura}/>
            <Boton texto='-' clase='operacion' handleClick={escritura}/>
            <Boton texto='1' clase='numero' handleClick={escritura}/>
            <Boton texto='2' clase='numero' handleClick={escritura}/>
            <Boton texto='3' clase='numero' handleClick={escritura}/>
            <Boton texto='+' clase='operacion' handleClick={escritura}/>
            <Boton texto='.' clase=''/>
            <Boton texto='0' clase='' handleClick={escritura}/>
            <Boton texto='<' clase='' handleClick={escritura}/>
            <Boton texto='=' clase='operacion' handleClick={resultado}/>
        </index>
    ) 
}