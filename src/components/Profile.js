import React, { useState } from 'react'

function Profile(props) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Profile Functional component</h2>
            <p>name: {props.name}</p>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(2)}>setCount</button>
        </div>
    )
}

export default Profile
