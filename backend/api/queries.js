import db from './database.js';


const getAllWorkouts = (callback) => {
	db.all('SELECT * FROM workouts', [], (err, rows) => {
		callback(err, rows);
	});
};

const addWorkout = (workout, callback) => {
	const { name, duration, type } = workout;
	db.run(
		'INSERT INTO workouts 9name, duration, type) VALUES (?, ?, ?,)',
		[name, duration, type],
		function (err) {
			callback(err, {id: this.lastID });
		}
	);
};

export default {
	getAllWorkouts,
	addWorkout
};