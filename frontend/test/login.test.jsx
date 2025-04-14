import { expect, test, describe } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "@vitest/browser/context";
import Login from "../src/login";

describe("login", async () => {
    test("renders textboxes", async () => {
        const { getByRole } = render(<Login />);
        await getByRole('textbox', {name:'username'});
        await getByRole('textbox', {name:'password'});
    });
    test("renders text", async () => {
        const { getByText } = render(<Login />);
        await expect.element(getByText("Username")).toBeInTheDocument();
        await expect.element(getByText("Password")).toBeInTheDocument();
        await expect.element(getByText("Create Account")).toBeInTheDocument();
    });
    test("click log in", async () => {
        const { getByRole } = render(<Login />);
        const loginButton = getByRole('button', {name: 'Log In'});
        await loginButton.click(); 
    });
});
