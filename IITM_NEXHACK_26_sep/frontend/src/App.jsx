import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Dashboard from './components/pages/Dashboard'
import Diet_plan from './components/pages/Dietplan'
import Workout from './components/pages/Workout'
import Home from './components/pages/Home'
import Data from './components/pages/data'
import Login from './components/pages/login'

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
