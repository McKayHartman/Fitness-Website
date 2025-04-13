import "./login.css";
import Header from "./Header";
import {useState} from "react";

function Login() {
    // create variables to store username and password
    // init as empty
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: username, password}),
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token;
            const email = data.email;

            localStorage.setItem("token", token);
            localStorage.setItem("email", email);
            console.log("JWT stored", token);

            navigate("/")

        } else {
            console.error("Login failed");
        }
    }

    return (
        <>
            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <h1>Log In</h1>
                    <label htmlFor="username">Username</label>
                    <br />
                    <input
                        className="input-form"
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <br />

                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        className="input-form"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br />

                    <button class="login-button" type="submit">
                        Log In
                    </button>
                    <br />
                    <button type="button">Create Account</button>
                    <button type="guest">Continue as Guest</button>
                </form>
            </div>
        </>
    );
}

export default Login;
