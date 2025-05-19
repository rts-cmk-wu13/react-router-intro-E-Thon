import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.scss'
import Home from './pages/Home'
import Myscooter from './pages/Myscooter'
import Settings from './pages/Settings'

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
    }
  ])

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}
