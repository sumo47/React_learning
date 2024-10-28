import React, { useEffect, useState } from 'react'

function Profile(props) {
    const [count, setCount] = useState(0)
    useEffect(() => {

        // set Interval
       const timer =  setInterval(() => {
            console.log("Functional Profile component")
        }, 1000)

        return()=>{ // remove event handlers after change component
            // Clear Interval
            clearInterval(timer)
        }

    }, [])
    return (
        <div>
            <h2>Profile Functional component</h2>
            <p>name: {props.name}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(2)}>setCount</button>
        </div>
    )
}

export default Profile
