import './Boton.css'

export const Boton = (params)=>{
    const {texto, clase, handleClick} = params //Desgloso params en texto y clase que se desestructuran en params
    return(
        <button className={clase} onClick={handleClick}>{texto}</button>
    )
}