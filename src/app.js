import "./App.css"
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './components/MainContainer'
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: '/', element: <Body />,
  children: [
    { path: '/', element: <MainContainer /> },
    { path: 'watch', element: <WatchPage /> },
  ]
}])


function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}



/**
 * Head
 * Body 
 *   Sidebar
 *     MenuItems
 * MainContainer
 *   ButtonsList
 *   VideoContainer
 *     VideoCart
 * 
 * 
 */


export default App;
