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
import { useDispatch, useSelector } from "react-redux";
import {selectUser,login,logout} from './redux/userSlice'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

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

  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,(response)=>{
       response ? (
          dispatch(login({
            email:response.email,
            uid:response.uid,
            displayName:response.displayName
          }))
       ) : (
        dispatch(logout())
       )
    })
  },[dispatch])

  return (
    <RouterProvider router={router}>
    <div className="App">
        <Home/>
    </div>
    </RouterProvider>
  );
}

export default App;
