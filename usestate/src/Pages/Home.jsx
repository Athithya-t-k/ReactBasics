import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/header'
import Homebody from '../components/Homebody'
import Counter from '../components/Counter'
import Child from '../components/Child'


function Home() {
  return (
    <div>
      <Header/>
      <Footer/>
      <Homebody/>
      <Counter/>
      {/* <Child/> */}

    </div>
  )
}


export default Home
