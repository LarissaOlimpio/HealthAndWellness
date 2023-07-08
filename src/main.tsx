import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { ApiProvider } from "./context/UseApi.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home.js";
import { ResultsUser} from "./routes/ResultsUser.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/ResultsUser",
        element: <ResultsUser/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider>
        <RouterProvider router={router}/>
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
