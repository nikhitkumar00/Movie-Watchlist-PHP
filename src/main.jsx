import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import App from './App.jsx'
import Search from './Components/Search/Search'
import Favourites from './Components/Favorites/Favourites'
import Wanttowatch from './Components/Wanttowatch/Wanttowatch'
import Watched from './Components/Watched/Watched'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/search",
        element:<Search />
      },
      {
        path: "/favourites",
        element:<Favourites />
      },
      {
        path: "/wanttowatch",
        element:<Wanttowatch />
      },
      {
        path: "/watched",
        element:<Watched />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
