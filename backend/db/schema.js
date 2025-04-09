import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {  
  id: integer('id').primaryKey(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  firstName: text('firstName'),
  lastName: text('lastName'),
  friends: text('friends')
});

export const workoutTable = sqliteTable('workouts', {
  workoutID: integer('workoutID').primaryKey().autoIncrement(),
  userId: integer('userId').notNull().references(() => usersTable.id),
  workoutDate: text('workoutDate').notNull(),
  workoutPlanned: integer('workoutPlanned').notNull(),
});

export const exerciseTable = sqliteTable('exercises', {
  exerciseID: integer('exerciseID').primaryKey().autoIncrement(),
  workoutID: integer('workoutID').notNull().references(() => usersTable.id),
  typeID: integer('typeID').notNull(), // this refers to the id in exercises.json
  difficulty: integer('difficulty').notNull(),
  reps: integer('reps'),
  weight: integer('weight'),
  duration: integer('duration'),
  notes: text('notes'),
})

export const goalTable = sqliteTable('goals', {
  goalID: integer('goalID').primaryKey().autoIncrement(),
  startDate: text('startDate').notNull(),
  endDate: text('endDate').notNull(),
  streak: integer('streak'),
  numWorkouts: integer('numWorkouts'),
});