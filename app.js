import React from 'react'
import ReactDOM from 'react-dom/client'

const heading1 = React.createElement('h1', {
    key:"1",
    title: "head",
    style: {
        color: "red",
        fontSize: "20px",
        backgroundColor: "black",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        border: "1px solid red",
        borderRadius: "10px",
        boxShadow: "10px 10px 10px 10px red",
        boxSizing: "border-box"
    }
}, "This is heading by React CDN")

const heading2 = React.createElement('h2', {
    key:"2",
    id: "heading2",
    style: {
        color: "green",
        fontSize: "20px",
        backgroundColor: "black",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        border: "1px solid green",
        borderRadius: "10px",
        boxShadow: "10px 10px 10px 10px green",
        boxSizing: "border-box"
    }
}, "This is heading2 by React CDN")


const container = React.createElement('div', {
    id: 'container'
}, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container) //expend it // can only rander one element
//? can we create multiple root in react?