import { describe, assert, expect, test } from "vitest";
import { request } from "./setupTest.js";
describe("Test auth api", async () => {
    test("returns from test endpoint", async () => {
        const res = await request.get("/api/auth/something");
        expect(res).toBeDefined;
    });

    test("register user", async () => {
        const testUser = {
            email: "registerTestuser@spottr.com",
            username: "username",
            password: "test"
            
        };
        await request.delete("/api/auth/deleteUser").send(testUser);
        const res = await request.post("/api/auth/register").send(testUser);
        await request.delete("/api/auth/deleteUser").send(testUser);
        expect(await res.statusCode).toBe(201);
    });

    test("delete user", async () => {
        const deleteUser = {
            email: "deleteTestUser@spottr.com",
            username: "username",
            password: "test"
        };
        await request.post("/api/auth/register").send(deleteUser);
        const res = await request
            .delete("/api/auth/deleteUser")
            .send(deleteUser);
        expect(await res.statusCode).toBe(201);
    });

    test("log in", async () => {
        const testUser = {
            email: "loginTestuser@spottr.com",
            username: "username",
            password: "test"
        };
        await request.post("/api/auth/register").send(testUser);
        const res = await request.post("/api/auth/login").send(testUser);
        await request.delete("/api/auth/deleteUser").send(testUser);
        expect(await res.statusCode).toBe(201);
    });
});
