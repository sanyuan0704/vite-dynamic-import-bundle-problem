import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>123</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
