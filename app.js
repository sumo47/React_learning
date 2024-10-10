import React from 'react'
import ReactDOM from 'react-dom/client'


// console.log(heading1)

//* React.createElement => object => HTML(Dom)


{/* <div class="header">
<h1>Navbar</h1>
<ul>
    <li>About us</li>
    <li>Contact us</li>
    <li>Support</li>
</ul>
</div> */}

//  const heading1 = React.createElement('h1', { className: ' h1'}, "heading")
// react element is just a object

// const container = createElement(
//     'div', { id: 'container' },
//     [
//         createElement('h1', { key: "1", id: "title", }, "Navbar"),
//         createElement('ul', {},
//             createElement('li', {}, 'About'),
//             createElement('li', {}, "Contact us"),
//             createElement('li', {}, "Support"),
//         ),

//     ]
// )

// * JSX => React.createElement => Object => HTML(Dom)
// babel convert JSX to React.createElement 
// jsx is syntax 

const heading = (<h1 id="title" key="h2" >this is React element</h1>) // jsx expression

const Footer = () => (<p>this is normal function</p>)

// now h1 call as React Element 

//  React Component
//   - Functional - NEW  - normal javascript function which returns REact Element
//   - Class Based Component - OLD

// <--- FUNCTIONAL COMPONENT --->
// if i had to use component inside component , it's called component composition
const HeaderComponent = () => {
    return <div>
        {heading} {/* variable */}
        <h1> Namaste React functional component</h1>
        {Footer()} {/* function */}
        {/* we can call as Tag or function */}
        <Footer /> {/* component */}
        {/* we can write all javascript code inside curly bracces */}
    </div>
}
//  rules - Name of component starts with capital later but is not mandatory
//  for returning multiple react elements wrap in parentheses4
//  all jsx / react elements should wrap in one element



const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(container) //expend it // can only rander one element
//? can we create multiple root in react?

// when i have to render my Functional component - 
root.render(<HeaderComponent />)