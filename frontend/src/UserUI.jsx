// include facade elements
import { CreateAccountPage } from "./createAccountPage";
import { Login } from "./login.jsx"

// facade logic for grouping important UI elements
export default function AccountUI() {
    // TODO: add correct logic to process which input to perform
    if (1) {
        return (
            <CreateAccountPage />
        );
    }
    else {
        return (
            <Login />
        );
    }
}