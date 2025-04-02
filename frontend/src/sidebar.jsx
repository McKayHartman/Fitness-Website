import "./sidebar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar({sidebarOpen, setSidebarOpen}) {
    return (
        <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
            <button
                className="sidebar-close-button"
                onClick={() => {
                    setSidebarOpen(false);
                    console.log("click!");
                }}
            />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}
