// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import MainLayout from "./layout/MainLayout.jsx";
// import Home from "./pages/Home.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter aktiviert Client-Side Routing für die gesamte App */}
    {/* Für andere Router-Arten würden wir auch hier eine andere Komponente verwenden */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
export default App;
