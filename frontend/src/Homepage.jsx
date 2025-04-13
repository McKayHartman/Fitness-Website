import "./homepage.css";
import Header from "./Header.jsx";
// import image from './assets/pexels-victorfreitas-841128.jpg';

function Homepage() {
const email = localStorage.getItem("email");

    return (
        <>
            <div className="homepageContainer">
                <header>
                    <h2>Welcome back, {email}!</h2>
                    <p>Welcome to our website.</p>
                </header>

                <div className="body">
                    {/*<img src={image} alt="Fitness Image"/> image not yet working*/}
                </div>

                <footer>
                    <p>&copy; Copyright 2025</p>
                </footer>
            </div>
        </>
    );
}

export default Homepage;
