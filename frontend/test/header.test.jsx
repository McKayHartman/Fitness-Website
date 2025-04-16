import { expect, test, describe } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "@vitest/browser/context";
import { MemoryRouter } from "react-router-dom";
import Header from "../src/Header";

function testHeader() {
    return (
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
}

describe("sidebar", async () => {
    test("renders text", async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        await expect.element(getByText("Home")).toBeInTheDocument();
        await expect.element(getByText("Calendar")).toBeInTheDocument();
        await expect.element(getByText("Login")).toBeInTheDocument();
    });
    test("click button", async () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        const loginButton = getByRole("button", {
            class: "sidebar-close-button",
        });
        await loginButton.click();
    });
});
