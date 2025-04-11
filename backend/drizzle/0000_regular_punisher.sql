CREATE TABLE `exercises` (
	`exerciseID` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`workoutID` integer NOT NULL,
	`typeID` integer NOT NULL,
	`difficulty` integer NOT NULL,
	`reps` integer,
	`weight` integer,
	`duration` integer,
	`notes` text,
	FOREIGN KEY (`workoutID`) REFERENCES `workouts`(`workoutID`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `goals` (
	`goalID` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`startDate` text NOT NULL,
	`endDate` text NOT NULL,
	`streak` integer,
	`numWorkouts` integer
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`firstName` text,
	`lastName` text,
	`friends` text
);
--> statement-breakpoint
CREATE TABLE `workouts` (
	`workoutID` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` integer NOT NULL,
	`workoutDate` text NOT NULL,
	`workoutPlanned` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
