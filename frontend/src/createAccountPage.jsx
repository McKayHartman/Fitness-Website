import Header from "./Header";
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

// procedure to create the title field
function TextField() {
    return (
        <div className="flex-container">
            <h1>Create Account</h1>
            <Textbox title="Email" />
            <Textbox title="Username" />
            <Textbox title="Password" />
            <SubmitButton />
        </div>
    );
}
// modify Textbox function to accept a title argument
function Textbox({ title }) {
    return (
        <div className="flex-item">
            <p>{title}</p>
            <input />
        </div>
    );
}

function SubmitButton() {
    return (
        <div>
            <button className="submitButton">Submit</button>
        </div>
    );
}
