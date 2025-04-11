import Header from "./Header";
import { useState } from "react";

// lay out web page
export default function CreateAccountPage() {

    // These variables store the values of the input fields
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

    // ==================================================
    // This is the onClick function for the submit button;
    // It needs to be replaced eventually with 
    // a function that sends the data to the server
    // ==================================================
    function displayValues(){
        console.log(email);
        console.log(username);
        console.log(password);
    }
    // ==================================================



    return (
        <>
            <div className="container">
                <AccountCreationForm
                    email={ email }
                    setEmail={ setEmail }
                    username={ username }
                    setUsername={ setUsername }
                    password={ password }
                    setPassword={ setPassword }
                />
            </div>
            <div>
                <button class="submitButton" onClick={displayValues}>Submit</button>
            </div>
        </>
    );
}

// This component/function is what holds all three textboxes
// and the submit button
function AccountCreationForm({ email, setEmail, username, setUsername, password, setPassword }) {
    return (
        <div className="flex-container">
            <h1>Create Account</h1>
            <Textbox label="Email" value={ email } onChange={setEmail} />
            <Textbox label="Username" value={ username } onChange={setUsername} />
            <Textbox label="Password" type="password" value={ password } onChange={setPassword} />
        </div>
    );
}

// modify Textbox function to accept objects for input information
function Textbox({ label, type, value, onChange }) {

    // receive given event as parameter for manipulation
    function handleChange(event) {
        // save value on event occurance
        const newVal = event.target.value;
        onChange(newVal);
    }

    return (
        <div className="flex-item">
            <p>{label}</p>
            <input 
            type={type ?? "text"}
            value={value}
            onChange={handleChange}
            />
        </div>
    );
}