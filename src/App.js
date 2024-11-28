import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import DemoPage from "./components/DemoPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "watch", element: <WatchPage /> },
      { path: "demo", element: <DemoPage /> },
    ],
  },
]);

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
