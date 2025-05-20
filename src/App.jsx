import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.scss'
import Home from './pages/Home'
import Myscooter from './pages/Myscooter'
import Settings from './pages/Settings'
import Users from './pages/Users'
import UsersDetail from './pages/UserDetail'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "profile",
      element: <Myscooter />
    },
    {
      path: "settings",
      element: <Settings />
    },
    {
      path: "users",
      element: <Users />
    },
    {
      path: "users/:id",
      element: <UsersDetail />
    }
  ])

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}
