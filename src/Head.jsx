import './App.css'
import { merge } from 'lodash-es';

function Head() {
  merge({a:1}, {b:2})
  return (
    <div>
      This is Header.
    </div>
  )
}

export default Head
