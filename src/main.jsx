import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Correct package
import "./index.css";
import Router from "./router/Router.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
