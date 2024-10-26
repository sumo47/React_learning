import React from 'react'
import ReactDOM from 'react-dom/client'
import "../index.css"
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './components/about'
import Error from './components/Error'
import Contact from './components/Contact'
import RestuarentMenu from './components/RestuarentMenu'

const AppContent = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

// Outlet for switch navigation with children

const AppRouter = createBrowserRouter([

  {
    path: "/", errorElement: <Error />, element: <AppContent />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/Restaurent/:id', element: <RestuarentMenu /> },

    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(container) //expend it // can only rander one element
//? can we create multiple root in react?

// when i have to render my Functional component - 
root.render(<RouterProvider router={AppRouter} />)