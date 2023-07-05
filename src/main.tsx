import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { ApiProvider } from "./context/UseApi.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home.js";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider>
      <RouterProvider router={router}/>
    </ApiProvider>
  </React.StrictMode>
);
