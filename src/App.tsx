import { useEffect } from 'react'
import init, { greet } from '../wasm/pkg/helloworld'

function App() {
  useEffect(() => {
    init()
  }, [])
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => greet('World')}>
          Hello, World
        </button>
      </div>
    </>
  )
}

export default App
