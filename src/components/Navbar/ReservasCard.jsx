import React from "react";
import './Navbar.css'
import { firestoreDB } from "../../firebase/config";

export const ReservasCard = ({reserva}) => {

    const onDelete = async (id) => {
        try {
            await firestoreDB.collection("Nombres").doc(id).delete()
        }catch(error){console.log(error)}
    }

    return (
        <article key={reserva.id}>
            <h3>{reserva.name}</h3>
            <p>{reserva.lastname}</p>
            <p>{reserva.email}</p>
            <p>{reserva.number}</p>
            <p>{reserva.date}</p>

            <button className="delete" onClick={() => onDelete(reserva.id)}>Eliminar</button>
        </article>
    )
}