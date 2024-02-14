import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import Spinner from "./components/spinner/Spinner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <BrowserRouter basename="/mozgi/">
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
