import React, { useEffect, useState } from 'react'
import Child from './Child';

function Counter() {
    let [count, setCount] = useState(0);
    const [color, setColor] = useState("Purple")
    const defColors = ["green", 'blue', 'yellow', 'orange', 'gray']

    const [child, setChild] = useState(true)
    const toShow = () => {
        setChild(
            !child 
        )
    }


    const decrement = () => {
        const newVal = count - 1
        setCount(newVal)
    }
    const increment = () => {
        const newValue = count + 1
        setCount(newValue)

    }
    // useEffect(() => {
    //     setCount(10)
    // },[])


    useEffect(() => {
        const randomValue = Math.random() * defColors.length
        const randomIndex = Math.floor(randomValue)
        const changeColor = defColors[randomIndex]
        setColor(changeColor)
    }, [count])




    return (
        <div className='flex justify-center items-center'>
            <div style={{ backgroundColor: color }} className='w-60 h-60 bg-red-400  flex flex-col items-center gap-10'>
                <h1>MANI KUTTY</h1>
                <div className='flex gap-5'>
                    <button onClick={decrement}
                        className='w-14 h-14 bg-slate-200'> -

                    </button>
                    {count}
                    <button onClick={increment}
                        className='w-14 h-14 bg-slate-200'> +

                    </button> 
                    <button onClick={toShow}
                        className='w-16 h-16 bg-orange-400'> {child ? 'hide' :'show'}

                    </button>
                    {child ? (<Child/>) :(null) }
                </div>
            </div>
        </div>
    )
}

export default Counter
