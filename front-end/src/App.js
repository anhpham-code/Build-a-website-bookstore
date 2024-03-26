import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import Home from "./site/Home";
import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";
import Book from "./site/Book";
import BookDetails from "./site/BookDetails";
import CartModal from "./components/CartModal";
import Checkout from "./site/Checkout";
import Login from "./site/Login";
import Register from "./site/Register";
import Toast, { MyToast } from "./components/MyToast";
import { AuthProvider } from "./context/AuthContext";
import Order from "./site/Order";


const SiteLayout = () => {
  return (
    <>
     
        <NavBar />
        <Outlet />
        <Footer />
        <CartModal />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <Book />
      },
      {
        path: '/books/:id',
        element: <BookDetails />
      },
      {
        path: '/orders',
        element: <Order/>
      }

    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
