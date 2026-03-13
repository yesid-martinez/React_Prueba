const Pokemon = [
    {
        id: 1,
        nombre: "Pikachu",
        tipo: "Eléctrico",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        alt:"Imagen de Pikachu"
    },
    {
        id: 2,
        nombre: "Charizard",
        tipo: "Fuego/Volador",      
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        alt:"Imagen de Charizard"   
    }
]
export function Maps() {
    return (
            Pokemon.map((item,index) => {
                return (
                <div key={index}>
                    <h2>Numero: {item.id} <br /> Nombre: {item.nombre}</h2>
                    <br />
                    <p>Tipo: {item.tipo}</p>
                    <img src={item.imagen} alt={item.alt} />
                </div>
            )
        })
       
    )
}