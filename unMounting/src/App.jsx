import React, {useEffect, useState} from 'react';
import './App.css'
import Child from './components/Child';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleShowLogin = ()=>{
    setShowLogin(!showLogin)
  }

  return (
    <>
      <button onClick={toggleShowLogin}>Login</button>
     { showLogin && <Child/>}
    </>
  )
}

export default App
