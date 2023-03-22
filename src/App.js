import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import Header from "./component/header/header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import SIRE from "./pages/SIRE";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/ChiSiamo", element: <ChiSiamo /> },
  { path: "/SIRE", element: <SIRE /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
