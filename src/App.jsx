import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigation } from './components/Navigation/Navigation'
import { Comment } from './components/Comment/Comment'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <Navigation/>
    </>
  )
}

export default App
