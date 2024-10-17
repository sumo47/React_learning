import React from 'react'
import ReactDOM from 'react-dom/client'
import "../index.css"    
// import Header from './src/components/Header.js   //? also same 
import Header from './components/Header' // default import syntax // Header can be any string
// import {Title} from './src/components/Header' // By Name import 
// import * as obj from './components/Header' // import all as object
import Body from './components/Body'
import Footer from './components/Footer'

// destructuring

// const {Title} = obj // destructuring

/*
   Header 
     - Logo (Title)
     - Nav Items (Right Side)
     - Cart
   Body
     - Search Bar
     - Resturant List
       - Restaurant Card (many cards)
            - Image
            - Name
            - Rating 
            - Cusines
   Footer
     - Links
     - copyright
*/










const AppContent = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(container) //expend it // can only rander one element
//? can we create multiple root in react?

// when i have to render my Functional component - 
root.render(<AppContent />)