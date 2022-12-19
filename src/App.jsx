import React from "react";
import Login from "./pages/Login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import { Fragment } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
