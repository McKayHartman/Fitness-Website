import "./sidebar.css";
import React, { useState } from "react";
import { Link } from "react-router";
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
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    );
}
