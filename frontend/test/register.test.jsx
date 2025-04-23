import { expect, test, describe } from "vitest";
import { render } from "vitest-browser-react";
import { MemoryRouter } from "react-router-dom";
import Register from "../src/register";

describe("login", async () => {
    test("renders textboxes", async () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>,
        );
        await getByRole("textbox", { name: "username" });
        await getByRole("textbox", { name: "password" });
    });
    test("renders text", async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>,
        );
        await expect.element(getByText("Username")).toBeInTheDocument();
        await expect.element(getByText("Password")).toBeInTheDocument();
        await expect.element(getByText("Email")).toBeInTheDocument();
    });
    test("click register", async () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>,
        );
        const loginButton = getByRole("button", { name: "Submit" });
        await loginButton.click();
    });
});
