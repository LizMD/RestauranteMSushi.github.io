import { useState } from 'react'
import './App.css'
import './components/Navbar/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/Navbar'
import { MainRouter } from './router/MainRouter'
import { Footer } from './components/Navbar/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Navbar />
    < MainRouter />
    < Footer />
    </>
  )
}

export default App


