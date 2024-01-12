import React, {useEffect, useState} from 'react';
import './App.css'
import Child  from './Components/Child';

function App() {
  const [login,setLogin] = useState(true)
 const showLogin = ()=>{
  setLogin (!login)
 
 }
 useEffect(()=>{
  console.log("Mounded");
  return ()=>{
    console.log("un");
  }
},[login])
  return (
    <>
    <button onClick={showLogin}> Login</button>
      {login && <Child />}
    </>
  )
}

export default App
