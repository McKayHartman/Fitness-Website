# Installation

First, install [node.js](https://nodejs.org/en/download) and [pnpm](https://pnpm.io/installation).

To install frontend or backend, go into the folder of **frontend** or **backend** and run `pnpm i`

## Backend
In backend, use `pnpm drizzle-kit push` to create the test database.
If the database is changed, use `pnpm drizzle-kit generate` and then `pnpm drizzle-kit migrate`.

It's nice to have the **"Sqlite Viewer"** extension installed in VS Code for debugging, but this is not necessary.

## Frontend
To run the frontend, run `pnpm run dev`.

## Testing
To run tests, cd into the folder of **frontend** or **backend**.
For frontend, run `pnpm test:browser`.
For backend, run `pnpm test:print`.
## Building
To build the frontend, run `pnpm run build`.

# Versioning
Release v1.0

# Testing
`cd` into the **backend** directory. <br>
Run the below command to run automated tests:
`pnpm test:ui`

# Authors
- Bryce Panza
- Lacy Hamilton
- Marco de la Rosa
- McKay Hartman
- Christian Lamb
- Logan Hunt

# License
This project has its own developed [license](https://github.com/McKayHartman/Fitness-Website/blob/main/LICENSE). Please read over this file for more details.

---
## Other Documents:

[Exercises](./docs/exercises.md): Specification for exercises that the algorithm will recognize. <br>
Also includes list of specified [muscle groups](./docs/muscleGroups.md) & [equipment](./docs/equipment.md). <br>
[Questionnaire](./docs/questionnaire.md): Specification for the diagnostic questionnaire given to new users. <br>
[Database](./docs/database.md): Specification for the database objects. <br>
