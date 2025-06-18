import { useState } from 'react'
import TopBar from './home/TopBar'
import Header from './home/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Header />
    </>
  )
}

export default App
