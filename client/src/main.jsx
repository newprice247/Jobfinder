import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/index.css'
import { ThemeProvider } from "@material-tailwind/react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

// imports the app, and the pages for the app for use in the router
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import UserProfile from './pages/UserProfile.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
// creates the router for the app, the router is used to navigate between pages on the client side
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* the theme provider is used to set the theme for the app, the theme is used to set the color scheme for the app */}
    <ThemeProvider>

      {/* the router provider is used to provide the router to the app, the router is set as a prop to the router provider */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
