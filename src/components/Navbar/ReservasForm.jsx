import { useState } from "react";
import { firestoreDB } from "../../firebase/config";
import React from "react"

export const ReservasForm = () => {
    const estadoInicialFormulario = {
        name: '',
        lastname: '',
        email: '',
        number: '',
        date: ''

    }

    const [ReservasFormData, setReservasFormData] = useState(estadoInicialFormulario)

    const handleReservasInputChange = (e) => {
        setReservasFormData({
            ...ReservasFormData,
            [e.target.name]: e.target.value
        })
    }

    const onReservasFormSubmit = async(e) => {
        e.preventDefault()
        try {
            await firestoreDB.collection("Nombres").add(ReservasFormData)
            alert("Reserva Guardada")

        } catch (error){
            alert("No se pudo guardar la reserva")
            console.log(error)
        }
    }

    return( 
        <>
    <h1>Reserva con Nosotros</h1>
    <form className="reservas-form" onSubmit={onReservasFormSubmit}>
        <label htmlFor="name">Nombres</label>
        <input type="text" name="name" id="name" placeholder="Ingrese sus nombres" value={ReservasFormData.name} onChange={handleReservasInputChange} />
        <label htmlFor="lastname">Apellidos</label>
        <input type="text" name="lastname" id="lastname" placeholder="Ingrese sus apellidos" value={ReservasFormData.lastname} onChange={handleReservasInputChange} />
        <label htmlFor="email">Correo Electrónico</label>
        <input type="text" name="email" id="email" placeholder="Ingrese su correo electrónico" value={ReservasFormData.email} onChange={handleReservasInputChange} />
        <label htmlFor="number">Número de teléfono</label>
        <input type="number" name="number" id="number" placeholder="Ingrese su número de teléfono" value={ReservasFormData.number} onChange={handleReservasInputChange} />
        <label htmlFor="date">Fecha de Reserva</label>
        <input type="date" name="date" id="date" value={ReservasFormData.date} onChange={handleReservasInputChange} />
        <button type="submit">Enviar Reserva</button>
    </form>
    </>
    )
  }