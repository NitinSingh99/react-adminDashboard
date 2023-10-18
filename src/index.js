import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Products from "./Routes/Products";
import Home from "./Routes/Home";
import Reports from "./Routes/Reports";
import "./App.css";
import Navbar from "./components/Navbar";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([

  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "products",
        element: <Products/>,
      },
      {
        path: "reports",
        element: <Reports/>,
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Outlet,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Products from "./Routes/Products";
// import Home from "./Routes/Home";
// import Reports from "./Routes/Reports";
// import Navbar from "./components/Navbar";
// import "./App.css";

// const AppLayout = () => (
//   <>
//     <Navbar />
//     <Outlet />
//   </>
// );

// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route element={<AppLayout />}>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/products" element={<Products />} />
// //       <Route path="/reports" element={<Reports />} />
// //     </Route>
// //   )
// // );

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "products",
//         element: <Products />,
//       },
//       {
//         path: "reports",
//         element: <Reports />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );