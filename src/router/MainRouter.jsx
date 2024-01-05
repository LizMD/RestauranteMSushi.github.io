import { Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/inicio";
import { Promociones } from "../pages/Promociones";
import { PromocionesPorId } from "../pages/PromocionesPorId";
import { Reservas } from "../pages/Reservas";
import { Error404 } from "../pages/Error404";




export const MainRouter = () => {


    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='promociones' element={<Promociones />} />
            <Route path='promociones/:idProducto' element={<PromocionesPorId />} />
            <Route path='reservas' element={<Reservas />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}
