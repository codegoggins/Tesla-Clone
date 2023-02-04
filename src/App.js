import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Account from "./pages/Account";
import { useSelector } from "react-redux";
import {selectUser} from './redux/userSlice'

const Layout = () => {
  return (
    <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

const ProtectedRoute = ({children}) => {
   const user = useSelector(selectUser);
   if(!user){
      return <Navigate to='/'/>
   }
   return children;
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
        element:
        <ProtectedRoute>
          <Account/>,
        </ProtectedRoute>  
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
