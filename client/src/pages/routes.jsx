import { ErrorPage } from 'ErrorPage.jsx'
import { Homepage } from 'Homepage.jsx'
import { LoginPage } from 'LoginPage.jsx'
import { RegisterPage } from 'RegisterPage.jsx'
import { UserProfile } from 'UserProfile.jsx'



import {
    createBrowserRouter,
    RouterProvider,
    Redirect,
    Switch,
    Route,
    Router
  } from 'react-router-dom'
import ProtectRoutes from '../utils/ProtectRoutes.jsx'

export default function Routes() {
    const { user } = useAuth();
    const routesForUser = [
      {
        path: '/',
        element: <ProtectRoutes />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <Homepage />,
          },
          {
            path: '/user-profile',
            element: <UserProfile />,
          },
        ],
      },
    ]
    const routesForGuest = [
      {
        path: '/',
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <Homepage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/register',
            element: <RegisterPage />,
          },
        ],
      },
    ]
  
    const router = createBrowserRouter([
    ...routesForUser,
    (!user && routesForGuest),
  ])
    return <RouterProvider router={router} />
  }