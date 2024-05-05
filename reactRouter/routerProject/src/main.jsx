import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { Githubloader } from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'
import Nested from './Components/Nested/Nested.jsx'
const router =  createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "",
        element:<Home/>,
      },
      {
        path: "about",
        element:<About/>,
        children: [
          {
            path: "nested",
            element: <Nested />
          }
        ]
      },
      {
        path: "contact",
        element: <Contact />,
        
      },
      {
        loader:Githubloader,
        path: "github",
        element:<Github/>,
      },
      {
        path: "user/:id",
        element:<User/>,
        
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
