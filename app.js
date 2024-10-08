import React from 'react'
import ReactDOM from 'react-dom/client'


// console.log(heading1)
// React.createElement => object => HTML(Dom)


{/* <div class="header">
<h1>Navbar</h1>
<ul>
    <li>About us</li>
    <li>Contact us</li>
    <li>Support</li>
</ul>
</div> */}

const container = React.createElement(
    'div', { id: 'container' },
    [
        React.createElement('h1', {key: "1",id: "title",}, "Navbar"),
        React.createElement('ul', {},
            React.createElement('li', {}, 'About'),
            React.createElement('li', {}, "Contact us"),
            React.createElement('li', {}, "Support"),
        ),

    ])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container) //expend it // can only rander one element
//? can we create multiple root in react?