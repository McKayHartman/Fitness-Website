CREATE TABLE `user_workout` (
	`workoutID` integer PRIMARY KEY NOT NULL,
	`userId` integer NOT NULL,
	`workoutDate` text NOT NULL,
	`workoutType` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`firstName` text,
	`lastName` text
);
