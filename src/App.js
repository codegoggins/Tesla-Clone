import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Account from "./pages/Account";


const Layout = () => {
  return (
    <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/login",
        element:<SignIn/>,
      },
      {
        path: "/register",
        element:<Register/>,
      },
      {
        path: "/tesla",
        element:<Account/>,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}>
    <div className="App">
        <Home/>
    </div>
    </RouterProvider>
  );
}

export default App;
