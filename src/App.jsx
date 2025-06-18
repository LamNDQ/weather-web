import { useState } from 'react'
import TopBar from './home/TopBar'
import Header from './home/Header'
import Hero from './home/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Header />
      <Hero />
    </>
  )
}

export default App
