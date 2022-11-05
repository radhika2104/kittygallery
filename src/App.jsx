import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import KittyGallery from './kittygallery'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <KittyGallery/>
    </div>
  )
}

export default App
