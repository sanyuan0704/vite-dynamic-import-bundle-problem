import { useState, lazy, Suspense } from 'react'
import './App.css'
import axios from 'axios';


const Head = lazy(() => import('./Head'));
function App() {
  const [count, setCount] = useState(0)
  // axios.get('https://www.baidu.com').then(res => {
  //   console.log(res)
  // })
  return (
    <div className="App">
      <header className="App-header">
      <Suspense fallback={<div>123</div>}>
        <Head />
      </Suspense>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
