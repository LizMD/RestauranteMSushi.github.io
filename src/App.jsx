import { useState } from 'react'
import './App.css'
import './components/Navbar/Navbar.css'
import { Navbar } from './components/Navbar/Navbar'
import { MainRouter } from './router/MainRouter'
import { ReservasForm } from './components/Navbar/ReservasForm'
import { CardContainer } from './components/Navbar/CardContainer'
import { Footer } from './components/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Navbar />
    < MainRouter />
    < ReservasForm />
    < CardContainer />
    < Footer />
    </>
  )
}

export default App


