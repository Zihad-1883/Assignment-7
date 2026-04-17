import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import NotFound from './pages/NotFound';
import RootLayout from './layout/RootLayout';
import Homepage from './pages/Homepage';
import Timeline from './pages/Timeline';
import FriendDetails from './pages/FriendDetails';
import { ToastContainer } from 'react-toastify';
import TimelineProvider from './Contexts/TimelineProvider';


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
        path : "/FriendDetails/:id",
        loader : () => fetch('/friends.json'),
        element : <FriendDetails></FriendDetails>
      },

      {
        path : "/Timeline",
        element : <Timeline></Timeline>
      },

      {
        path : "/Stats",
        element : <h2>Stats</h2>,
      },
    ],
    errorElement : <NotFound></NotFound>,
  },
]
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </TimelineProvider>
  </StrictMode>,
)
