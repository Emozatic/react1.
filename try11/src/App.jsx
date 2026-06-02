import { useState } from 'react'
import './App.css'
import LudoGame from './LudoGame'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LudoGame/>
    </>
  )
}

export default App
