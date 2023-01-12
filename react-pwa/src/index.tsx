import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SecondPage from "./components/SecondPage";
import FirstPage from "./components/FirstPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/first-page",
            element: <FirstPage />,
        },
        {
            path: "/second-page",
            element: <SecondPage />,
        },
    ],
    { basename: "/pwa" }
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();