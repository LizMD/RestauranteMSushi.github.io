import { useState } from "react"
import { ReservasForm } from "../components/Navbar/ReservasForm"
import { CardContainer } from "../components/Navbar/CardContainer"


export const Reservas = () => {

    return( 
        <>
        < ReservasForm />
        < CardContainer />
        </>
    )
  }