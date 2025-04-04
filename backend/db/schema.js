import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {  
  id: integer('id').primaryKey(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  firstName: text('firstName'),
  lastName: text('lastName'),
});

export const userWorkoutTable = sqliteTable('user_workout', {
  workoutID: integer('workoutID').primaryKey(), // Removed .autoincrement()
  userId: integer('userId').notNull().references(() => usersTable.id),
  workoutDate: text('workoutDate').notNull(),
  workoutType: text('workoutType').notNull(),
});
