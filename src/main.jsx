import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
