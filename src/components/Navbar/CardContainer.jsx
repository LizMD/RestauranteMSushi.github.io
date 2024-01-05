import { useState, useEffect } from "react";
import { firestoreDB } from "../../firebase/config";
import { ReservasCard } from "./ReservasCard";

export const CardContainer = () => {

    const [reservas, setReservas] = useState([])

    const getReservas = async () => {
        try {
            await firestoreDB.collection("Nombres").onSnapshot((querySnapshot) => {
                const documentos = []
                querySnapshot.forEach((doc) => {
                    documentos.push({...doc.data(), id: doc.id})
                })
                setReservas(documentos)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getReservas()
    }, [])

    return (
        <section>
            <h2>Lista de Reservas</h2>

            {
                reservas.map((reserva)=>{
                    return (
                        <ReservasCard reserva={reserva} key={reserva.id} />
                    )
                })
            }
        </section>
    )
}