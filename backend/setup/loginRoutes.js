import "dotenv/config";
import { Router } from "express";
import express from "express";
import { drizzle } from "drizzle-orm/libsql";
import { eq } from "drizzle-orm";
import { usersTable } from "../db/schema.js";
import { hash, sameHash } from "../hash.js";
import jwt from "jsonwebtoken";
import { generateToken, authenticateToken } from "./auth.js";
const db = drizzle(process.env.DB_FILE_NAME);

const loginRoutes = Router();

// we need to santize our inputs. Someone do that later

// test endpoint that returns all users
loginRoutes.get("/something", async (req, res) => {
  res.json(await db.select().from(usersTable));
});

loginRoutes.post("/login", async (req, res) => {
  // get the body's inputs
  const { password, email } = req.body;

  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  // check password
  if (await sameHash(password, user.passwordHash)) {
    // generate a token
    const token = generateToken(email);
    res.status(201).json(token);
  } else {
    res.status(500).json({ error: "Login failed." });
  }
});

loginRoutes.post("/register", async (req, res) => {
  // get the body's inputs
  const { password, email, firstName, lastName } = req.body;

  // check if user exists
  const users = await db.select().from(usersTable);
  if (users.some((user) => user.email == email)) {
    res.status(500).json({ error: "User already exists!" });
  } else {
    const result = await db.insert(usersTable).values({
      email: email,
      passwordHash: await hash(password),
      firstName: firstName,
      lastName: lastName,
    });
    res.status(201).json({ message: `User ${email} registered!` });
  }
});

loginRoutes.delete("/deleteUser", async (req, res) => {
  // get the body's inputs
  const { password, email } = req.body;

  // check if user exists
  const users = await db.select().from(usersTable);
  if (users.some((user) => user.email == email)) {
    // check if user password is the same
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
    if (sameHash(password, user.passwordHash)) {
      const result = await db
        .delete(usersTable)
        .where(eq(usersTable.email, email));
      res.status(201).json({ message: "User successfully deleted." });
    } else {
      res.status(500).json({ error: "Incorrect password." });
    }
  } else {
    res.status(500).json({ error: "User does not exist." });
  }

  // await db.delete(users).where(eq(users.email, email));
});

export default loginRoutes;
