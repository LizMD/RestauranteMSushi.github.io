import "./PromocionesPorId.css"


export const PromocionesPorId = (props) => {
    const { imagen, nombre, numero, descripción, precio } = props.promocion

    return (
        <div className="promociones-id">
            <img src={imagen} alt={nombre} />
            <h2>{nombre}</h2>
            <p>{numero}</p>
            <p>{descripción}</p>
            <p>{precio}</p>
        </div>
    )
}