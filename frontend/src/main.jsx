import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./Homepage.jsx";
import Login from "./login.jsx";
import CreateAccountPage from "./createAccountPage.jsx";
import About from "./About.jsx";
import Diary from "./Diary.jsx"
import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header.jsx";

function HeaderWrapper(){
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderWrapper />,
        children:[
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <CreateAccountPage />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/diary",
                element: <Diary />
            }
        ]
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
