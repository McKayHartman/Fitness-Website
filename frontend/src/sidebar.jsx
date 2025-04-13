import "./sidebar.css";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "./assets/home.svg";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    let sidebarRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!sidebarRef.current.contains(e.target)) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    function SidebarItem(props) {
        return (
            <Link to={props.link} className={"sidebar-a"}>
                <span className="sidebar-icon-button">{props.icon}</span>
                <p>{props.children}</p>
            </Link>
        );
    }
    return (
        <div
            ref={sidebarRef}
            className={`sidebar ${sidebarOpen ? "active" : ""}`}
        >
            <button
                className="sidebar-close-button"
                onClick={() => {
                    setSidebarOpen(false);
                    console.log("Closing sidebar");
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#999999"
                >
                    <path d="M434-208 162-480l272-272 88 88-184 184 184 184-88 88Zm276 0L438-480l272-272 88 88-183 184 183 184-88 88Z" />
                </svg>
            </button>
            <SidebarItem
                link="/"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M242.87-202.87H354.5V-445.5h251v242.63h111.63v-355.7L480-736.41 242.87-558.57v355.7Zm-91 91v-492.2L480-850.28l328.13 246.13v492.28H518.09v-246.22h-76.18v246.22H151.87ZM480-469.52Z" />
                    </svg>
                }
            >
                Home
            </SidebarItem>
            <SidebarItem
                link="/about"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M420.17-321.2q0-85.78 15.82-124.15 15.81-38.37 63.53-78.93 40.05-33.61 60.35-59.39 20.3-25.79 20.3-59.31 0-38.85-26.18-64.53-26.19-25.69-71.84-25.69-48.85 0-75.82 29.93-26.98 29.92-38.22 64.79l-114.48-48.78q22.67-69.02 81.3-117.58 58.64-48.55 147.22-48.55 107.87 0 165.93 60.65 58.05 60.65 58.05 146 0 53.83-21.5 91.36t-67.98 81.58q-48.04 44.84-58.78 69.46-10.74 24.62-10.74 83.14H420.17Zm61.98 250.29q-36.11 0-61.64-25.54-25.53-25.53-25.53-61.64t25.53-61.76q25.53-25.65 61.64-25.65t61.76 25.65q25.66 25.65 25.66 61.76t-25.66 61.64q-25.65 25.54-61.76 25.54Z" />
                    </svg>
                }
            >
                About
            </SidebarItem>
            <SidebarItem
                link="/login"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M478.09-111.87v-91h279.04v-554.26H478.09v-91h279.04q37.78 0 64.39 26.61t26.61 64.39v554.26q0 37.78-26.61 64.39t-64.39 26.61H478.09Zm-87.42-156.65-62.89-65.41L428.35-434.5H111.87v-91h316.48L327.78-626.07l62.89-65.41L601.91-480 390.67-268.52Z" />
                    </svg>
                }
            >
                Login
            </SidebarItem>
            <SidebarItem
                link="/register"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M70.91-147.8v-120.61q0-35.17 18.44-66.08 18.43-30.9 50.11-46.86 51-26 116.79-44.36t142.79-18.36q30 0 62.21 3.6t59.21 9.6l-80.05 79.8q-10.42-2-20.37-2h-21q-70.04 0-126.54 17t-90.59 35.57q-9 5-14.5 13.64t-5.5 19.64v28.42H405.7l91 91H70.91Zm557.55 10.73L487.83-277.7l58.63-58.39 82 82 202-202 58.63 58.39-260.63 260.63Zm-229.42-347q-69.58 0-118.86-49.27-49.27-49.27-49.27-118.86 0-69.58 49.27-118.74 49.28-49.15 118.86-49.15 69.59 0 118.86 49.15 49.27 49.16 49.27 118.74 0 69.59-49.27 118.86-49.27 49.27-118.86 49.27Zm6.66 245.27Zm-6.67-336.27q31.82 0 54.48-22.65 22.66-22.65 22.66-54.47 0-31.81-22.65-54.35-22.66-22.55-54.47-22.55t-54.47 22.59q-22.67 22.59-22.67 54.3 0 31.82 22.66 54.48 22.65 22.65 54.46 22.65Zm.01-77.13Z" />
                    </svg>
                }
            >
                Register
            </SidebarItem>
        </div>
    );
}

export default Sidebar;
