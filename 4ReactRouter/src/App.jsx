/* eslint-disable no-unused-vars */
import React from "react";
import {
  createBrowserRouter, // To create a router for managing navigation
  createRoutesFromElements, // Used for defining routes in JSX syntax
  RouterProvider, // Provides the router context to the application
} from "react-router-dom";
import { Route } from "react-router-dom"; // For defining individual routes
import Home from "./pages/Home"; // Home page component
import Contact from "./pages/Contact"; // Contact page component
import Movie from "./pages/Product.jsx"; // Movie page component
import About from "./pages/About"; // About page component
import AppLayout from "./components/layout/AppLayout"; // App layout component with header, footer, and outlet for nested routes
import ErrorPage from "./pages/ErrorPage";
import getProductData from "./api/ProductData.jsx";
import Product from "./pages/Product.jsx";
const App = () => {
  // Define routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/", // Base path
      element: <AppLayout />, // Layout component wrapping all nested routes
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/", // Home page route
          element: <Home />,
        },
        {
          path: "/about", // About page route
          element: <About />,
        },
        {
          path: "/products", // Movie page route
          element: <Product />,
          loader:getProductData
        },
        {
          path: "/contact", // Contact page route
          element: <Contact />,
        },
      ],
    },
  ]);

  // Old way of defining routes using createRoutesFromElements
  // Uncomment to use this approach
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </>
  //   )
  // );

  // Provide the router to the application
  return <RouterProvider router={router} />;
};

export default App; // Export App as the default export
