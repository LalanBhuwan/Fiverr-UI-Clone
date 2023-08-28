import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import Home from "./Pages/home/Home";
import Gigs from "./Pages/gigs/Gigs";
import Gig from "./Pages/gig/Gig";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Add from "./Pages/add/Add";
import Orders from "./Pages/orders/Orders";
import Messages from "./Pages/messages/Messages";
import Message from "./Pages/message/Message";
import MyGigs from "./Pages/myGigs/MyGigs";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
