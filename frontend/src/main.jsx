import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./Homepage.jsx";
import Login from "./login.jsx";
import CreateAccountPage from "./createAccountPage.jsx";
import About from "./About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<CreateAccountPage />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
