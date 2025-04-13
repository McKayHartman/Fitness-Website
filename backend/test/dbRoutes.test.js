import { describe, assert, expect, test } from "vitest";
import { request } from "./setupTest.js";

describe("test database", async () => {
    const testUser = {
        email: "createWorkoutTestuser@spottr.com",
        password: "test",
        username: "testUsername",
    };
    /*
    test("create workout", async () => {
        await request.post("/api/auth/register").send(testUser);
        const login = await request.post("/api/auth/login").send(testUser);
        const token = login.res.text.slice(1, -1);
        console.log(token);
        const testWorkout = {
            userID: "9999",
            workoutID: "",
            planned: true,
        };
        const createWorkout = await request
            .post("/api/db/createWorkout")
            .send(testWorkout);
        await request.delete("/api/auth/deleteUser").send(testUser);
        assert(true);
    });
    */
});
