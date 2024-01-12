import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import Card from '../Components/card'
import Homebody from '../Components/Homebody'


function Home() {
 const [Datas, setData] = useState([])
 const [isLoading,setIsLoading] = useState(true)
   
 useEffect (()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
       .then((response)=> response.json())
       .then((Datas)=>{ setData(Datas)})
       console.log(Datas);
    //    setIsLoading(false)
       setTimeout(() => {
        
       },2000);
 })

  return (
    <div>
      <Header/>
      {
        isLoading  === true ?(
            <div className='w-[100%] h-96 bg-rose-400 animate-pulse flex justify-center items-center text-3xl text-white'>
              Loading....
            </div>
          ) : (
            <div className='flex gap-10 p-10 flex-wrap min-w-[400px]'>
              {
                Datas.map((user, index) => {
                  return <Card key={index} user={user} />
                })
              }
            </div>
          )
      }
      <Footer/>
      
      <Homebody/>     
    </div>
  )
}

export default Home
