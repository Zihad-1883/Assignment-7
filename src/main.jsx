import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import NotFound from './pages/NotFound';
import RootLayout from './layout/RootLayout';
import Homepage from './pages/Homepage';

const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children : [
      {
        index : true,
        element : <Homepage></Homepage>
      },
      {
        path : "FriendDetails",
        element : <h2>Friend Details</h2>,
      },

      {
        path : "Timeline",
        element : <h2>Timeline</h2>,
      },

      {
        path : "Stats",
        element : <h2>Stats</h2>,
      },
    ],
    errorElement : <NotFound></NotFound>,
  },
]
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
