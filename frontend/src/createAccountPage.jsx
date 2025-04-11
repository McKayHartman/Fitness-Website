import Header from "./Header";
import { useState } from "react";

// lay out web page
export default function CreateAccountPage() {
    return (
        <>
            <div className="container">
                <TextField />
            </div>
        </>
    );
}

// component containing user interactive fields
function TextField() {
    // tesing props
    const email = { title: "Email", value: ""};
    const username = { title: "Username", value: ""};
    const password = { title: "Password", value: ""};

    // confirm references are working
    function displayValues() {
        console.log(email.value);
        console.log(username.value);
        console.log(password.value);
    }

    return (
        <div className="flex-container">
            <h1>Create Account</h1>
            <Textbox field={ email } />
            <Textbox field={ username } />
            <Textbox field={ password } />
            <div>
                <button className="submitButton" onClick={ postFields }>Submit</button>
            </div>
        </div>
    );
}

// modify Textbox function to accept objects for input information
function Textbox({ field }) {

    // state variable to track input field
    const [textInput, setText] = useState('');

    // receive given event as parameter for manipulation
    function handleChange(event) {
        // save value on event occurance
        const newVal = event.target.value;
        // update based on new user input using state hook
        setText(newVal);
        field.value = newVal;
    }

    return (
        <div className="flex-item">
            <p>{ field.title }</p>
            <input type="text" onChange={ handleChange }/>
        </div>
    );
}