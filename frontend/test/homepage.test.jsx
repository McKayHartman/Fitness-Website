import { expect, test, describe } from "vitest";
import { render } from "vitest-browser-react";
import Homepage from "../src/Homepage";

describe("homepage", async () => {
    test("renders image", async () => {
        const { getByAltText, getByText } = render(<Homepage />);
        await expect.element(getByAltText("Fitness Image")).toBeInTheDocument();
    });
    test("renders text", async () => {
        const { getByText } = render(<Homepage />);
        await expect.element(getByText("Welcome to Spotter")).toBeInTheDocument();
        await expect.element(getByText("Terms of Service")).toBeInTheDocument();
    });
});
