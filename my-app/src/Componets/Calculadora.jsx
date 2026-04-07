import { Boton } from './Boton'
import './Calculadora.css'

export const Calculadora = ()=>{
    return(
        <index>
            <input className='resultado' type="text" value='50' />
            <input className='display' type="text" value='25+25' />
            <Boton texto='C' clase='gris'/>
            <Boton texto='+/-' clase='gris'/>
            <Boton texto='%' clase='gris'/>
            <Boton texto='/' clase='operacion'/>
            <Boton texto='7' clase='numero'/>
            <Boton texto='8' clase='numero'/>
            <Boton texto='9' clase='numero'/>
            <Boton texto='X' clase='operacion'/>
            <Boton texto='4' clase='numero'/>
            <Boton texto='5' clase='numero'/>
            <Boton texto='6' clase='numero'/>
            <Boton texto='-' clase='operacion'/>
            <Boton texto='1' clase='numero'/>
            <Boton texto='2' clase='numero'/>
            <Boton texto='3' clase='numero'/>
            <Boton texto='+' clase='operacion'/>
            <Boton texto='.' clase=''/>
            <Boton texto='0' clase=''/>
            <Boton texto='<' clase=''/>
            <Boton texto='=' clase='operacion'/>
        </index>
    ) 
}