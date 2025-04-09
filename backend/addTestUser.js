import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { eq } from 'drizzle-orm';
const db = drizzle(process.env.DB_FILE_NAME);
import { usersTable } from './db/schema.js';
import { hash } from './hash.js';



// test script for adding a user (currently just updates one)

fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "testuser@spottr.com", password: "test", firstName: "first", lastName: "last"}),
    }).then((value) => value.json().then(thing => console.log(thing)));