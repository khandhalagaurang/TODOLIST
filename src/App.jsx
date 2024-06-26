import { useState } from 'react'

import './App.css'
import Input from './Input'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Input/>
     <Display/>
    </>
  )
}

export default App
