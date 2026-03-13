import '../App.css';

export function Datos(){
    const datos =[
        {id:1, nombre: "Sensei", edad: "63", telefono: "3023314848"},
        {id:2, nombre: "Sakura", edad: "28", telefono: "3023314848"},
        {id:3, nombre: "Diana", edad: "28", telefono: "3023314848"}
    ];
    return(
        <div className='person'>
            <h2>Listas de personas</h2>
            {/*Esta es la lista de Json utilizando monadas*/}
            <ul className='datos'>
                {datos.map((dato) => (
                    <li key={dato.id}>Nombre:{dato.nombre} 
                                      Edad:{dato.edad}- 
                                      Telefono:{dato.telefono}
                    </li>
                ))}
            </ul>

    </div>
    )
}
