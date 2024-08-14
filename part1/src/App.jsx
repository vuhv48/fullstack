/* eslint-disable react/prop-types */
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
const Hello = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  console.log('Hello from component');
  const friend = [
    {
      name: 'P.Linh', age: 31
    },
    {
      name: 'L.Linh', age: 29
    },
    {
      name: 'Q.Anh', age: 27
    },
  ];
  const arrt = [1,2,3,6,7];
  console.log(arrt[-1]);
  arrt.forEach(value => {
    console.log(value);
  });

  return (
    <div>
      <p>Hello world</p>
      <p>{friend[0].name}</p>
      <Hello name='HagenProps'/>
      <Footer />
    </div>
  )
}

export default App