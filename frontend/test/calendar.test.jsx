import { expect, test, describe } from "vitest";
import { render } from "vitest-browser-react";
import { MemoryRouter } from "react-router-dom";
import Calendar from "../src/Calendar";

describe("login", async () => {
    test("renders text", async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Calendar />
            </MemoryRouter>,
        );
        await expect.element(getByText("Edit Goal")).toBeInTheDocument();
        await expect.element(getByText("Progress")).toBeInTheDocument();
    });
    test("renders calendar", async () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Calendar />
            </MemoryRouter>,
        );
        await expect.element(getByRole("grid")).toBeInTheDocument();
    });
});
