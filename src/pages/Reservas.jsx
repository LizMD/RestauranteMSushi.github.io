import { useState } from "react"


export const Reservas = () => {

    const estadoInicialFormulario = {
        name: '',
        lastname: '',
        email: '',
        number: '',
        date: ''

    }

    const [formulario, setFormulario] = useState(estadoInicialFormulario)

    const envioFormulario = (evento) => {
        evento.preventDefault()
        console.log("Formulario enviado")
        console.log(formulario)
    }

    const cambioEnElInput = (evento) => {
        const campo = evento.target.name
        const valor = evento.target.value
        setFormulario(
            {
                ...formulario,
                [campo]: valor
            }
        )
    }

    return( 
        <>
    <h1>Reserva con Nosotros</h1>
    <form className="reservas-form" onSubmit={envioFormulario}>
        <label htmlFor="name">Nombres</label>
        <input type="text" name="name" id="name" placeholder="Ingrese sus nombres" value={formulario.name} onChange={cambioEnElInput} />
        <label htmlFor="lastname">Apellidos</label>
        <input type="text" name="lastname" id="lastname" placeholder="Ingrese sus apellidos" value={formulario.lastname} onChange={cambioEnElInput} />
        <label htmlFor="email">Correo Electrónico</label>
        <input type="text" name="email" id="email" placeholder="Ingrese su correo electrónico" value={formulario.email} onChange={cambioEnElInput} />
        <label htmlFor="number">Número de teléfono</label>
        <input type="number" name="number" id="number" placeholder="Ingrese su número de teléfono" value={formulario.number} onChange={cambioEnElInput} />
        <label htmlFor="date">Fecha de Reserva</label>
        <input type="date" name="date" id="date" value={formulario.date} onChange={cambioEnElInput} />
        <button type="submit">Enviar Reserva</button>
    </form>

    </>
    )
  }