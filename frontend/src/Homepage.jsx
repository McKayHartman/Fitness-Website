import "./homepage.css";
import Header from "./Header.jsx";

function Homepage() {
const email = localStorage.getItem("email");

    return (
        <>
            <div className="homepageContainer">
                <header>

                    <h2>Welcome back, {email}!</h2>
                    <p>Welcome to our website.</p>

                    <h2>Welcome to Spotter</h2>
                    <p>Your journey toward confidence and consistency begins here.</p>
                    <button className="create-account-button" onClick={() => window.location.href = '/register'}>
                        Register for Free
                    </button>
                </header>

                <div className="body">
                    <img src="https://i.imgur.com/6jlNGc1.jpeg" alt="Fitness Image" />
                </div>

                <footer className="footer">
                    <p>&copy; Copyright 2025 Fitness Starter</p>
                    <ul className="footer-links">
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </footer>
            </div>
        </>
    );
}

export default Homepage;
