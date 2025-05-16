import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./Homepage.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";
import About from "./About.jsx";
import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header.jsx";
import CalendarPage from "./Calendar.jsx";
import Workouts from "./Workouts.jsx";

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
                path: "/workouts",
                element: <Workouts />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/calendar",
                element: <CalendarPage />
            }
        ]
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
