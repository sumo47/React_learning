import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const { data, status, statusText } = useRouteError()
    console.log(data)
    return (
        <div>
            <h1>Error Page</h1>
            <h4>{data}</h4>
            <p>{status + " : " + statusText}</p>
        </div>

    )
}

export default Error;