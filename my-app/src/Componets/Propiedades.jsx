import "./Datos"
function Datos(props) {
    return (
        <div>
            <h2>Nombre: {props.nombre}</h2>
            <h2>Edad: {props.edad}</h2>
            <h2>Calle: {props.direccion.calle}</h2>
            <h2>Barrio: {props.direccion.barrio}</h2>
            <h2>Ciudad: {props.direccion.ciudad}</h2>
            <h2>Pais: {props.direccion.pais}</h2>

        </div>
    )
}
export function Propiedades() {
    return (
        <div>
            <h1>Propiedades</h1>
            <Datos nombre="Juan" edad="30" direccion={{calle: "Avenida Rojas", barrio: "Estrada", ciudad: "Bogotá", pais: "Colombia"}} />
            <Datos nombre="Yezid" edad="22" direccion={{calle: "Avenida Rojas", barrio: "Estrada", ciudad: "Bogotá", pais: "Colombia"}} />
        </div>
    )
}