import { useParams } from "react-router-dom";

export const PromocionesPorId = () => {

    const {idProducto} = useParams();

    return (
        <>
        <h1>Producto por Id</h1>
        <h1>Producto por Id</h1>
        <h1>Producto por Id</h1>
        <h3>El Id del producto es: {idProducto}</h3>
        </>
    )
}