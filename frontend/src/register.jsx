import { useState } from "react";
import { useNavigate } from "react-router-dom";


// lay out web page
export default function Register() {
    // hook
    const navigate = useNavigate();


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
    async function handleSubmit(event) 
    {
        event.preventDefault();

        const response = await fetch("http://localhost:3000/api/auth/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            })
        });

            // Check if the response is valid
        if (response.ok) {
            try {
                const data = await response.json();
                console.log(data);  // You can handle the data here
                navigate('/login');
            } catch (error) {
                console.error("Failed to parse JSON:", error);
            }
        } else {
            console.error("HTTP error:", response.status);
        }
    }



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
                    handleSubmit={handleSubmit}
                />
            </div>
            <div>
                <button className="submitButton" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}

// This component/function is what holds all three textboxes
// and the submit button
function AccountCreationForm({ email, setEmail, username, setUsername, password, setPassword, handleSubmit }) {
    return (
        <div className="flex-container">
            <h1>Create Account</h1>
            <Textbox label="Email" field={ email } onChange={setEmail}/>
            <Textbox label="Username" field={ username } onChange={setUsername}/>
            <Textbox label="Password" type="password" field={ password } onChange={setPassword}/>
            {/* <div>
                <button className="submitButton" onClick={handleSubmit}>Submit</button>
            </div> */}

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