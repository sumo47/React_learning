import React, { lazy, Suspense, useState } from 'react'
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
import Profile from './components/Profile'
import SimmerUI from './components/SimmerUI'
import UserContext from './utility/userContext'
// import ProfileClass from './components/ProfileClassComponent'
// import InstaMart from './components/instaMart'

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic import 

const InstaMart = lazy(() => import("./components/instaMart")) // promise
//Upon on Demant Loading --> upon render ==> suspend loading
// wrap InstaMart in Suspance than react will wait untill bundle of InstaMart will load



const AppContent = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: '123 Main St'
  })
  return (
    <>
      <Header />
      <UserContext.Provider value={{ user: user,  setUser: setUser }}>

        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  )
}

// Outlet for switch navigation with children

const AppRouter = createBrowserRouter([

  {
    path: "/", errorElement: <Error />, element: <AppContent />,
    children: [
      { path: '/', element: <Body /> },
      {
        path: '/about', element: <About />,
        children: [{ path: 'profile', element: <Profile /> }]
      },
      { path: '/contact', element: <Contact /> },
      { path: '/Restaurent/:id', element: <RestuarentMenu /> },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<SimmerUI />}>
            <InstaMart />
          </Suspense>)
      },

    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(container) //expend it // can only rander one element
//? can we create multiple root in react?

// when i have to render my Functional component - 
root.render(<RouterProvider router={AppRouter} />)