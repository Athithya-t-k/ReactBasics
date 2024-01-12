import React, { useEffect, useState } from 'react'

function Child() {
    const [username, setUsername ] = useState('')

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("interval is working")
        }, 5000);

        // return () => {
        //    clearInterval(intervalId)
        // }
    }, []);

    const fetchUsers = () =>{
        console.log("fetchUsers", username)
        // fetch('http://localhost: 4000/users')
    }
    
    useEffect(() => {
        const timoutId = setTimeout(() => {
            fetchUsers()
        }, 5000);

        // return ()=>{
        //     console.log(timoutId)
        //     clearTimeout(timoutId)
        // }
    }, [username]);


    const handleUsername = async (e)=>{
        setUsername(e.target.value)
    }

    return (
        <div>
            <input type="text" value={username} onChange={handleUsername}/>
        </div>
    )
}

export default Child
