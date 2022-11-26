import React from 'react'
import ReactDOM from 'react-dom/client'
import UI from './UI'
import Home from './routes/Home'
import Work from './routes/Work'
import AboutMe from './routes/AboutMe'
import Webdevelopement from './pages/Webdevelopement'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <UI />,
    errorElement: <h2>error</h2>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/work',
        element: <Work />,
      },
      {
        path: '/aboutme',
        element: <AboutMe />,
        
      },
      {
        path: '/work/webdevelopement',
        element: <Webdevelopement />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
