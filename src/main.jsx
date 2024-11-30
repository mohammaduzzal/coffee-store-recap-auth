import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import Home from './components/Home';
import MainLayout from './MainLayout/MainLayout';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './providers/AuthProvider';
import Users from './components/Users';

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/coffees')
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
     
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "user",
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
      },
    ]
    
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </StrictMode>,
)
