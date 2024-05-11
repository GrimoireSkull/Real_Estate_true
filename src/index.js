import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PListPage from './pages/PListPage';
import ProfilePage from './pages/ProfilePage';
import {rentalsData} from './components/Rentals';
import ShortlistPage from './pages/ShortlistPage';
//import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/property/:Id",
    element: <PListPage rentals={rentalsData}/>,
  },
  {
    path: "/profile/",
    element: <ProfilePage/>,
  },
  {
    path: "/shortlist/",
    element: <ShortlistPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


