import "./sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "./assets/home.svg";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    function SidebarItem(props) {
        return (
            <Link to={props.link} className={"sidebar-a"}>
                <span className="sidebar-icon-button">
                    <img alt="sidebaricon" src={props.icon}></img>
                </span>
                <p>{props.children}</p>
            </Link>
        );
    }
    return (
        <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
            <button
                className="sidebar-close-button"
                onClick={() => {
                    setSidebarOpen(false);
                    console.log("Closing sidebar");
                }}
            />
            <SidebarItem link="/" icon={HomeIcon}>
                Home
            </SidebarItem>
            <SidebarItem link="/about" icon={HomeIcon}>
                About
            </SidebarItem>
            <SidebarItem link="/login" icon={HomeIcon}>
                Login
            </SidebarItem>
            <SidebarItem link="/register" icon={HomeIcon}>
                Register
            </SidebarItem>
        </div>
    );
}

export default Sidebar;
