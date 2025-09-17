import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Dashboard from './components/function/Dashboard'
import Diet_plan from './components/function/pages/Dietplan'
import Workout from './components/function/pages/Workout'
import Home from './components/function/pages/Home'
import Data from './components/function/pages/data'
import Login from './components/function/pages/login'

function App() {
  const Router = createBrowserRouter([
    {
      path : '/',
      element : <><Login/></>
    },
    {
      path: '/Home',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/Dashboard',
      element: <><Navbar /><Dashboard /></>
    },
    {
      path: '/Diet_plan',
      element: <><Navbar /><Diet_plan /></>
    },
    {
      path: '/Workout',
      element: <><Navbar /><Workout /></>
    },
    {
      path : '/Data',
      element : <><Navbar/> <Data/> </>
    }
  ])

  return <RouterProvider router={Router} />
}

export default App
