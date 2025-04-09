import "./App.css";
import Header from "./Header.jsx";
import Login from "./login.jsx";

/*fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "yes", password: "MM" }),
}).then((value) => value.json().then((thing) => console.log(thing)));*/

function App() {
    return (
        <>
            <Login />
        </>
    );
}

export default App;
