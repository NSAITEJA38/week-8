import { useState } from 'react'
import {createBrowserRouter ,RouterProvider} from "react-router"
import './App.css'
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import User from './components/User';

function App() {
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"users-list",
          element: <UsersList />
        },
        {
          path: "add-user",
          element: <AddUser />
        },
        {
          path:"user",
          element: <User />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={routerObj} ></RouterProvider>
  )
}

export default App