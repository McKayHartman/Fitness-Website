import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {  
  id: integer('id').primaryKey(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  firstName: text('firstName'),
  lastName: text('lastName'),
});

export const workoutTable = sqliteTable('workouts', {
  workoutID: integer('workoutID').primaryKey().autoIncrement(),
  userId: integer('userId').notNull().references(() => usersTable.id),
  workoutDate: text('workoutDate').notNull(),
});

export const exerciseTable = sqliteTable('exercises', {
  exerciseID: integer('exerciseID').primaryKey().autoIncrement(),
  workoutID: integer('workoutID').notNull().references(() => usersTable.id),
  exerciseType: integer('exerciseType').notNull(), // this refers to the id in exercises.json
  difficulty: integer('difficulty').notNull(),
  reps: integer('reps'),
  weight: integer('weight'),
  duration: integer('duration'),
  notes: text('notes'),
})