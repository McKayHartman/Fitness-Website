import express from 'express';

const router = express.Router();
import queries from './queries.js';

router.get('/workouts', (req, res) => {
	queries.getAllWorkouts((err, rows) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json(rows);
	});	
});

router.post('/workouts', (req, res) => {
	queries.addWorkout(req.body, (err, result) => {
		if (err) return res.status(500).json({ error: err.message });
		res.status(201).json(result);	
	});
});

export default router;