import dots from "./assets/SidebarDots.svg";
import "./header.css";
import Sidebar from "./sidebar";
import { useState } from "react";
function HeaderWords({ setSidebarOpen }) {
    return (
        <div className="container header">
            <div className="headerleft">
                <img
                    id="headerdots"
                    src={dots}
                    alt="dots"
                    draggable="false"
                    onClick={() => {
                        console.log("opening");
                        setSidebarOpen(true);
                    }}
                ></img>
                <h1></h1>
            </div>
            <div className="headerright">
                <h1 id="headerlogoname">SPOTTER</h1>
            </div>
        </div>
    );
}

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            <div className="headercontainer">
                <HeaderWords setSidebarOpen={setSidebarOpen} />
            </div>
        </>
    );
}

export default Header;
