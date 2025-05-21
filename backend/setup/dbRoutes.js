import "dotenv/config";
import { Router } from "express";
import express from "express";
import { drizzle } from "drizzle-orm/libsql";
import { eq } from "drizzle-orm";
import { usersTable, workoutTable, exerciseTable } from "../db/schema.js";
import { hash, sameHash } from "../hash.js";
import jwt from "jsonwebtoken";
import { generateToken, authenticateToken } from "./auth.js";
const db = drizzle(process.env.DB_FILE_NAME);

const dbRoutes = Router();

dbRoutes.post("/createWorkout", authenticateToken, async (req, res) => {
    const email = req.user;
    const [user] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email));
    const { exercises, planned } = req.body;
    const plannedInt = planned ? 1 : 0;
    const currentDate = new Date().toISOString();

    const [workoutResult] = await db
        .insert(workoutTable)
        .values({
            userId: user.id,
            workoutPlanned: plannedInt,
            workoutDate: currentDate,
        })
        .returning({ workoutID: workoutTable.workoutID });

    console.log(workoutResult);

    exercises?.forEach(async (exercise) => {
        const exerciseResult = await db
            .insert(exerciseTable)
            .values({
                workoutID: workoutResult.workoutID,
                typeID: exercise.typeID,
                difficulty: exercise.difficulty,
                notes: exercise.notes,
                reps: exercise.reps,
                weight: exercise.weight,
                duration: exercise.duration,
            })
            .returning({ exerciseID: exerciseTable.exerciseID});
        console.log(exerciseResult);
    });

    res.sendStatus(201);
});

dbRoutes.get("/getWorkouts", authenticateToken, async (req, res) => {
    email = req.user;
    const [user] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email));
    const workouts = await db
        .select()
        .from(workoutTable)
        .where(eq(workoutTable.userId, user.id));
    const exercises = await db.select().from(exerciseTable);
    workouts.forEach((workout) => {
        workout.exercises = [];
        exercises
            .filter((exercise) => exercise.workoutID == workout.workoutID)
            .forEach((exercise) => workout.exercises.append(exercise));
    });
    res.status(201).json(workouts);
});

dbRoutes.delete("/deleteWorkout", authenticateToken, async (req, res) => {
    email = req.user;
    const [user] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email));
    const { workoutID } = req;

    const workoutResult = await db
        .delete(workoutTable)
        .where(eq(workoutID, workoutTable.workoutID))
        .returning();
    const exercisesResult = await db
        .delete(exerciseTable)
        .where(eq(workoutID, exerciseTable.workoutID))
        .returning();

    console.log(workoutResult);
    console.log(exercisesResult);

    res.sendStatus(201);
});

export default dbRoutes;
