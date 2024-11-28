import React, { useRef, useEffect } from 'react'

const DemoPage2 = () => {
    const [count, setCount] = React.useState(0)
    let x = 0;
    const ref = useRef(0) // it will not run when render component
    //it's not like that 
    // ref = 0   ❌

    const intervelRef = useRef(null)


    useEffect(() => {
        intervelRef.current = setInterval(() => {
            console.log("Namaste React" + Math.random())
        }, 1000)

        return () => clearInterval(intervelRef.current)
    }, [])

    return (
        <div className='w-96 h-96 mt-9 ml-4 p-2 border-solid border-black border-4 rounded-md'>
            <h1>difference between normal variable and state variable</h1>
            <div className='flex items-center'>
                <button
                    onClick={() => {
                        x++;
                        console.log("x= " + x)
                    }}
                    className='bg-green-300 border border-solid rounded-md p-1 m-2 hover:bg-blue-300'>
                    Increment
                </button>
                <p className=''>Normal variable: {x}</p>
            </div>
            <div className='flex items-center'>
                <button
                    onClick={() => setCount(count + 1)}
                    className='bg-blue-300 border border-solid rounded-md p-1 m-2 hover:bg-blue-300'>
                    Increment
                </button>
                <p className=''>State variable: {count}</p>
            </div>
            <div className='flex items-center'>
                <button
                    onClick={() => {
                        ref.current = ref.current + 1;
                        console.log("ref= " + ref.current)
                    }}
                    className='bg-red-300 border border-solid rounded-md p-1 m-2 hover:bg-blue-300'>
                    Increment
                </button>
                <p className=''>Ref variable: {ref.current}</p>
            </div>
            <button
                onClick={() => { clearInterval(intervelRef.current) }}
                className='bg-red-800 border border-solid rounded-lg p-2 text-white'>
                Stop Intervel
            </button>
            <p>after increament normal variable it's increasing but not rendring , wehn we want to update state variable it's updated and rerendered the componetn , so normal value goes reset to 0</p>
        </div>
    )
}

export default DemoPage2
