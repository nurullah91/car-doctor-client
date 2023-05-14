import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRout from "./PrivetRout";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
          path: 'checkout/:id',
          element: <PrivetRout><Checkout></Checkout></PrivetRout>,
          loader: ({params}) =>fetch(`https://car-doctor-server-nurllah91.vercel.app/services/${params.id}`)
          
        },
        {
          path: 'bookings',
          element: <PrivetRout><Bookings></Bookings>
          </PrivetRout>
        }
      ]
    },
  ]);





  export default router;